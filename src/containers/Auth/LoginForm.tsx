import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  HStack,
  Link,
  ScaleFade,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { successToast, errorToast } from "@lib/toast";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}/;
const schema = z.object({
  identifier: z.string().min(1),
  password: z.string().regex(regex),
});
type LoginSchema = z.infer<typeof schema>;

export default function LoginForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (data) => {
      setIsSubmitting(true);

      try {
        const result: any = await signIn("credentials", {
          ...data,
          redirect: false,
        });

        if (result.error) {
          const errMessage =
            result.error == "CredentialsSignin"
              ? "Credentials do not match"
              : result.error;

          errorToast({ message: errMessage ?? "An error occured, Try again" });
        }

        if (result.ok) {
          successToast({ message: "Signed in, Redirecting..." });
          router.push("/dashboard");
        }
      } catch (err: any) {
        errorToast({ message: "An error occured, Try again" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [router]
  );

  const onGoogleLogin = useCallback(
    async (data) => {
      setGoogleLoading(true);

      const output = {
        token: data?.access_token,
      };

      try {
        const result: any = await signIn("google", {
          ...output,
          redirect: false,
        });

        if (result.error) {
          errorToast({
            message: "An error occured, Try again",
          });
        }

        if (result.ok) {
          successToast({ message: "Signed in, Redirecting..." });
          router.push("/dashboard");
        }
      } catch (err: any) {
        errorToast({ message: "An error occured, Try again" });
      } finally {
        setGoogleLoading(false);
      }
    },
    [router]
  );

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => onGoogleLogin(tokenResponse),
  });

  return (
    <Box bg="white">
      <Box
        maxW="min(100%, 1600px)"
        mx="auto"
        px={{ base: "1rem", lg: "3.5rem" }}
        py="2rem"
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

          <ScaleFade initialScale={0.8} in={true}>
            <Box mt="1rem" border="1px solid #424242" borderRadius={5} p="2rem">
              <Heading
                color="#000000"
                fontSize="xl"
                opacity="0.8"
                fontWeight="semibold"
              >
                Sign in to your account
              </Heading>
              <Box mt="1.5rem">
                <Button
                  variant="primary"
                  minH="50px"
                  borderRadius={5}
                  w="100%"
                  _focus={{ outline: "none" }}
                  _active={{ bg: "none" }}
                  type="button"
                  fontSize="sm"
                  iconSpacing={4}
                  leftIcon={<FcGoogle size="1.3rem" />}
                  onClick={() => googleLogin()}
                  isLoading={googleLoading}
                >
                  Sign in with Google
                </Button>
              </Box>

              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  color="#000000"
                  mt="1.5rem"
                  isInvalid={Boolean(errors.identifier)}
                >
                  <FormLabel fontSize="sm">Email or Username</FormLabel>

                  <Input
                    type="text"
                    _focus={{ border: "1px solid #00000090" }}
                    h="50px"
                    id="identifier"
                    {...register("identifier")}
                  />
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
                  isLoading={isSubmitting}
                >
                  Continue
                </Button>
              </Box>

              <HStack
                mt="1rem"
                fontSize="sm"
                color="#000000"
                justifyContent="space-between"
                spacing={0}
                flexDir={{ base: "column", md: "row" }}
              >
                <Text mb={{ base: 3, lg: 0 }}>
                  Don&apos;t Have an account?{" "}
                  <Link
                    href="/signup"
                    textDecoration="underline"
                    _focus={{ outline: "none" }}
                  >
                    Signup
                  </Link>
                </Text>

                <Link href="forgot-password" _focus={{ outline: "none" }}>
                  Forgot Password?
                </Link>
              </HStack>
            </Box>
          </ScaleFade>
        </Box>
      </Box>
    </Box>
  );
}
