import { useCallback, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
  Box,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useSWRConfig } from "swr";
import { swrKeys } from "@utils/swrKeys";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { userAPI } from "@utils/api";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const schema = z.object({
  user_name: z.string().min(1),
});
type LoginSchema = z.infer<typeof schema>;

export default function SetUsername({ isOpen, onClose }: ModalProps) {
  const cancelRef: any = useRef();
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (data: LoginSchema) => {
      setIsSubmitting(true);
      try {
        const result = await userAPI.updateUser(data);
        if (result) {
          mutate(swrKeys.getUserProfile);
          onClose();

          toast({
            position: "top-right",
            duration: 2000,
            isClosable: true,
            render: () => (
              <Box
                color="white"
                p={3}
                bg="black"
                borderRadius={10}
                textAlign="center"
                fontSize="xs"
              >
                {result?.data?.message}
              </Box>
            ),
          });
        }
      } catch (error: any) {
        toast({
          position: "top-right",
          duration: 9000,
          isClosable: true,
          render: () => (
            <Box
              color="white"
              p={3}
              bg="#fa4e37"
              borderRadius={10}
              textAlign="center"
              fontSize="xs"
            >
              {error ?? "Error, try again"}
            </Box>
          ),
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [mutate, onClose, toast]
  );

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent p={5}>
            <AlertDialogHeader
              fontSize="md"
              textAlign="center"
              fontWeight="semibold"
            >
              You have to set a username to continue
            </AlertDialogHeader>

            <AlertDialogBody textAlign="center">
              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  color="#000000"
                  my="2rem"
                  isInvalid={Boolean(errors.user_name)}
                >
                  <FormLabel fontSize="sm" htmlFor="user_name">
                    Username
                  </FormLabel>

                  <Input
                    type="text"
                    _focus={{ border: "1px solid #00000090" }}
                    h="50px"
                    id="user_name"
                    autoFocus={true}
                    {...register("user_name")}
                  />
                </FormControl>

                <Button
                  variant="primary"
                  isLoading={isSubmitting}
                  w="100%"
                  type="submit"
                  minH="50px"
                  aria-label="submit"
                >
                  Continue
                </Button>
              </Box>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
