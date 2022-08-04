import { Box, Heading, Text, Button, Tag } from "@chakra-ui/react";
import { format } from "date-fns";
import { FiEdit3 } from "react-icons/fi";

export default function NotesCard({ note }: any) {
  return (
    <Box
      bg="white"
      color="#000000"
      border="1px solid #d7d7d7"
      p="1rem"
      mb="1.5rem"
      mr={{ base: "0rem", lg: "1.5rem" }}
      borderRadius={10}
    >
      <Heading fontSize="md" fontWeight="medium" mb="0.6rem">
        {note?.title}

        {note?.edited && (
          <Tag
            ml="1rem"
            fontSize="9px"
            opacity="0.7"
            bg="transparent"
            border="none"
          >
            <FiEdit3 />
            Edited
          </Tag>
        )}
      </Heading>

      <Text fontSize="sm" opacity="0.8">
        {note?.description}
      </Text>

      <Text my="1rem" textAlign="right" fontSize="xs" opacity="0.8">
        {format(new Date(note.createdAt), "P")}
      </Text>

      <Box>
        <Button
          fontSize="xs"
          variant="link"
          _focus={{ outline: "1px solid gray" }}
          color="#000"
        >
          Edit
        </Button>
        <Button
          fontSize="xs"
          variant="link"
          mx="10px"
          color="#000000"
          _focus={{ outline: "1px solid gray" }}
        >
          Publish
        </Button>
        <Button
          fontSize="xs"
          variant="link"
          color="text.danger"
          _focus={{ outline: "1px solid gray" }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
