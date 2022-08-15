import React from "react";
import {
  Box,
  Link as ChakraLink,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";

const [PostCard] = [
  dynamic(() => import("./PostCard"), {
    loading: () => (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="3" />
      </Box>
    ),
  }),
];

export default function Feed({ data }: any) {
  return (
    <>
      {data?.map((post: any) => (
        <React.Fragment key={post._id}>
          <PostCard post={post} />
        </React.Fragment>
      ))}
    </>
  );
}
