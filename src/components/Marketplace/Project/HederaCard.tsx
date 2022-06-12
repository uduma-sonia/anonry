import React from "react";
import { Box, Image } from "@chakra-ui/react";

function HederaCard() {
  return (
    <Box position="relative" mb="17px">
      <Image
        mx="auto"
        width="100%"
        maxW="400px"
        src="/images/hedera_card.png"
        alt="hedera card"
      />
    </Box>
  );
}

export default HederaCard;
