import { createStandaloneToast } from "@chakra-ui/toast";
import { Box } from "@chakra-ui/react";

const toast = createStandaloneToast();

interface ToastProps {
  message?: string;
}

export const errorToast = ({ message }: ToastProps) => {
  return toast({
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
        {message ?? "An error occured, Try again"}
      </Box>
    ),
  });
};

export const successToast = ({ message }: ToastProps) => {
  return toast({
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
        {message ?? "Success"}
      </Box>
    ),
  });
};
