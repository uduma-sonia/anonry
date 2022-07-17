import React from "react";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const [LatestNotes, Statistics, Notes] = [
  dynamic(() => import("@components/Dashboard").then((mod) => mod.LatestNotes)),
  dynamic(() => import("@components/Dashboard").then((mod) => mod.Statistics)),
  dynamic(() => import("@components/Dashboard").then((mod) => mod.Notes)),
];

export default function DashboardView() {
  return (
    <Box mb="200px">
      <Heading fontWeight="normal" fontSize="lg">
        Welcome,{" "}
        <Text as="span" fontWeight="medium">
          Name
        </Text>
      </Heading>

      <HStack
        my="2rem"
        flexDirection={{ base: "column", lg: "row" }}
        spacing={0}
        alignItems="flex-start"
      >
        <LatestNotes />

        <Statistics />
      </HStack>

      <Notes />
    </Box>
  );
}
