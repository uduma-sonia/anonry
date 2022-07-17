import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import NotesCard from "./NotesCard";

export default function Notes() {
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
          Notes
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
          Likes
        </Tab>
      </TabList>

      <TabPanels mt="2rem">
        <TabPanel p={0}>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              lg: "repeat(2, 1fr)",
              "2xl": "repeat(3, 1fr)",
            }}
          >
            <NotesCard />
            <NotesCard />
            <NotesCard />
            <NotesCard />
          </Box>
        </TabPanel>

        <TabPanel>
          <p>two!</p>
        </TabPanel>

        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
