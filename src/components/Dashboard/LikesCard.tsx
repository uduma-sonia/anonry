import React, { useCallback, useState } from "react";
import { Box, Heading, Text, Tag, IconButton } from "@chakra-ui/react";
import { format } from "date-fns";
import { FiEdit3 } from "react-icons/fi";
import { BsSuitHeartFill } from "react-icons/bs";
import { useSWRConfig } from "swr";
import { swrKeys } from "@utils/swrKeys";
import { timelineAPI } from "@utils/api";
import { errorToast } from "@lib/toast";

export default function LikesCard({ note, pageNum }: any) {
  const { mutate } = useSWRConfig();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLike = useCallback(
    async (action: string) => {
      try {
        setIsSubmitting(true);
        const data = {
          entry_id: note?.entry._id,
          action: action,
        };
        const result = await timelineAPI.handleLike(data);
        if (result) {
          mutate(swrKeys.getLikes({ page: pageNum }));
        }
      } catch (err: any) {
        errorToast({ message: err ?? "An error occured, Try again" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [mutate, note?.entry._id, pageNum]
  );

  return (
    <Box
      bg="white"
      color="#000000"
      border="1px solid #d7d7d7"
      p="1rem"
      borderRadius={10}
      h="fit-content"
      position="relative"
      mb="1.5rem"
    >
      {note?.entry.edited && (
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
      <Heading fontSize="md" fontWeight="medium" mb="0.6rem">
        {note?.entry.title}
      </Heading>

      <Text fontSize="sm" opacity="0.8">
        {note?.entry.description}
      </Text>

      <Box mt="1rem" display="flex" flexWrap="wrap" gap="10px">
        {note?.entry.tags.map(
          ({ name, _id }: { name: string; _id: string }) => (
            <Tag
              key={_id}
              fontSize="xs"
              opacity="0.7"
              borderRadius="20px"
              w="fit-content"
            >
              {name}
            </Tag>
          )
        )}
      </Box>

      <Text my="1rem" textAlign="right" fontSize="xs" opacity="0.8">
        {format(new Date(note.createdAt), "P")}
      </Text>

      <Box>
        <IconButton
          aria-label=""
          icon={<BsSuitHeartFill size="1.3rem" />}
          _focus={{ outline: "none" }}
          bg="none"
          _hover={{ bg: "none" }}
          transition="all 0.7s"
          _active={{ bg: "none", transform: "scale(1.3)" }}
          isLoading={isSubmitting}
          onClick={() => handleLike("unlike")}
        />
      </Box>
    </Box>
  );
}
