import React from "react";
import { Box, Text, Checkbox } from "@chakra-ui/react";

export default function Statistics({ data }: any) {
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

      {/* <Box textAlign="center">
        <Text>{data?.no_of_entries}</Text>

        <Heading fontWeight="medium" fontSize="xl">
          Notes
        </Heading>
      </Box>

      <Box mt="2rem" display="flex" justifyContent="space-between">
        <Box textAlign="center">
          <Text>{data?.no_of_published_entries}</Text>

          <Text fontWeight="medium" fontSize="md">
            Published
          </Text>
        </Box>

        <Box textAlign="center">
          <Text>{data?.no_of_notes}</Text>

          <Text fontWeight="medium" fontSize="md">
            Likes
          </Text>
        </Box>

        <Box textAlign="center">
          <Text>{data?.no_of_likes}</Text>

          <Text fontWeight="medium" fontSize="md">
            Saved
          </Text>
        </Box>
      </Box> */}
    </Box>
  );
}
