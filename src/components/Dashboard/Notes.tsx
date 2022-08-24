import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AllNotes from "./AllNotes";
import AllLikes from "./AllLikes";

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
          Likes
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
            type="All notes"
          />
        </TabPanel>

        <TabPanel p={0}>
          <AllNotes
            notes={publishedEntries}
            entryError={publishedEntriesError}
            notesMeta={publishedEntriesMeta}
            handlePagination={handlePublishedPagination}
            currentPage={publishedCurrentPage}
            type="Published notes"
          />
        </TabPanel>

        <TabPanel p={0}>
          <AllLikes />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
