import {
  Text,
  Link as ChakraLink,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import Link from "next/link";

export default function NotAllowed({ isOpen, onClose }: any) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} trapFocus={false}>
      <ModalOverlay />
      <ModalContent borderRadius="xl" py="2rem">
        <ModalBody mb="2rem">
          <Text
            color="text.gray"
            fontWeight="semibold"
            fontSize={{ base: "md", md: "lg" }}
            textAlign="center"
          >
            You can’t do this right now
          </Text>
          <Text
            color="text.secondary"
            fontWeight="normal"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
            mt="1.7rem"
          >
            You need to have a Sync! account to access.
          </Text>
        </ModalBody>

        <ModalFooter justifyContent="center" gap={10}>
          <Link href=" https://teamsync.tools/signup" passHref>
            <ChakraLink _hover={{ textDecor: "none" }}>
              <Button
                color="white"
                fontSize="sm"
                borderRadius="8px"
                fontWeight="semibold"
                bgColor="brand.400"
                _focus={{ outline: "none" }}
                _hover={{ bg: "brand.400" }}
                size="lg"
              >
                Get started
              </Button>
            </ChakraLink>
          </Link>

          <Button
            color="brand.400"
            fontSize="sm"
            borderRadius="8px"
            border="2px solid"
            borderColor="brand.400"
            fontWeight="semibold"
            onClick={onClose}
            _focus={{ outline: "none" }}
            _hover={{ bg: "white" }}
            size="lg"
            bg="white"
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
