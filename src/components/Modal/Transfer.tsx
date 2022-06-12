import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  Box,
} from "@chakra-ui/react";

export default function Transfer({ isOpen, onClose }: any) {
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
            Transfer
          </Text>

          <Box mt="2rem">
            <Input
              fontSize="sm"
              borderRadius="8px"
              border="1px solid"
              borderColor="brand.400"
              h="50px"
            />
          </Box>
        </ModalBody>

        <ModalFooter justifyContent="center" gap={10}>
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
            Proceed
          </Button>

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
            bg="white"
            size="lg"
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
