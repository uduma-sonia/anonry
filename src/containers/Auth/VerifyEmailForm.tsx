import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  Center,
  Link,
  PinInput,
  PinInputField,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { authAPI } from "@utils/api";
import { signIn } from "next-auth/react";
import { successToast, errorToast } from "@lib/toast";

const otpLength = 4;

const schema = z.object({
  otp: z
    .string()
    .nonempty({ message: "Required" })
    .length(otpLength, { message: `OTP must contain ${otpLength} characters` }),
});
type verifySchema = z.infer<typeof schema>;

export default function VerifyEmailForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { email } = router.query;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<verifySchema>({
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
        const result: any = await signIn("verify-email", {
          ...output,
          redirect: false,
        });

        if (result.error) {
          errorToast({
            message: result?.error ?? "An error occured, Try again",
          });
        }

        if (result.ok) {
          successToast({ message: "Verified. Redirecting..." });
          router.push("/dashboard");
        }
      } catch (err: any) {
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, router]
  );

  const onResend = async () => {
    try {
      const data = {
        email,
        link: `https://anonry.netlify.app/verify-email?email=${email}`,
      };
      const result = await authAPI.resendOtp(data);
      if (result) {
        // @ts-ignore
        successToast({ message: result?.message ?? "Sent" });
      }
    } catch (err: any) {
      errorToast({ message: err ?? "An error occured, Try again" });
    }
  };

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
            href="/"
            letterSpacing="-2px"
            fontWeight="bold"
            color="#000000"
            fontSize="2xl"
            _hover={{ textDecoration: "none" }}
          >
            Anonry
          </Link>

          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            mt="1rem"
            border="1px solid #424242"
            borderRadius={5}
            p="2rem"
          >
            <Heading
              color="#000000"
              fontSize="xl"
              opacity="0.8"
              fontWeight="semibold"
            >
              Verify email
            </Heading>

            <Text color="#000000" fontSize="sm" mt="1.5rem" textAlign="center">
              Enter the OTP sent to{" "}
              <Text as="span" fontWeight="semibold">
                {email ?? ""}
              </Text>
            </Text>

            <FormControl my="3rem" isInvalid={Boolean(errors.otp)}>
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

            <Center mb="2rem">
              <Button
                variant="link"
                type="button"
                fontSize="sm"
                color="#000"
                onClick={() => onResend()}
                _focus={{ outline: "1px solid gray" }}
              >
                Resend Otp
              </Button>
            </Center>

            <Button
              variant="primary"
              w="100%"
              _focus={{ outline: "none" }}
              minH="50px"
              type="submit"
              isLoading={isSubmitting}
            >
              Verify
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
