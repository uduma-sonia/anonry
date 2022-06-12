import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const [
  ProjectAction,
  ProjectDescription,
  LenderHistory,
  LenderUpdate,
  VotingPower,
  HederaCard,
] = [
  dynamic(() => import("@components/Marketplace/Project/ProjectAction")),
  dynamic(() => import("@components/Marketplace/Project/ProjectDescription")),
  dynamic(() => import("@components/Marketplace/Project/LenderHistory")),
  dynamic(() => import("@components/Marketplace/Project/LenderUpdate")),
  dynamic(() => import("@components/Marketplace/Project/VotingPower")),
  dynamic(() => import("@components/Marketplace/Project/HederaCard")),
];

function ProjectView() {
  return (
    <Box px={{ base: "1rem", lg: "2.5rem" }} pt="50px">
      <Box
        display="flex"
        gap="25px"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "70%" }}>
          <ProjectAction />
          <ProjectDescription />
        </Box>

        <Box w={{ base: "100%", lg: "30%" }}>
          <HederaCard />
          <VotingPower />
        </Box>
      </Box>

      <Box
        display="flex"
        gap="25px"
        mt="25px"
        pb="100px"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <LenderHistory />
        </Box>

        <Box w={{ base: "100%", lg: "50%" }}>
          <LenderUpdate />
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectView;
