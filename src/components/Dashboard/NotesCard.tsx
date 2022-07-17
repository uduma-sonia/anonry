import { Box, Heading, Text, Button, Tag } from "@chakra-ui/react";
import { format } from "date-fns";
import { FiEdit3 } from "react-icons/fi";

export default function NotesCard() {
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
        A meatier lorem ipsum
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
      </Heading>

      <Text fontSize="sm" opacity="0.8">
        Spicy jalapeno bacon ipsum dolor amet kevin tenderloin ball tip
        drumstick, t-bone strip steak biltong meatloaf pastrami
      </Text>

      <Text my="1rem" textAlign="right" fontSize="xs" opacity="0.8">
        {format(new Date("2022-08-02T03:36:49.452785+01:00"), "PP")}
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
