import React from "react";
import { Box, Input, Button } from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <Box display="flex" maxWidth="400px" position="sticky" top="0px">
      <Input
        border="1px solid"
        borderColor="gray.800"
        borderRightRadius="0px"
        _focus={{ outline: "none" }}
        _active={{ bg: "none" }}
        _hover={{ bg: "none" }}
        bg="none"
      />
      <Button borderLeftRadius="0px" variant="primary">
        Search
      </Button>
    </Box>
  );
}
