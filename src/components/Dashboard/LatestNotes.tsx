import React from "react";
import { Box, Text } from "@chakra-ui/react";
import LatestNotesCard from "./LatestNotesCard";

export default function LatestNotes() {
  return (
    <Box
      border="1px solid #d7d7d7"
      mr={{ lg: "2rem" }}
      borderRadius={10}
      p="1rem"
      bg="white"
      color="#000"
      w={{ base: "100%", lg: "60%" }}
      mb={{ base: "2rem", lg: "0rem" }}
    >
      <Text fontWeight="medium" fontSize="xl" mb="1rem">
        Latest Notes
      </Text>

      {dummyData.map((item) => {
        return (
          <Box key={item.id} mb="1rem">
            <LatestNotesCard data={item} />
          </Box>
        );
      })}
    </Box>
  );
}

const dummyData = [
  {
    id: "1",
    title: "A meatier lorem ipsum",
    text: "Spicy jalapeno bacon ipsum dolor amet kevin tenderloin ball tip drumstick, t-bone strip steak biltong meatloaf pastrami",
  },
  {
    id: "2",
    title: "A meatier lorem ipsum",
    text: "Spicy jalapeno bacon ipsum dolor amet kevin tenderloin ball tip drumstick, t-bone strip steak biltong meatloaf pastrami",
  },
];
