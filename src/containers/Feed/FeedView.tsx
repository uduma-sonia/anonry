import React from "react";
import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { timelineAPI } from "@utils/api";
import { useRouter } from "next/router";
import { swrKeys } from "@utils/swrKeys";
import useSWR from "swr";

const [Feed, SortingForm] = [
  dynamic(() => import("@components/Feed/Feed")),
  dynamic(() => import("@components/Feed/SortingForm")),
];

export default function FeedView({ data }: any) {
  const router = useRouter();

  const { data: timeline, error } = useSWR(
    router.isReady && swrKeys.getTimeline,
    async () => timelineAPI.getTimeline(),
    {
      revalidateOnMount: true,
    }
  );

  return (
    <>
      {error && !timeline && (
        <Text fontSize="sm" color="#000">
          uh oh, couldn&apos;t retrieve data, try again
        </Text>
      )}

      {!error && timeline && (
        <Box
          display="flex"
          gap="30px"
          position="relative"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            w={{ base: "100%", lg: "60%" }}
            maxH="calc(100vh - 120px - 2rem)"
            overflowY="auto"
            className="no-scrollbar"
          >
            <Feed data={timeline?.data?.data?.entries} />
          </Box>

          <Box w={{ base: "100%", lg: "40%" }}>
            <SortingForm />
          </Box>
        </Box>
      )}
    </>
  );
}
