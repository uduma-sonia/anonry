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

export default function PublishEntry({ isOpen, onClose, note }: any) {
  const cancelRef: any = useRef();
  const { mutate } = useSWRConfig();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePublish = useCallback(async () => {
    try {
      setIsSubmitting(true);

      const data = {
        action: "publish",
      };

      const result = await entriesAPI.publishEntry(data, note?._id);
      if (result) {
        mutate(swrKeys.getUserEntries);
        onClose();
        successToast({ message: result?.data?.message });
      }
    } catch (err: any) {
      errorToast({ message: err ?? "An error occured, Try again" });
    } finally {
      setIsSubmitting(false);
    }
  }, [mutate, note?._id, onClose]);

  const handleUnpublish = useCallback(async () => {
    try {
      setIsSubmitting(true);

      const data = {
        action: "unpublish",
      };

      const result = await entriesAPI.unPublishEntry(data, note?._id);
      if (result) {
        mutate(swrKeys.getUserEntries({ page: 1 }));

        onClose();
        successToast({ message: result?.data?.message });
      }
    } catch (err: any) {
      errorToast({ message: err ?? "An error occured, Try again" });
    } finally {
      setIsSubmitting(false);
    }
  }, [mutate, note?._id, onClose]);

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
              {note?.published ? "Unpublish" : "Publish"}
              Note
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
              {note?.published ? (
                <Button
                  variant="primary"
                  isLoading={isSubmitting}
                  onClick={handleUnpublish}
                >
                  Unpublish
                </Button>
              ) : (
                <Button
                  variant="primary"
                  isLoading={isSubmitting}
                  onClick={handlePublish}
                >
                  Publish
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
