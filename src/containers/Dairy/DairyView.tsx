import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Stack,
  Skeleton,
  Center,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useEntries } from "@utils/hooks/useEntries";
import { useRouter } from "next/router";

const [DairyForm, AllEntries, UpdateForm] = [
  dynamic(() => import("@components/Dairy/DairyForm"), {
    loading: () => (
      <Center h="100vh">
        <Spinner
          thickness="5px"
          speed="0.8s"
          emptyColor="gray.200"
          color="#000000"
          size="xl"
        />
      </Center>
    ),
  }),
  dynamic(() => import("@components/Dairy/AllEntries")),
  dynamic(() => import("@components/Dairy/UpdateForm"), {
    loading: () => (
      <Center h="100vh">
        <Spinner
          thickness="5px"
          speed="0.8s"
          emptyColor="gray.200"
          color="#000000"
          size="xl"
        />
      </Center>
    ),
  }),
];

export default function DairyView() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: entries, error } = useEntries();
  const router = useRouter();
  const { id } = router.query;

  const switchForms = () => {
    if (id) {
      return <UpdateForm />;
    } else {
      return <DairyForm />;
    }
  };

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
        {error && !entries && (
          <Text fontSize="sm" color="#000">
            uh oh, couldn&apos;t retrieve data, try again
          </Text>
        )}
        {entries?.data?.data.length === 0 && (
          <Text fontSize="sm" color="#000">
            Start Creating notes
          </Text>
        )}
        {!error && !entries && (
          <>
            <Stack>
              <Skeleton height="10px" w="80%" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
            </Stack>
            <Stack mt="3rem">
              <Skeleton height="10px" w="80%" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
            </Stack>
          </>
        )}
        {}
        <AllEntries entries={entries?.data?.data} />
      </Box>

      {switchForms()}

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
