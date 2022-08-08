import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";

const [PostCard] = [dynamic(() => import("./PostCard"))];

export default function Feed() {
  return (
    <>
      <Link href="/feed/nskcn0wsmwdkncbyeyd93d" passHref>
        <ChakraLink _hover={{ textDecor: "none" }} _focus={{ outline: "none" }}>
          <PostCard />
        </ChakraLink>
      </Link>
    </>
  );
}
