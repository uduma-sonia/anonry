import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AllNotes from "./AllNotes";

export default function Notes({
  notes,
  entryError,
  notesMeta,
  publishedEntries,
  publishedEntriesError,
  publishedEntriesMeta,
  handlePagination,
  currentPage,
  handlePublishedPagination,
  publishedCurrentPage,
}: any) {
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
          <AllNotes
            notes={notes}
            entryError={entryError}
            notesMeta={notesMeta}
            handlePagination={handlePagination}
            currentPage={currentPage}
          />
        </TabPanel>

        <TabPanel p={0}>
          <AllNotes
            notes={publishedEntries}
            entryError={publishedEntriesError}
            notesMeta={publishedEntriesMeta}
            handlePagination={handlePublishedPagination}
            currentPage={publishedCurrentPage}
          />
        </TabPanel>

        <TabPanel p={0}>Coming Soon!</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
