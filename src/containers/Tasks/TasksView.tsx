import React, { useState } from "react";
import { Box, Text, Center, IconButton } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { MdClear } from "react-icons/md";

const [SearchBar, TaskList, TaskDetails] = [
  dynamic(() => import("@components/Tasks/Input")),
  dynamic(() => import("@components/Tasks/TaskList")),
  dynamic(() => import("@components/Tasks/TaskDetails")),
];

export default function TasksView() {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  return (
    <Box display="flex" position="relative">
      <IconButton
        aria-label="close"
        variant="unstyled"
        icon={<MdClear size="1.3rem" />}
        position="absolute"
        right="-20px"
        top="-40px"
        zIndex="5"
        opacity="0.5"
        onClick={handleHideDetails}
        display={showDetails ? "block" : "none"}
      />

      <Box
        width={{ base: showDetails ? "0%" : "100%", lg: "60%" }}
        padding="0px 10px"
        display={{ base: showDetails ? "none" : "block", lg: "block" }}
      >
        <SearchBar />

        <Box
          marginTop="2rem"
          maxHeight="calc(100vh - 200px)"
          className="tiny-scrollbar"
          overflowY="auto"
          position="relative"
          zIndex="2"
        >
          <TaskList handleShowDetails={handleShowDetails} />
        </Box>
      </Box>

      <Box
        borderLeft={{ base: "none", lg: "1px solid #22222250" }}
        maxHeight="calc(100vh - 130px)"
        display={{ base: showDetails ? "block" : "none", lg: "block" }}
        width={{ base: showDetails ? "100%" : "0%", lg: "40%" }}
        padding={{ lg: "0px 10px" }}
        className="tiny-scrollbar"
        overflowY="auto"
      >
        {showDetails ? (
          <TaskDetails />
        ) : (
          <Center height="300px">
            <Text fontSize="sm" color="gray.600">
              Click task title to view details
            </Text>
          </Center>
        )}
      </Box>
    </Box>
  );
}
