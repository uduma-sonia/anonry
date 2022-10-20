import { useCallback, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Text,
} from "@chakra-ui/react";
import { entriesAPI } from "@utils/api";
import { useSWRConfig } from "swr";
import { swrKeys } from "@utils/swrKeys";
import { successToast, errorToast } from "@lib/toast";

export default function DeleteAccountModal({ isOpen, onClose }: any) {
  const cancelRef: any = useRef();
  const { mutate } = useSWRConfig();
  const [isSubmitting, setIsSubmitting] = useState(false);

  //   const handleDelete = useCallback(async () => {
  //     try {
  //       setIsSubmitting(true);
  //       const result = await entriesAPI.deleteUserEntries(note?._id);
  //       if (result) {
  //         mutate(swrKeys.getUserEntries({ page: 1 }));
  //         mutate(swrKeys.getUserProfile);
  //         successToast({ message: result?.data?.message });
  //       }
  //     } catch (err: any) {
  //       errorToast({ message: err ?? "An error occured, Try again" });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }, [mutate, note]);

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
              Delete Account
            </AlertDialogHeader>

            <AlertDialogBody fontWeight={300}>
              <Text mb="10px">Are you sure?</Text>

              <Text>
                This action is not reversible and you cannot open another
                account with the same email
              </Text>
            </AlertDialogBody>

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
                bg="red.400"
                borderColor="red.400"
                // onClick={handleDelete}
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
