import {
  Box,
  Heading,
  Text,
  Button,
  Tag,
  useDisclosure,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { FiEdit3 } from "react-icons/fi";
import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";

const [DeleteEntry, PublishEntry] = [
  dynamic<any>(() => import("../Modals").then((mod) => mod.DeleteEntry)),
  dynamic<any>(() => import("../Modals").then((mod) => mod.PublishEntry)),
];

export default function NotesCard({ note }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenPublish,
    onOpen: onOpenPublish,
    onClose: onClosePublish,
  } = useDisclosure();
  const [currentNote, setCurrentNote] = useState();

  const openDeleteModal = () => {
    setCurrentNote(note);
    onOpen();
  };

  const openPublishModal = () => {
    setCurrentNote(note);
    onOpenPublish();
  };

  return (
    <Box
      bg="white"
      color="#000000"
      border="1px solid #d7d7d7"
      p="1rem"
      mb="1.5rem"
      mr={{ base: "0rem", lg: "1.5rem" }}
      borderRadius={10}
      h="fit-content"
      position="relative"
    >
      <PublishEntry
        isOpen={isOpenPublish}
        onClose={onClosePublish}
        note={currentNote}
      />
      <DeleteEntry isOpen={isOpen} onClose={onClose} note={currentNote} />
      {note?.edited && (
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
        {note?.title}
      </Heading>

      <Text fontSize="sm" opacity="0.8">
        {note?.description}
      </Text>

      <Box mt="1rem" display="flex" flexWrap="wrap" gap="10px">
        {note?.tags.map(({ name, _id }: { name: string; _id: string }) => (
          <Tag
            key={_id}
            fontSize="xs"
            opacity="0.7"
            borderRadius="20px"
            w="fit-content"
          >
            {name}
          </Tag>
        ))}
      </Box>

      <Text my="1rem" textAlign="right" fontSize="xs" opacity="0.8">
        {format(new Date(note.createdAt), "P")}
      </Text>

      <Box>
        <Link href={`/diary?id=${note?._id}`} passHref>
          <Button
            fontSize="xs"
            variant="link"
            _focus={{ outline: "1px solid gray" }}
            color="#000"
          >
            Edit
          </Button>
        </Link>

        <Button
          fontSize="xs"
          variant="link"
          mx="10px"
          color="#000000"
          _focus={{ outline: "1px solid gray" }}
          onClick={openPublishModal}
        >
          {note?.published ? "unpublish" : "publish"}
        </Button>
        <Button
          fontSize="xs"
          variant="link"
          color="text.danger"
          _focus={{ outline: "1px solid gray" }}
          onClick={openDeleteModal}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
