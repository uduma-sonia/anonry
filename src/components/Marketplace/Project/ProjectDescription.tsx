import React from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
} from "@chakra-ui/react";
import ProjectDescriptionCard from "./ProjectDescriptionCard";
import DonateForm from "./DonateForm";

function ProjectDescription() {
  return (
    <Box>
      <Tabs>
        <HStack justifyContent="center" my="1.4rem">
          <Box
            borderRadius="106px"
            py="0.4rem"
            px="0.5rem"
            backgroundColor="#EEEEEE"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TabList border="none">
              <Tab
                border="none"
                p="0px"
                borderRadius="106px"
                fontSize="sm"
                width="110px"
                marginRight="5px"
                _selected={{ color: "text.gray", bg: "#ffffff" }}
                _focus={{ outline: "none" }}
              >
                Description
              </Tab>
              <Tab
                border="none"
                p="0px"
                width="110px"
                fontSize="sm"
                borderRadius="106px"
                backgroundColor="transparent"
                color="text.secondary"
                py="20px"
                height="45px"
                _selected={{ color: "text.gray", bg: "#ffffff" }}
                _focus={{ outline: "none" }}
              >
                Donate{" "}
              </Tab>
            </TabList>
          </Box>
        </HStack>

        <TabPanels>
          <TabPanel p="0px">
            <ProjectDescriptionCard />
          </TabPanel>

          <TabPanel p="0px">
            <DonateForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default ProjectDescription;
