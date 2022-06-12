import React from "react";
import { Box, Text, Progress, Tag, HStack } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";

function ProjectAction() {
  return (
    <Box
      outline="1px solid #E2E2EA"
      borderRadius="2xl"
      bg="white"
      position="relative"
    >
      <Box
        borderRadius="2xl"
        height={{ base: "unset", sm: "200px" }}
        __css={{ aspectRatio: { base: "16/9", sm: "unset" } }}
        outline="1px solid #E2E2EA"
        bgColor="#e2e2ea"
        bgImage="/images/img_4.jpg"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      />

      <Box px="2.4rem" py="1.8rem">
        <HStack justifyContent="space-between">
          <Text color="text.gray" fontWeight="semibold" fontSize="xl">
            Project Agerbee
          </Text>

          <Tag
            color="#FC5A5A"
            size="sm"
            fontSize="12px"
            p="8px"
            bgColor="#FC5A5A40"
            borderRadius="md"
          >
            <Box as="span" mr="4px">
              <BsClock />
            </Box>
            2 days left
          </Tag>
        </HStack>

        <Text as="span" fontSize="xs">
          Created by{" "}
          <Text as="span" color="brand.400">
            Cyberdyne Systems{" "}
          </Text>
          on June 31, 2021
        </Text>

        <Box mt="1.2rem" w="100%">
          <Text
            textAlign="right"
            color="#696974"
            fontWeight="normal"
            fontSize="14px"
            mb="5px"
          >
            75% funded
          </Text>
          <Progress
            value={75}
            size="sm"
            colorScheme="green"
            borderRadius="20px"
          />
        </Box>

        <Text mt="1.3rem" color="brand.400" fontSize="2xl" fontWeight="medium">
          $950,000.00{" "}
          <Text
            textAlign="right"
            color="#696974"
            fontWeight="normal"
            fontSize="sm"
            as="span"
          >
            Pledged
          </Text>
        </Text>
      </Box>
    </Box>
  );
}

export default ProjectAction;
