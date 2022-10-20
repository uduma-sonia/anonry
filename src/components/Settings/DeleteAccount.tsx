import React from "react";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { DeleteAccountModal } from "@components/Modals";

export default function DeleteAccount() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        border="1px solid"
        borderColor="red.400"
        display="flex"
        justifyContent="space-between"
        p="20px"
        alignItems="center"
        borderRadius={10}
        mt="2rem"
      >
        <Text>Delete your account</Text>

        <Button
          variant="outline"
          border="1px solid"
          borderColor="red.400"
          color="red.500"
          _hover={{ bg: "red.500", color: "white" }}
          onClick={onOpen}
          _focus={{ outline: "none" }}
        >
          Delete Account
        </Button>
      </Box>

      <DeleteAccountModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
