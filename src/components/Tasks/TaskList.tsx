import React from "react";
import { Box, Checkbox, Text, Button } from "@chakra-ui/react";

interface ListProps {
  handleShowDetails: () => void;
}

export default function TaskList({ handleShowDetails }: ListProps) {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mb="1rem"
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        minHeight="50px"
        alignItems="center"
        background="#d7d7d7"
        padding="0px 10px"
        borderRadius="sm"
      >
        <Box display="flex" alignItems="center" gap="10px">
          <Checkbox
            defaultChecked
            _checked={{ textDecor: "line-through" }}
            colorScheme="blackAlpha"
            size="lg"
          />
          <Button
            fontSize="sm"
            opacity="0.9"
            fontWeight="400"
            variant="unstyled"
            textDecoration="line-through"
            onClick={() => handleShowDetails()}
            _focus={{ outline: "none" }}
          >
            Start React Native course
          </Button>
        </Box>
        <Text fontSize="sm" opacity="0.8">
          7 hours
        </Text>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        mb="1rem"
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        minHeight="50px"
        alignItems="center"
        padding="0px 10px"
      >
        <Box display="flex" alignItems="center" gap="10px">
          <Checkbox
            _checked={{ textDecor: "line-through" }}
            colorScheme="blackAlpha"
            size="lg"
          />
          <Button
            fontSize="sm"
            opacity="0.9"
            fontWeight="400"
            variant="unstyled"
            onClick={() => handleShowDetails()}
            _focus={{ outline: "none" }}
          >
            Start React Native course
          </Button>
        </Box>
        <Text fontSize="sm" opacity="0.8">
          7 hours
        </Text>
      </Box>
    </Box>
  );
}
