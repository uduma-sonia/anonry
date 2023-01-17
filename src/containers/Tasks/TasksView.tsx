import React, { useState, useCallback } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const [SearchBar, TaskList, TaskDetails] = [
  dynamic(() => import("@components/Tasks/SearchBar")),
  dynamic(() => import("@components/Tasks/TaskList")),
  dynamic(() => import("@components/Tasks/TaskDetails")),
];

export default function TasksView() {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = useCallback(() => {
    setShowDetails(true);
  }, []);

  return (
    <Box display="flex">
      <Box width="60%" padding="0px 10px">
        <SearchBar />

        <Box
          marginTop="2rem"
          maxHeight="calc(100vh - 200px)"
          className="tiny-scrollbar"
          overflowY="auto"
        >
          <TaskList handleShowDetails={handleShowDetails} />
        </Box>
      </Box>

      <Box
        borderLeft="1px solid"
        borderLeftColor="gray.200"
        maxHeight="calc(100vh - 130px)"
        width="40%"
        padding="0px 10px"
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
