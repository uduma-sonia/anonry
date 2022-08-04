import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { cutTextFormatter } from "@utils/Formatter";

export default function AllEntries({ entries }: any) {
  return (
    <>
      {entries?.map(({ description, _id, title }: any) => {
        return (
          <Box mb="2rem" borderBottom="1px solid #d7d7d7" pb="10px" key={_id}>
            <Text fontWeight="medium" mb="0.6rem">
              {cutTextFormatter(title, 40)}
            </Text>

            <Text fontSize="13px">{cutTextFormatter(description, 70)}</Text>
          </Box>
        );
      })}
    </>
  );
}
