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

export default function ForgotPasswordForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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

          <Box mt="1rem" border="1px solid #424242" borderRadius={5} p="2rem">
            <Heading
              color="#000000"
              fontSize="xl"
              opacity="0.8"
              fontWeight="semibold"
            >
              Reset your password?
            </Heading>

            <Text color="#000000" fontSize="sm" mt="1.5rem">
              Send us the emai associated with the account and a link will be
              sent to reset your password
            </Text>
            <FormControl color="#000000" mt="1.5rem">
              <FormLabel fontSize="sm">Email</FormLabel>

              <Input
                type="email"
                _focus={{ border: "1px solid #00000090" }}
                h="50px"
              />
            </FormControl>

            <Button
              variant="solid"
              w="100%"
              mt="1.5rem"
              bg="#000000"
              color="#ffffff"
              fontSize="sm"
              _focus={{ outline: "none" }}
              _active={{ bg: "#000000" }}
              _hover={{ bg: "#232324" }}
              h="50px"
            >
              Continue
            </Button>

            <Center mt="1.5rem">
              <Link
                fontSize="sm"
                href="/signup"
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
