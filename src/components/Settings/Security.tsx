import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { authAPI } from "@utils/api";
import { successToast, errorToast } from "@lib/toast";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}/;
const schema = z.object({
  password: z.string().regex(regex),
});
type UpdateSchema = z.infer<typeof schema>;

export default function Security() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (data) => {
      setIsSubmitting(true);

      try {
        const result = await authAPI.changePassword(data);
        if (result) {
          reset();
          successToast({ message: result?.data?.message });
        }
      } catch (err: any) {
        errorToast({ message: err ?? "An error occured, Try again" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset]
  );

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl color="#000000" mt="1.5rem">
        <FormLabel fontSize="sm">Current Password</FormLabel>

        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            _focus={{ border: "1px solid #00000090" }}
            h="50px"
            id="currentPassword"
          />
          <InputRightElement h="100%">
            <Button
              px="0px"
              minW="0px"
              _focus={{ outline: "none" }}
              _active={{ bg: "none" }}
              _hover={{ bg: "none" }}
              bg="none"
              onClick={handleClick}
              type="button"
            >
              {show ? (
                <AiOutlineEye size="1.4rem" />
              ) : (
                <AiOutlineEyeInvisible size="1.4rem" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl
        color="#000000"
        mt="1.5rem"
        isInvalid={Boolean(errors.password)}
      >
        <FormLabel fontSize="sm">New Password</FormLabel>

        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            _focus={{ border: "1px solid #00000090" }}
            h="50px"
            id="password"
            {...register("password")}
          />
          <InputRightElement h="100%">
            <Button
              px="0px"
              minW="0px"
              _focus={{ outline: "none" }}
              _active={{ bg: "none" }}
              _hover={{ bg: "none" }}
              bg="none"
              onClick={handleClick}
              type="button"
            >
              {show ? (
                <AiOutlineEye size="1.4rem" />
              ) : (
                <AiOutlineEyeInvisible size="1.4rem" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        variant="primary"
        w="100%"
        mt="1.5rem"
        _focus={{ outline: "none" }}
        minH="50px"
        type="submit"
        isLoading={isSubmitting}
      >
        Continue
      </Button>
    </Box>
  );
}
