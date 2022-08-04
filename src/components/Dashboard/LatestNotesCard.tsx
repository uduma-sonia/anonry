import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { cutTextFormatter } from "@utils/Formatter";

export default function LatestNotesCard({ data }: any) {
  return (
    <Box bg="#f7f7f7" p="1rem" borderRadius={10}>
      <Heading fontSize="md" fontWeight="medium" mb="0.6rem">
        {cutTextFormatter(data.title, 50)}
      </Heading>

      <Text fontSize="sm" opacity="0.8">
        {cutTextFormatter(data.description, 100)}
      </Text>

      <Text fontSize="10px" opacity="0.5" textAlign="right">
        {format(new Date(data.createdAt), "P")}
      </Text>
    </Box>
  );
}
