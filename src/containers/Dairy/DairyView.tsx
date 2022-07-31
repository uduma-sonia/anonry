import React from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Textarea,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function DairyView() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: "1fr",
        lg: "1fr 2.5fr",
      }}
      position="relative"
    >
      <Box
        px="1rem"
        borderRight="1px solid gray"
        display={{ base: "none", lg: "block" }}
        maxH="calc(100vh - 120px - 4rem)"
        overflowY="auto"
        className="tiny-scrollbar"
      >
        <Box mb="2rem" borderBottom="1px solid #d7d7d7" pb="10px">
          <Text fontWeight="medium" mb="0.6rem">
            A meatier lorem ipsum
          </Text>

          <Text fontSize="13px">
            Spicy jalapeno bacon ipsum dolor amet kevin tenderloin
          </Text>
        </Box>
      </Box>

      <Box px={{ lg: "1rem" }}>
        <Box display="flex">
          <Input
            placeholder="title"
            border="none"
            bg="white"
            _focus={{ outline: "none" }}
          />

          <Button variant="primary" ml="2rem">
            Save
          </Button>
        </Box>

        <Textarea
          mt="1rem"
          rows={14}
          border="none"
          placeholder="Start typing..."
          bg="white"
          resize="none"
          className="tiny-scrollbar"
          _focus={{ outline: "none" }}
        />
      </Box>

      <IconButton
        display={{ base: "flex", lg: "none" }}
        position="fixed"
        left="20px"
        bottom="20px"
        aria-label=""
        icon={<FaChevronUp />}
        bg="black"
        color="white"
        _hover={{ bg: "black" }}
        _active={{ bg: "black" }}
        _focus={{ outline: "none" }}
        onClick={onOpen}
        size="sm"
      />

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent h="60vh">
          <IconButton
            position="absolute"
            right="20px"
            bottom="20px"
            aria-label=""
            icon={<FaChevronDown />}
            bg="black"
            color="white"
            _hover={{ bg: "black" }}
            _active={{ bg: "black" }}
            _focus={{ outline: "none" }}
            onClick={onClose}
            size="sm"
          />

          <DrawerBody pt="2rem">
            <Box mb="2rem" borderBottom="1px solid #d7d7d7" pb="10px">
              <Text fontWeight="medium" mb="0.6rem">
                A meatier lorem ipsum
              </Text>

              <Text fontSize="13px">
                Spicy jalapeno bacon ipsum dolor amet kevin tenderloin
              </Text>
            </Box>
            <Box mb="2rem" borderBottom="1px solid #d7d7d7" pb="10px">
              <Text fontWeight="medium" mb="0.6rem">
                A meatier lorem ipsum
              </Text>

              <Text fontSize="13px">
                Spicy jalapeno bacon ipsum dolor amet kevin tenderloin
              </Text>
            </Box>
            <Box mb="2rem" borderBottom="1px solid #d7d7d7" pb="10px">
              <Text fontWeight="medium" mb="0.6rem">
                A meatier lorem ipsum
              </Text>

              <Text fontSize="13px">
                Spicy jalapeno bacon ipsum dolor amet kevin tenderloin
              </Text>
            </Box>
            <Box mb="2rem" borderBottom="1px solid #d7d7d7" pb="10px">
              <Text fontWeight="medium" mb="0.6rem">
                A meatier lorem ipsum
              </Text>

              <Text fontSize="13px">
                Spicy jalapeno bacon ipsum dolor amet kevin tenderloin
              </Text>
            </Box>
            <Box mb="2rem" borderBottom="1px solid #d7d7d7" pb="10px">
              <Text fontWeight="medium" mb="0.6rem">
                A meatier lorem ipsum
              </Text>

              <Text fontSize="13px">
                Spicy jalapeno bacon ipsum dolor amet kevin tenderloin
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
