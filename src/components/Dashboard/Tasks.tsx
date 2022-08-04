import React from "react";
import { Box, Text, Checkbox } from "@chakra-ui/react";

export default function Tasks({ data }: any) {
  return (
    <Box
      w={{ base: "100%", lg: "40%" }}
      border="1px solid #d7d7d7"
      borderRadius={10}
      p="1rem"
      bg="white"
      color="#000"
    >
      <Text fontWeight="medium" fontSize="xl" mb="1rem">
        Tasks
      </Text>

      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Checkbox>
          <Box>
            <Text fontSize="sm" opacity="0.8">
              Buy Milk
            </Text>
          </Box>
        </Checkbox>
        <Text fontSize="sm" opacity="0.8">
          7 hours
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Checkbox>
          <Box>
            <Text fontSize="sm" opacity="0.8">
              Buy Milk
            </Text>
          </Box>
        </Checkbox>
        <Text fontSize="sm" opacity="0.8">
          7 hours
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Checkbox>
          <Box>
            <Text fontSize="sm" opacity="0.8">
              Buy Milk
            </Text>
          </Box>
        </Checkbox>
        <Text fontSize="sm" opacity="0.8">
          7 hours
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Checkbox>
          <Box>
            <Text fontSize="sm" opacity="0.8">
              Buy Milk
            </Text>
          </Box>
        </Checkbox>
        <Text fontSize="sm" opacity="0.8">
          7 hours
        </Text>
      </Box>
    </Box>
  );
}
