import React from "react";
import { Box, Avatar, Text, Tag, Heading, IconButton } from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { VscBookmark } from "react-icons/vsc";

export default function PostCard() {
  return (
    <Box
      bg="white"
      border="1px solid #d7d7d7"
      borderRadius="20px"
      p="20px"
      mb="20px"
    >
      <Box display="flex" alignItems="center">
        <Avatar src="" name="Khallekan" size="md" />

        <Box display="flex" alignItems="center" ml="15px">
          <Text color="#000" fontWeight="medium">
            Goofy
          </Text>
          <Text mx="10px">-</Text>
          <Text fontSize="sm" color="#00000090">
            3:00pm
          </Text>
        </Box>
      </Box>

      <Box mt="1rem" display="flex" flexWrap="wrap" gap="10px">
        <Tag
          fontSize="xs"
          opacity="0.7"
          borderRadius="20px"
          w="fit-content"
          fontWeight="400"
        >
          name
        </Tag>
        <Tag
          fontSize="xs"
          opacity="0.7"
          borderRadius="20px"
          w="fit-content"
          fontWeight="400"
        >
          name
        </Tag>
        <Tag
          fontSize="xs"
          opacity="0.7"
          borderRadius="20px"
          w="fit-content"
          fontWeight="400"
        >
          name
        </Tag>
      </Box>

      <Heading fontSize="md" fontWeight="medium" mt="0.5rem">
        Sit and stare eat fish on floor pushes butt to face
      </Heading>

      <Text fontSize="sm" mt="0.7rem" opacity="0.7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Text>

      <Box mt="1rem" display="flex" justifyContent="flex-end">
        <IconButton
          aria-label=""
          icon={<BsSuitHeart size="1.3rem" />}
          _focus={{ outline: "none" }}
          mr="1rem"
          bg="none"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
        />

        <IconButton
          aria-label=""
          icon={<VscBookmark size="1.3rem" />}
          _focus={{ outline: "none" }}
          bg="none"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
        />
      </Box>
    </Box>
  );
}
