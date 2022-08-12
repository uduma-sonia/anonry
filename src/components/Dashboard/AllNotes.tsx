import { Box, Text, Center, Spinner, IconButton, Tag } from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

export default function AllNotes({ notes, entryError, notesMeta }: any) {
  const router = useRouter();
  const { page } = router.query;

  const handlePagination = (val: number) => {
    router.push(
      {
        pathname: "/dashboard",
        query: { page: val },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <>
      {notes?.length > 0 && (
        <Text mb="2rem" fontWeight="medium">
          {notes?.length} {notes?.length < 2 ? "note" : "notes"}
        </Text>
      )}

      {notes?.length === 0 && (
        <Text mt="6rem" textAlign="center" fontSize="sm" color="#000">
          You are yet to create notes
        </Text>
      )}

      {!entryError && !notes && (
        <Center h="200px">
          <Spinner
            thickness="5px"
            speed="0.8s"
            emptyColor="gray.200"
            color="#000000"
            size="xl"
          />
        </Center>
      )}

      <Box
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
      >
        {notes?.map((item: any) => (
          <NotesCard key={item._id} note={item} />
        ))}
      </Box>

      <Box display="flex" justifyContent="center" gap="1px" mt="2rem">
        <IconButton
          aria-label=""
          icon={<FaChevronLeft />}
          _focus={{ outline: "none" }}
          _hover={{ bg: "none", color: "black", border: "1px solid gray" }}
          bg="black"
          size="sm"
          boxSize="35px"
          color="white"
          borderRadius={0}
          transition="all 0.5s"
          onClick={() => handlePagination(Number(page) - 1)}
          disabled={Number(page) === 1}
        />

        <Tag
          bg="black"
          borderRadius={0}
          color="white"
          boxSize="35px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {page}
        </Tag>

        <IconButton
          aria-label=""
          icon={<FaChevronRight />}
          boxSize="35px"
          _focus={{ outline: "none" }}
          _hover={{ bg: "none", color: "black", border: "1px solid gray" }}
          bg="black"
          size="sm"
          color="white"
          borderRadius={0}
          transition="all 0.5s"
          onClick={() => handlePagination(Number(page) + 1)}
          disabled={notesMeta?.totalPages === Number(page)}
        />
      </Box>
    </>
  );
}
