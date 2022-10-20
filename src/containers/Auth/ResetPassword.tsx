import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Center,
  Link,
  InputGroup,
  InputRightElement,
  PinInput,
  PinInputField,
  Stack,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { authAPI } from "@utils/api";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/router";
import { successToast, errorToast } from "@lib/toast";

const otpLength = 4;
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}/;
const schema = z.object({
  otp: z
    .string()
    .nonempty({ message: "Required" })
    .length(otpLength, { message: `OTP must contain ${otpLength} characters` }),
  password: z.string().regex(regex),
});
type ForgotPasswordSchema = z.infer<typeof schema>;

export default function ResetPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();
  const { email } = router.query;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (data) => {
      setIsSubmitting(true);
      const output = {
        ...data,
        email,
      };

      try {
        const result = await authAPI.resetPassword(output);

        if (result) {
          reset();
          successToast({ message: result?.data?.message });
          router.push("/login");
        }
      } catch (err: any) {
        errorToast({ message: err ?? "An error occured, Try again" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, reset, router]
  );

  return (
    <Box bg="white">
      <Box
        maxW="min(100%, 1600px)"
        mx="auto"
        px={{ base: "1rem", lg: "3.5rem" }}
        py="3rem"
      >
        <Box maxW="540px" mx="auto">
          <Link
            letterSpacing="-2px"
            fontWeight="bold"
            color="#000000"
            fontSize="2xl"
            _hover={{ textDecoration: "none" }}
          >
            Anonry
          </Link>

          <Box
            mt="1rem"
            border="1px solid #424242"
            borderRadius={5}
            p="2rem"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Heading
              color="#000000"
              fontSize="xl"
              opacity="0.8"
              fontWeight="semibold"
            >
              Reset your password
            </Heading>

            <Text color="#000000" fontSize="sm" mt="1.5rem" textAlign="center">
              Please enter your new password and the OTP sent to{" "}
              <Text fontWeight="medium">{email}</Text>
            </Text>

            <FormControl my="1.5rem" isInvalid={Boolean(errors.otp)}>
              <Stack
                spacing={{ base: "0.5rem", md: "1.5rem" }}
                direction="row"
                justify="center"
              >
                <Controller
                  name="otp"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <PinInput
                      otp
                      placeholder=""
                      type="alphanumeric"
                      autoFocus
                      onChange={(value) => onChange(value)}
                    >
                      {[...new Array(otpLength)].map((_, index) => {
                        return (
                          <PinInputField
                            key={index}
                            _focus={{ border: "2px solid #000000" }}
                          />
                        );
                      })}
                    </PinInput>
                  )}
                />
              </Stack>

              <Text
                fontSize="xs"
                mt="10px"
                textAlign="center"
                color="text.danger"
              >
                {errors.otp && errors.otp.message}
              </Text>
            </FormControl>

            <FormControl
              color="#000000"
              mt="1.5rem"
              isInvalid={Boolean(errors.password)}
            >
              <FormLabel fontSize="sm">Password</FormLabel>

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
              aria-label="submit button"
              isLoading={isSubmitting}
            >
              Reset
            </Button>

            <Center mt="1.5rem">
              <Link
                fontSize="sm"
                href="/login"
                textDecoration="underline"
                _focus={{ outline: "none" }}
              >
                Login
              </Link>
            </Center>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
