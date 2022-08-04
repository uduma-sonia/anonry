/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
  Box,
} from "@chakra-ui/react";
import { entriesAPI } from "@utils/api";
import { useSWRConfig } from "swr";
import { swrKeys } from "@utils/swrKeys";

export default function DeleteEntryModal({ isOpen, onClose, note }: any) {
  const cancelRef: any = useRef();
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const entriesCacheKey = swrKeys.getUserEntries;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDelete = useCallback(async () => {
    try {
      setIsSubmitting(true);

      const data = {
        entry_id: note?._id,
      };

      const result = await entriesAPI.deleteUserEntries(data);

      if (result) {
        mutate(entriesCacheKey);
        toast({
          position: "top-right",
          duration: 9000,
          isClosable: true,
          render: () => (
            <Box
              color="white"
              p={3}
              bg="black"
              borderRadius={10}
              textAlign="center"
              fontSize="xs"
            >
              {result?.data?.message}
            </Box>
          ),
        });
      }
    } catch (err: any) {
      console.log(err);
      toast({
        position: "top-right",
        duration: 9000,
        isClosable: true,
        render: () => (
          <Box
            color="white"
            p={3}
            bg="#fa4e37"
            borderRadius={10}
            textAlign="center"
            fontSize="xs"
          >
            {err ?? "Error, try again"}
          </Box>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="xs"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="md" fontWeight="medium">
              Delete Note
            </AlertDialogHeader>

            <AlertDialogBody textAlign="center">Are you sure?</AlertDialogBody>

            <AlertDialogFooter justifyContent="center" gap="20px">
              <Button
                variant="primary"
                ref={cancelRef}
                onClick={onClose}
                bg="none"
                color="black"
                _focus={{ outline: "none" }}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                isLoading={isSubmitting}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
