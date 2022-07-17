import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

export default function Statistics() {
  return (
    <Box
      w={{ base: "100%", lg: "40%" }}
      border="1px solid #d7d7d7"
      borderRadius={10}
      p="1rem"
      bg="white"
      color="#000"
    >
      <Box textAlign="center">
        <Text>0</Text>

        <Heading fontWeight="medium" fontSize="xl">
          Notes
        </Heading>
      </Box>

      <Box mt="2rem" display="flex" justifyContent="space-between">
        <Box textAlign="center">
          <Text>0</Text>

          <Text fontWeight="medium" fontSize="md">
            Published
          </Text>
        </Box>

        <Box textAlign="center">
          <Text>0</Text>

          <Text fontWeight="medium" fontSize="md">
            Likes
          </Text>
        </Box>

        <Box textAlign="center">
          <Text>0</Text>

          <Text fontWeight="medium" fontSize="md">
            Saved
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
