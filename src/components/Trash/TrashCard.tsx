import React from "react";
import { Text, Checkbox, Heading, Box, Tag } from "@chakra-ui/react";

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
        p="20px"
        mb="20px"
        position="relative"
        boxShadow="sm"
      >
        <Heading fontSize="md" fontWeight="medium" mt="0.5rem">
          {data?.entry?.title}
        </Heading>

        <Text fontSize="sm" mt="0.7rem" opacity="0.7">
          {data?.entry?.description}
        </Text>

        <Box mt="1rem" display="flex" flexWrap="wrap" gap="10px">
          {data?.entry?.tags?.map(({ name }: { name: string }) => (
            <Tag
              key={name}
              fontSize="xs"
              opacity="0.7"
              borderRadius="20px"
              w="fit-content"
              fontWeight="400"
            >
              {name}
            </Tag>
          ))}
        </Box>
      </Box>
    </Checkbox>
  );
}
