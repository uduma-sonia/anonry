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
  useToast,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { authAPI } from "@utils/api";

const schema = z.object({
  email: z.string().min(1),
});
type ForgotPasswordSchema = z.infer<typeof schema>;

export default function ForgotPasswordForm() {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (data) => {
      setIsSubmitting(true);
      const output = {
        ...data,
        link: `https://anonry.netlify.app/reset-password?email=${data.email}`,
      };

      try {
        const result = await authAPI.forgotPassword(output);

        if (result) {
          reset();
          toast({
            position: "top-right",
            duration: 9000,
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
                {result?.data?.message ??
                  "Your password reset details has been sent to your email"}
              </Box>
            ),
          });
        }
      } catch (err: any) {
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
              {err ?? "Error, try again"}
            </Box>
          ),
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset, toast]
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
              Forgot your password?
            </Heading>

            <Text color="#000000" fontSize="sm" mt="1.5rem">
              Send us the email associated with the account and a link will be
              sent to reset your password
            </Text>

            <FormControl color="#000000" mt="1.5rem">
              <FormLabel fontSize="sm" htmlFor="email">
                Email
              </FormLabel>

              <Input
                type="email"
                id="email"
                _focus={{ border: "1px solid #00000090" }}
                h="50px"
                {...register("email")}
              />
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
              Continue
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
