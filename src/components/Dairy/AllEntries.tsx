import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function AllEntries({ entries }: any) {
  const cutText = (val: string, num: number) => {
    if (val.length > num) {
      return `${val.substring(0, num)}...`;
    } else {
      return val;
    }
  };

  return (
    <>
      {entries?.map(({ description, _id, title }: any) => {
        return (
          <Box mb="2rem" borderBottom="1px solid #d7d7d7" pb="10px" key={_id}>
            <Text fontWeight="medium" mb="0.6rem">
              {cutText(title, 40)}
            </Text>

            <Text fontSize="13px">{cutText(description, 70)}</Text>
          </Box>
        );
      })}
    </>
  );
}
