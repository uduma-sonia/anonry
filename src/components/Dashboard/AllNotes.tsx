import { Box, Text, Center, Spinner } from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import Pagination from "@components/Pagination/Pagination";

export default function AllNotes({
  notes,
  entryError,
  notesMeta,
  handlePagination,
  currentPage,
  type,
}: any) {
  return (
    <Box maxW="600px" mx="auto">
      {notes?.length > 0 && (
        <Text mb="2rem" fontSize="sm" fontWeight="medium">
          {type} ({notes?.length})
        </Text>
      )}

      {notes?.length === 0 && (
        <Text mt="6rem" textAlign="center" fontSize="sm" color="#000">
          No data
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

      {notes?.map((item: any) => (
        <NotesCard key={item._id} note={item} />
      ))}

      {notes && notes.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={notesMeta?.totalPages}
          handlePagination={handlePagination}
        />
      )}
    </Box>
  );
}
