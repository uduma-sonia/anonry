import React from "react";
import {
  Box,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const [ProfileCard, AvatarView, Security, DeleteAccount] = [
  dynamic(() => import("@components/Settings/ProfileCard")),
  dynamic(() => import("@components/Settings/Avatar")),
  dynamic(() => import("@components/Settings/Security")),
  dynamic(() => import("@components/Settings/DeleteAccount")),
];

export default function SettingsView() {
  return (
    <Box pb="100px">
      <Stack
        gap="20px"
        spacing={0}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "30%" }}>
          <ProfileCard />
        </Box>

        <Box w={{ base: "100%", lg: "70%" }}>
          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab
                _focus={{ outline: "none" }}
                _selected={{ color: "none", bg: "white", fontWeight: "medium" }}
                borderTopRadius={20}
              >
                Avatar
              </Tab>

              <Tab
                _focus={{ outline: "none" }}
                _selected={{ color: "none", bg: "white", fontWeight: "medium" }}
                borderTopRadius={20}
              >
                Security
              </Tab>
            </TabList>

            <TabPanels
              border="1px solid #d7d7d7"
              borderTop="none"
              borderBottomRadius={10}
              bg="white"
              color="#000"
              mt="0px"
            >
              <TabPanel>
                <AvatarView />
              </TabPanel>
              <TabPanel>
                <Security />
              </TabPanel>
            </TabPanels>
          </Tabs>

          <DeleteAccount />
        </Box>
      </Stack>
    </Box>
  );
}
