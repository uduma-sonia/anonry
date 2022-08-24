import React, { useCallback, useState } from "react";
import { Box, Avatar, Text, Tag, Heading, IconButton } from "@chakra-ui/react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import format from "date-fns/format";
import { timelineAPI } from "@utils/api";
import { useSWRConfig } from "swr";
import { swrKeys } from "@utils/swrKeys";
import { FiEdit3 } from "react-icons/fi";

export default function PostCard({ post }: any) {
  const { mutate } = useSWRConfig();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLike = useCallback(
    async (action: string) => {
      try {
        setIsSubmitting(true);
        const data = {
          entry_id: post?._id,
          action: action,
        };
        const result = await timelineAPI.handleLike(data);
        if (result) {
          mutate(swrKeys.getTimeline);
        }
      } catch (err: any) {
        console.log(err);
      } finally {
        setIsSubmitting(false);
      }
    },
    [mutate, post?._id]
  );

  return (
    <Box
      bg="white"
      border="1px solid #d7d7d7"
      borderRadius="10px"
      p="20px"
      mb="20px"
      position="relative"
      boxShadow="sm"
    >
      {post?.edited && (
        <Tag
          ml="1rem"
          fontSize="9px"
          opacity="0.7"
          bg="transparent"
          border="none"
          position="absolute"
          top="5px"
          right="10px"
        >
          <FiEdit3 />
          Edited
        </Tag>
      )}
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
        {post?.tags?.map(({ name }: { name: string }) => (
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
          {post.isLiked ? (
            <IconButton
              aria-label=""
              icon={<BsSuitHeartFill size="1.3rem" />}
              _focus={{ outline: "none" }}
              mr="1rem"
              bg="none"
              _hover={{ bg: "none" }}
              transition="all 0.7s"
              _active={{ bg: "none", transform: "scale(1.3)" }}
              isLoading={isSubmitting}
              onClick={() => handleLike("unlike")}
            />
          ) : (
            <IconButton
              aria-label=""
              icon={<BsSuitHeart size="1.3rem" />}
              _focus={{ outline: "none" }}
              mr="1rem"
              bg="none"
              _hover={{ bg: "none" }}
              transition="all 0.7s"
              _active={{ bg: "none", transform: "scale(1.3)" }}
              onClick={() => handleLike("like")}
              isLoading={isSubmitting}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
