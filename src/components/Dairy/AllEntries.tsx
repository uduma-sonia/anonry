import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function AllEntries({ entries }: any) {
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(
      {
        pathname: "/diary",
        query: { id },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <>
      {entries?.map(({ description, _id, title }: any) => {
        return (
          <Box
            mb="2rem"
            borderBottom="1px solid #d7d7d7"
            pb="10px"
            key={_id}
            _hover={{ borderBottomColor: "#000" }}
            cursor="pointer"
            onClick={() => handleEdit(_id)}
          >
            <Text fontWeight="medium" mb="0.6rem" noOfLines={1}>
              {title}
            </Text>

            <Text fontSize="13px" noOfLines={3}>
              {description}
            </Text>
          </Box>
        );
      })}
    </>
  );
}
