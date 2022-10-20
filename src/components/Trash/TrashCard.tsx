import React from "react";
import { Checkbox, Heading, Box } from "@chakra-ui/react";

export default function TrashCard({ data, handleSelect }: any) {
  return (
    <Checkbox
      size="lg"
      colorScheme="blackAlpha"
      onChange={() => handleSelect(data?._id)}
    >
      <Box
        bg="white"
        border="1px solid #d7d7d7"
        borderRadius="10px"
        p="15px"
        position="relative"
        boxShadow="sm"
      >
        <Heading fontSize="md" fontWeight="medium">
          {data?.entry?.title}
        </Heading>
      </Box>
    </Checkbox>
  );
}
