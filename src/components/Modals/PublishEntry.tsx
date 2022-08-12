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
import { useRouter } from "next/router";

export default function PublishEntry({ isOpen, onClose, note }: any) {
  const cancelRef: any = useRef();
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const { page = 1 } = router.query;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePublish = useCallback(async () => {
    try {
      setIsSubmitting(true);

      const data = {
        action: "publish",
      };

      const result = await entriesAPI.publishEntry(data, note?._id);
      if (result) {
        mutate(swrKeys.getUserEntries({ page }));
        onClose();
        toast({
          position: "top-right",
          duration: 4000,
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
      toast({
        position: "top-right",
        duration: 4000,
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
  }, [mutate, note?._id, onClose, page, toast]);

  const handleUnpublish = useCallback(async () => {
    try {
      setIsSubmitting(true);

      const data = {
        action: "unpublish",
      };

      const result = await entriesAPI.unPublishEntry(data, note?._id);
      if (result) {
        mutate(swrKeys.getUserEntries({ page }));

        onClose();
        toast({
          position: "top-right",
          duration: 4000,
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
      toast({
        position: "top-right",
        duration: 4000,
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
  }, [mutate, note?._id, onClose, page, toast]);

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
