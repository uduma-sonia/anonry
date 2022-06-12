import React, { ReactNode } from "react";
import { Box, Stack, Skeleton } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const [MyWallets, Transactions, MyCards, Highlights] = [
  dynamic<ReactNode>(
    () => import("@components/Wallet").then((mod) => mod.MyWallets),
    {
      loading: () => (
        <Stack>
          <Skeleton height="100px" mb="10px" />
        </Stack>
      ),
    }
  ),
  dynamic<ReactNode>(
    () => import("@components/Wallet").then((mod) => mod.Transactions),
    {
      loading: () => (
        <Stack>
          <Skeleton height="50px" />
        </Stack>
      ),
    }
  ),
  dynamic<ReactNode>(
    () => import("@components/Wallet").then((mod) => mod.MyCards),
    {
      loading: () => (
        <Stack>
          <Skeleton height="50px" />
        </Stack>
      ),
    }
  ),
  dynamic<ReactNode>(
    () => import("@components/Wallet").then((mod) => mod.Highlights),
    {
      loading: () => (
        <Stack>
          <Skeleton height="200px" mb="10px" />
        </Stack>
      ),
    }
  ),
];

function WalletView() {
  return (
    <Box px={{ base: "1rem", lg: "3rem" }} pt="3rem">
      <Box display="flex" flexDirection={{ base: "column", lg: "row" }} gap={6}>
        <Box w={{ base: "100%", lg: "70%" }}>
          <MyWallets />
          <Highlights />

          <Transactions />
        </Box>

        <Box w={{ base: "100%", lg: "30%" }}>
          <MyCards />
        </Box>
      </Box>
    </Box>
  );
}

export default WalletView;
