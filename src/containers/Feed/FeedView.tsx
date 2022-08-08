import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const [Feed, SortingForm] = [
  dynamic(() => import("@components/Feed/Feed")),
  dynamic(() => import("@components/Feed/SortingForm")),
];

export default function FeedView() {
  return (
    <Box display="flex" gap="30px" position="relative">
      <Box w="60%" position="relative">
        <Feed />
      </Box>
      <Box w="40%">
        <SortingForm />
      </Box>
    </Box>
  );
}
