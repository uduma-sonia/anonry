import React from "react";
import { Box, Avatar, Text, Tag, Heading, IconButton } from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { VscBookmark } from "react-icons/vsc";
import format from "date-fns/format";

export default function PostCard({ post }: any) {
  return (
    <Box
      bg="white"
      border="1px solid #d7d7d7"
      borderRadius="10px"
      p="20px"
      mb="20px"
      boxShadow="sm"
    >
      <Box display="flex" alignItems="center">
        <Avatar src={post?.user?.avatar} name="Khallekan" size="md" />

        <Box display="flex" alignItems="center" ml="15px">
          <Text color="#000" fontWeight="medium">
            {post?.user?.user_name}
          </Text>
          <Text mx="10px">-</Text>
          <Text fontSize="xs" color="#00000090">
            {format(new Date(post.createdAt), "P")}
          </Text>
        </Box>
      </Box>

      <Box mt="1rem" display="flex" flexWrap="wrap" gap="10px">
        {post?.tags.map(({ name }: { name: string }) => (
          <Tag
            key={name}
            fontSize="xs"
            opacity="0.7"
            borderRadius="20px"
            w="fit-content"
            fontWeight="400"
          >
            {name}
          </Tag>
        ))}
      </Box>

      <Heading fontSize="md" fontWeight="medium" mt="0.5rem">
        {post.title}
      </Heading>

      <Text fontSize="sm" mt="0.7rem" opacity="0.7">
        {post?.description}
      </Text>

      <Box
        mt="1rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="sm" color="#000000" fontWeight="medium">
          {post?.no_of_likes} {post?.no_of_likes === 1 ? "like" : "likes"}
        </Text>

        <Box>
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
    </Box>
  );
}
