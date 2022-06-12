import React from "react";
import {
  Box,
  Text,
  HStack,
  Link as ChakraLink,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { format } from "date-fns";

function LenderHistory() {
  return (
    <Box
      outline="1px solid #E2E2EA"
      borderRadius="2xl"
      bg="white"
      position="relative"
      py="1.8rem"
      px="1.4rem"
    >
      <HStack mb="1rem" justifyContent="space-between" alignItems="start">
        <Text color="text.gray" fontWeight="medium" fontSize="lg" mb="1rem">
          Lenders&lsquo; History
        </Text>

        <Link href="/" passHref>
          <ChakraLink
            color="brand.400"
            fontSize="sm"
            textDecoration="underline"
          >
            View All
          </ChakraLink>
        </Link>
      </HStack>

      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th fontWeight="medium" color="text.gray">
                Name
              </Th>
              <Th fontWeight="medium" color="text.gray">
                Date
              </Th>
              <Th fontWeight="medium" color="text.gray">
                Points
              </Th>
              <Th fontWeight="medium" color="text.gray">
                Amount
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {history.map((item) => (
              <Tr key={item.name}>
                <Td
                  d="flex"
                  alignItems="center"
                  color="text.gray"
                  gap="10px"
                  height="80px"
                >
                  <Tag bg="#eeeeee" boxSize="50px" p="0px">
                    <Image src={item.image} alt="user" />
                  </Tag>

                  <Text as="span" color="text.gray" opacity="0.8">
                    {item.name}
                  </Text>
                </Td>

                <Td color="text.gray" opacity="0.8">
                  {format(new Date(item.date), "P")}
                </Td>

                <Td>
                  <Tag
                    fontSize="11px"
                    color="#A36AFF"
                    fontWeight="normal"
                    bgColor="#A36AFF1b"
                  >
                    {item.points} points
                  </Tag>
                </Td>

                <Td color="text.gray" opacity="0.8">
                  ${item.amount}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LenderHistory;

const history = [
  {
    image: "/images/avatar.png",
    name: "Anna",
    date: "2022-07-02T03:36:49.452785+01:00",
    points: "100",
    amount: "100",
  },
  {
    image: "/images/avatar.png",
    name: "Bayo",
    date: "2022-04-10T03:36:49.452785+01:00",
    points: "150",
    amount: "200",
  },
  {
    image: "/images/avatar.png",
    name: "Tunde",
    date: "2022-02-22T03:36:49.452785+01:00",
    points: "200",
    amount: "300",
  },
];
