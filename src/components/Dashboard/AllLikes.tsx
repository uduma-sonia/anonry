import React, { useState } from "react";
import { Box, Text, Center, Spinner } from "@chakra-ui/react";
import Pagination from "@components/Pagination/Pagination";
import { entriesAPI } from "@utils/api";
import { useRouter } from "next/router";
import { swrKeys } from "@utils/swrKeys";
import useSWR from "swr";
import LikesCard from "./LikesCard";

export default function AllLikes() {
  const router = useRouter();
  const [pageNum, setPageNum] = useState(1);

  const { data: allLikes, error: likesError } = useSWR(
    router.isReady && swrKeys.getLikes({ page: pageNum }),
    async () => entriesAPI.getLikes({ page: pageNum }),
    {
      revalidateOnMount: true,
    }
  );
  const handlePagination = (val: any) => setPageNum(val);

  return (
    <Box maxW="600px" mx="auto">
      {allLikes?.data?.data?.likes.length > 0 && (
        <Text mb="2rem" fontWeight="medium" fontSize="sm">
          All likes ({allLikes?.data?.data?.likes.length})
        </Text>
      )}

      {allLikes?.data?.data?.likes?.length === 0 && (
        <Text mt="6rem" textAlign="center" fontSize="sm" color="#000">
          No data
        </Text>
      )}

      {!likesError && !allLikes?.data?.data?.likes && (
        <Center h="200px">
          <Spinner
            thickness="5px"
            speed="0.8s"
            emptyColor="gray.200"
            color="#000000"
            size="xl"
          />
        </Center>
      )}

      {allLikes?.data?.data?.likes?.map((item: any) => (
        <LikesCard key={item._id} note={item} pageNum={pageNum} />
      ))}

      {allLikes?.data?.data?.likes &&
        allLikes?.data?.data?.likes.length > 0 && (
          <Pagination
            currentPage={pageNum}
            totalPages={allLikes?.data?.data?.pageInfo?.totalPages}
            handlePagination={handlePagination}
          />
        )}
    </Box>
  );
}
