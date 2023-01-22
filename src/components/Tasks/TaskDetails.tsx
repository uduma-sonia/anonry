import React from "react";
import { Box, Text, Tag, IconButton } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { AiFillCamera } from "react-icons/ai";

export default function TaskDetails() {
  return (
    <Box pb="50px">
      <Box
        height="100px"
        border="1px solid"
        borderColor="gray.400"
        mb="1.5rem"
        borderRadius="md"
        position="relative"
      >
        <Image
          src="/images/task_bg.jpg"
          style={{ borderRadius: "5px" }}
          alt=""
          layout="fill"
        />

        <IconButton
          icon={<AiFillCamera size="1rem" />}
          aria-label=""
          variant="solid"
          size="xs"
          position="absolute"
          bottom="0.8rem"
          right="0.8rem"
          _focus={{ outline: "none" }}
        />
      </Box>

      <Box display="flex" alignItems="center">
        <Tag
          padding="5px 7px"
          borderRadius="15px"
          backgroundColor="green.200"
          fontSize="xs"
          fontWeight={400}
          marginRight="1.5rem"
        >
          completed
        </Tag>

        <FaCalendarAlt opacity="0.8" />

        <Text fontSize="sm" color="gray.600" ml="10px">
          01/01/2022
        </Text>
      </Box>

      <Text fontWeight="semibold" fontSize="md" mt="1.5rem">
        Start React Native course
      </Text>

      <Text
        color="gray.700"
        fontSize="sm"
        fontWeight="normal"
        marginTop="0.5rem"
        lineHeight="20px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit
      </Text>
    </Box>
  );
}
