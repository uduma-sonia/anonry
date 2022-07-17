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
  Center,
  Divider,
  HStack,
  Link,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function SignupForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
              Create an Anonry account
            </Heading>
            <Box mt="1.5rem">
              <FormLabel color="#000000" fontSize="sm">
                Sign up with Google
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
            </Center>
            <FormControl color="#000000">
              <FormLabel fontSize="sm">Email</FormLabel>

              <Input
                type="email"
                _focus={{ border: "1px solid #00000090" }}
                h="50px"
              />
            </FormControl>
            <FormControl color="#000000" mt="1.5rem">
              <FormLabel fontSize="sm">Username</FormLabel>

              <Input
                type="text"
                _focus={{ border: "1px solid #00000090" }}
                h="50px"
              />
            </FormControl>
            <FormControl color="#000000" mt="1.5rem">
              <FormLabel fontSize="sm">Password</FormLabel>

              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  _focus={{ border: "1px solid #00000090" }}
                  h="50px"
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
      </Box>
    </Box>
  );
}
