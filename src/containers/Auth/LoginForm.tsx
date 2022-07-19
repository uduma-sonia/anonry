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
  useToast,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";

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
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        const result: any = await signIn("signin", {
          ...data,
          redirect: false,
        });

        if (result.error) {
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
                {result.error ?? "An error occured, Try again"}
              </Box>
            ),
          });
        }

        if (result.ok) {
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
                Signed in, Redirecting...
              </Box>
            ),
          });
          router.push("/");
        }
      } catch (err: any) {
        console.log(err);
      } finally {
        setIsSubmitting(false);
      }
    },
    [router, toast]
  );

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

          <Box mt="1rem" border="1px solid #424242" borderRadius={5} p="2rem">
            <Heading
              color="#000000"
              fontSize="xl"
              opacity="0.8"
              fontWeight="semibold"
            >
              Sign in to your account
            </Heading>
            {/* <Box mt="1.5rem">
              <FormLabel color="#000000" fontSize="sm">
                Sign in with Google
              </FormLabel>

              <Button
                variant="outline"
                border="1px solid rgb(226, 232, 240)"
                h="50px"
                borderRadius={5}
                w="100%"
                _focus={{ outline: "none" }}
                _active={{ bg: "none" }}
                type="button"
              >
                <FcGoogle size="1.5rem" />
              </Button>
            </Box>
            <Center my="1.5rem" gap="10px">
              <Divider borderColor="#00000040" />
              <Text fontWeight="medium" fontSize="sm" color="#000000">
                Or
              </Text>
              <Divider borderColor="#00000040" />
            </Center> */}

            <Box as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                color="#000000"
                mt="1.5rem"
                isInvalid={Boolean(errors.identifier)}
              >
                <FormLabel fontSize="sm">Email or UserName</FormLabel>

                <Input
                  type="email"
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
                        <AiOutlineEyeInvisible size="1.4rem" />
                      ) : (
                        <AiOutlineEye size="1.4rem" />
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
              <Text mb={3}>
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
        </Box>
      </Box>
    </Box>
  );
}
