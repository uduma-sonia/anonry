import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Center,
  Spinner,
} from "@chakra-ui/react";
import NotesCard from "./NotesCard";

export default function Notes({ notes, entryError }: any) {
  return (
    <Tabs>
      <TabList border="none" justifyContent="center">
        <Tab
          _selected={{ color: "#ffffff", bg: "#000000" }}
          _focus={{ outline: "none" }}
          _active={{ bg: "#000" }}
          border="1px solid gray"
          borderRadius={4}
          fontSize="sm"
          type="button"
        >
          All Notes
        </Tab>

        <Tab
          _selected={{ color: "#ffffff", bg: "#000000" }}
          _focus={{ outline: "none" }}
          _active={{ bg: "#000" }}
          border="1px solid gray"
          borderRadius={4}
          fontSize="sm"
          mx="1rem"
          type="button"
        >
          Published
        </Tab>

        <Tab
          _selected={{ color: "#ffffff", bg: "#000000" }}
          _focus={{ outline: "none" }}
          _active={{ bg: "#000" }}
          border="1px solid gray"
          borderRadius={4}
          fontSize="sm"
          type="button"
        >
          Bookmarks
        </Tab>
      </TabList>

      <TabPanels mt="2rem">
        <TabPanel p={0}>
          {notes?.length > 0 && (
            <Text mb="2rem" fontWeight="medium">
              {notes?.length} {notes?.length < 2 ? "note" : "notes"}
            </Text>
          )}

          {notes?.length === 0 && (
            <Text mt="6rem" textAlign="center" fontSize="sm" color="#000">
              You are yet to create notes
            </Text>
          )}

          {!entryError && !notes && (
            <Center h="200px">
              <Spinner
                thickness="5px"
                speed="0.8s"
                emptyColor="gray.200"
                color="#000000"
                size="xl"
              />
            </Center>
          )}

          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              lg: "repeat(2, 1fr)",
              "2xl": "repeat(3, 1fr)",
            }}
          >
            {notes?.map((item: any) => (
              <NotesCard key={item._id} note={item} />
            ))}
          </Box>
        </TabPanel>

        <TabPanel>Coming Soon!</TabPanel>

        <TabPanel>Coming Soon!</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
