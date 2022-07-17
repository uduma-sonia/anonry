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
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function VerifyEmailForm() {
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
              Verify email
            </Heading>

            <Text color="#000000" fontSize="sm" mt="1.5rem" textAlign="center">
              Enter the OTP sent to{" "}
              <Text as="span" fontWeight="semibold">
                sohnyauduma@gmail.com
              </Text>
            </Text>
            <HStack justifyContent="center" my="3rem">
              <PinInput otp placeholder="" autoFocus type="alphanumeric">
                <PinInputField _focus={{ border: "2px solid #000000" }} />
                <PinInputField _focus={{ border: "2px solid #000000" }} />
                <PinInputField _focus={{ border: "2px solid #000000" }} />
                <PinInputField _focus={{ border: "2px solid #000000" }} />
              </PinInput>
            </HStack>

            <Button
              variant="primary"
              w="100%"
              _focus={{ outline: "none" }}
              minH="50px"
              type="submit"
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
