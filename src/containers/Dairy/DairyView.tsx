import React from "react";
import {
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import dynamic from "next/dynamic";
import { swrKeys } from "@utils/swrKeys";
import useSWR, { SWRConfiguration } from "swr";
import { entriesAPI } from "@utils/api";
import { useRouter } from "next/router";

const [DairyForm, AllEntries] = [
  dynamic(() => import("@components/Dairy/DairyForm")),
  dynamic(() => import("@components/Dairy/AllEntries")),
];

export default function DairyView() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const { data: entries } = useSWR(
    router.isReady && swrKeys.getUserEntries,
    async () => entriesAPI.getUserEntries(),
    {
      revalidateOnMount: true,
    }
  );

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
        <AllEntries entries={entries?.data?.data} />
      </Box>
      <DairyForm />

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
            <AllEntries entries={entries?.data?.data} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
