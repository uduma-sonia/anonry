import React from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Center,
  HStack,
  Link as ChakraLink,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { format } from "date-fns";

function LenderUpdate() {
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
          Lenders&lsquo; Update
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
                Request
              </Th>
              <Th fontWeight="medium" color="text.gray">
                Status
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
                  gap="13px"
                  height="80px"
                >
                  <Tag bg="#eeeeee" boxSize="50px" p="0px">
                    <Image src={item.image} alt="user" />
                  </Tag>

                  <Box>
                    <Text color="text.gray" fontWeight="medium">
                      {item.name}
                    </Text>
                    <Tag
                      fontSize="10px"
                      color="#A36AFF"
                      fontWeight="normal"
                      bgColor="#A36AFF1b"
                    >
                      {item.points} voting points
                    </Tag>
                  </Box>
                </Td>

                <Td color="text.gray" opacity="0.8">
                  submitted a{" "}
                  <Text fontWeight="semibold" as="span">
                    withdrawal
                  </Text>{" "}
                  request
                </Td>

                <Td color="text.gray" opacity="0.8">
                  {item.status === "PENDING" && (
                    <HStack>
                      <Button
                        flex="1 1 0px"
                        bgColor="brand.400"
                        color="white"
                        _focus={{ outline: "none" }}
                        _hover={{ bgColor: "brand.400" }}
                        _active={{ bgColor: "brand.400" }}
                        fontSize="10px"
                        fontWeight="medium"
                        py="0px"
                        size="sm"
                      >
                        Accepted
                      </Button>

                      <Button
                        flex="1 1 0px"
                        bgColor="transparent"
                        color="#FC2E53"
                        _focus={{ outline: "none" }}
                        _hover={{ bgColor: "brand.400" }}
                        _active={{ bgColor: "brand.400" }}
                        fontSize="10px"
                        fontWeight="medium"
                        py="0px"
                        size="sm"
                        border="2px solid #FC2E53"
                      >
                        Reject
                      </Button>
                    </HStack>
                  )}

                  {item.status === "APPROVED" && (
                    <Button
                      bgColor="transparent"
                      color="brand.400"
                      border="1px solid"
                      borderColor="brand.400"
                      _focus={{ outline: "none" }}
                      _hover={{ bgColor: "transparent" }}
                      _active={{ bgColor: "transparent" }}
                      fontSize="10px"
                      fontWeight="medium"
                      py="0px"
                      w="100%"
                      size="sm"
                    >
                      Accepted
                    </Button>
                  )}

                  {item.status === "REJECTED" && (
                    <Button
                      bgColor="transparent"
                      color="#FC2E53"
                      _focus={{ outline: "none" }}
                      _hover={{ bgColor: "transparent" }}
                      _active={{ bgColor: "transparent" }}
                      fontSize="10px"
                      fontWeight="medium"
                      py="0px"
                      size="sm"
                      border="2px solid #FC2E53"
                      w="100%"
                    >
                      Rejected
                    </Button>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LenderUpdate;

const history = [
  {
    image: "/images/avatar.png",
    name: "Anna",
    date: "2022-07-02T03:36:49.452785+01:00",
    points: "100",
    amount: "100",
    status: "PENDING",
  },
  {
    image: "/images/avatar2.png",
    name: "Bayo",
    date: "2022-04-10T03:36:49.452785+01:00",
    points: "150",
    amount: "200",
    status: "REJECTED",
  },
  {
    image: "/images/avatar.png",
    name: "Tunde",
    date: "2022-02-22T03:36:49.452785+01:00",
    points: "200",
    amount: "300",
    status: "APPROVED",
  },
];
