import { Box, Text, Center, Spinner } from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import Pagination from "@components/Pagination/Pagination";

export default function AllNotes({
  notes,
  entryError,
  notesMeta,
  handlePagination,
  currentPage,
}: any) {
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
        gap="1.5rem"
      >
        {notes?.map((item: any) => (
          <NotesCard key={item._id} note={item} />
        ))}
      </Box>

      {notes && notes.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={notesMeta?.totalPages}
          handlePagination={handlePagination}
        />
      )}
    </>
  );
}
