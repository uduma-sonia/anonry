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
  Link,
  ScaleFade,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { authAPI } from "utils/api";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { successToast, errorToast } from "@lib/toast";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}/;
const schema = z.object({
  user_name: z.string().min(3),
  email: z.string().email(),
  password: z.string().regex(regex),
});

type SignUpFormSchema = z.infer<typeof schema>;

export default function SignupForm() {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (data) => {
      setIsSubmitting(true);
      const output = {
        ...data,
        link: `https://anonry.netlify.app/verify-email?email=${data.email}`,
      };

      try {
        const result = await authAPI.signup(output);

        if (result) {
          reset();

          successToast({ message: "OTP has been sent to your email" });
        }
      } catch (err: any) {
        errorToast({ message: err ?? "An error occured, Try again" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset]
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
          errorToast({ message: "An error occured, Try again" });
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
            fontWeight="800"
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
                Create an Anonry account
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
                  Sign up with Google
                </Button>
              </Box>

              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  color="#000000"
                  mt="1.5rem"
                  isInvalid={Boolean(errors.email)}
                >
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

                <FormControl
                  color="#000000"
                  mt="1.5rem"
                  isInvalid={Boolean(errors.user_name)}
                >
                  <FormLabel fontSize="sm" htmlFor="userName">
                    Username
                  </FormLabel>

                  <Input
                    type="text"
                    id="userName"
                    _focus={{ border: "1px solid #00000090" }}
                    h="50px"
                    {...register("user_name")}
                  />
                </FormControl>

                <FormControl
                  color="#000000"
                  mt="1.5rem"
                  isInvalid={Boolean(errors.password)}
                >
                  <FormLabel fontSize="sm" htmlFor="password">
                    Password
                  </FormLabel>

                  <InputGroup size="md">
                    <Input
                      type={show ? "text" : "password"}
                      id="password"
                      _focus={{ border: "1px solid #00000090" }}
                      h="50px"
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

                <Box mt="1rem" fontSize="sm" color="#000000">
                  <Text>
                    Have an account?{" "}
                    <Link
                      href="/login"
                      textDecoration="underline"
                      _focus={{ outline: "none" }}
                    >
                      Login
                    </Link>
                  </Text>
                </Box>
              </Box>
            </Box>
          </ScaleFade>
        </Box>
      </Box>
    </Box>
  );
}
