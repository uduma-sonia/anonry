import React from "react";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useUser } from "@utils/hooks/useUser";

const [LatestNotes, Statistics, Notes] = [
  dynamic<any>(() =>
    import("@components/Dashboard").then((mod) => mod.LatestNotes)
  ),
  dynamic<any>(() =>
    import("@components/Dashboard").then((mod) => mod.Statistics)
  ),
  dynamic<any>(() => import("@components/Dashboard").then((mod) => mod.Notes)),
];

export default function DashboardView() {
  const { data: user } = useUser();

  return (
    <Box mb="200px">
      <Heading fontWeight="normal" fontSize="lg">
        Welcome,{" "}
        <Text as="span" fontWeight="medium" textTransform="capitalize">
          {user?.data?.data?.user_name}
        </Text>
      </Heading>

      <HStack
        my="2rem"
        flexDirection={{ base: "column", lg: "row" }}
        spacing={0}
      >
        <LatestNotes />

        <Statistics data={user?.data?.data} />
      </HStack>

      <Notes />
    </Box>
  );
}
