import React from "react";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import LatestNotesCard from "./LatestNotesCard";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

export default function LatestNotes({ data }: any) {
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

      {data?.entries?.length === 0 && (
        <Center h="140px" bg="#f7f7f7" borderRadius={10}>
          <Link href="/diary" passHref>
            <Button
              leftIcon={<AiOutlinePlus />}
              variant="link"
              _focus={{ outline: "none" }}
              color="#000"
            >
              Create Note
            </Button>
          </Link>
        </Center>
      )}

      {data?.entries?.length > 0 && (
        <>
          {data?.entries?.slice(0, 2).map((item: any) => {
            return (
              <Box key={item._id} mb="1rem">
                <LatestNotesCard data={item} />
              </Box>
            );
          })}
        </>
      )}
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
