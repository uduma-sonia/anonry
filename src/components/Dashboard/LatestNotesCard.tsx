import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function LatestNotesCard({ data }: any) {
  return (
    <Box bg="#f7f7f7" p="1rem" borderRadius={10}>
      <Heading fontSize="md" fontWeight="medium" mb="0.6rem">
        {data.title}
      </Heading>

      <Text fontSize="sm" opacity="0.8">
        {data.text}
      </Text>
    </Box>
  );
}
