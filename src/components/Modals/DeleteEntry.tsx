import { useCallback, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Box,
} from "@chakra-ui/react";
import { entriesAPI } from "@utils/api";
import { useSWRConfig } from "swr";
import { swrKeys } from "@utils/swrKeys";
import { successToast, errorToast } from "@lib/toast";

export default function DeleteEntryModal({ isOpen, onClose, note }: any) {
  const cancelRef: any = useRef();
  const { mutate } = useSWRConfig();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDelete = useCallback(async () => {
    try {
      setIsSubmitting(true);
      const result = await entriesAPI.deleteUserEntries(note?._id);
      if (result) {
        mutate(swrKeys.getUserEntries({ page: 1 }));
        mutate(swrKeys.getUserProfile);
        successToast({ message: result?.data?.message });
      }
    } catch (err: any) {
      errorToast({ message: err ?? "An error occured, Try again" });
    } finally {
      setIsSubmitting(false);
    }
  }, [mutate, note]);

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
