import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns";

export default function LatestNotesCard({ data }: any) {
  return (
    <Box bg="#f7f7f7" p="1rem" borderRadius={10}>
      <Heading fontSize="md" fontWeight="medium" mb="0.6rem" noOfLines={1}>
        {data.title}
      </Heading>

      <Text fontSize="sm" opacity="0.8" noOfLines={2}>
        {data.description}
      </Text>

      <Text fontSize="10px" opacity="0.5" textAlign="right" mt="0.5rem">
        {format(new Date(data.createdAt), "P")}
      </Text>
    </Box>
  );
}
