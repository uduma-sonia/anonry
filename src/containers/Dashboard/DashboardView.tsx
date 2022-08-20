import React, { useState } from "react";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useUser } from "@utils/hooks/useUser";
import { entriesAPI } from "@utils/api";
import { useRouter } from "next/router";
import { swrKeys } from "@utils/swrKeys";
import useSWR from "swr";
import { usePublishedEntries } from "@utils/hooks/usePublishedEntries";

const [LatestNotes, Tasks, Notes] = [
  dynamic<any>(() =>
    import("@components/Dashboard").then((mod) => mod.LatestNotes)
  ),
  dynamic<any>(() => import("@components/Dashboard").then((mod) => mod.Tasks)),
  dynamic<any>(() => import("@components/Dashboard").then((mod) => mod.Notes)),
];

export default function DashboardView() {
  const router = useRouter();
  const [pageNum, setPageNum] = useState(1);
  const [publishedPageNum, setPublishedPageNum] = useState(1);

  const { data: user, error } = useUser();
  const { data: publishedEntries, error: publishedEntriesError } =
    usePublishedEntries({ publishedPageNum });

  const { data: entries, error: entryError } = useSWR(
    router.isReady && swrKeys.getUserEntries({ page: pageNum }),
    async () => entriesAPI.getUserEntries({ page: pageNum }),
    {
      revalidateOnMount: true,
    }
  );

  const handlePagination = (val: any) => setPageNum(val);
  const handlePublishedPagination = (val: any) => setPublishedPageNum(val);

  return (
    <Box mb="200px">
      <Heading fontWeight="normal" fontSize="lg">
        Welcome,{" "}
        <Text as="span" fontWeight="medium">
          {user?.data?.data?.user_name}
        </Text>
      </Heading>

      <HStack
        my="2rem"
        flexDirection={{ base: "column", lg: "row" }}
        spacing={0}
        alignItems="stretch"
      >
        <LatestNotes data={user?.data?.data} error={error} />

        <Tasks data={user?.data?.data} />
      </HStack>

      <Notes
        handlePagination={handlePagination}
        handlePublishedPagination={handlePublishedPagination}
        notes={entries?.data?.data?.entries}
        entryError={entryError}
        notesMeta={entries?.data?.data.pageInfo}
        publishedEntries={publishedEntries?.data?.data?.entries}
        publishedEntriesError={publishedEntriesError}
        publishedEntriesMeta={publishedEntries?.data?.data?.pageInfo}
        currentPage={pageNum}
        publishedCurrentPage={publishedPageNum}
      />
    </Box>
  );
}
