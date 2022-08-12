import React, { useEffect } from "react";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useUser } from "@utils/hooks/useUser";
import { entriesAPI } from "@utils/api";
import { useRouter } from "next/router";
import { swrKeys } from "@utils/swrKeys";
import useSWR from "swr";

const [LatestNotes, Tasks, Notes] = [
  dynamic<any>(() =>
    import("@components/Dashboard").then((mod) => mod.LatestNotes)
  ),
  dynamic<any>(() => import("@components/Dashboard").then((mod) => mod.Tasks)),
  dynamic<any>(() => import("@components/Dashboard").then((mod) => mod.Notes)),
];

export default function DashboardView() {
  const { data: user, error } = useUser();
  const router = useRouter();
  const { page = 1 } = router.query;

  const { data: entries, error: entryError } = useSWR(
    router.isReady && swrKeys.getUserEntries({ page }),
    async () => entriesAPI.getUserEntries({ page }),
    {
      revalidateOnMount: true,
    }
  );
  useEffect(() => {
    if (router.isReady && !router.query.page) {
      router.replace(
        {
          pathname: "/dashboard",
          query: { page: 1 },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [router]);

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
        notes={entries?.data?.data?.entries}
        entryError={entryError}
        notesMeta={entries?.data?.data.pageInfo}
      />
    </Box>
  );
}
