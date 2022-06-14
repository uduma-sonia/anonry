import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import NotAllowed from "@components/Modal/NotAllowed";
import Request from "@components/Modal/Request";

function LenderUpdate() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenRequest,
    onOpen: onOpenRequest,
    onClose: onCloseRequest,
  } = useDisclosure();
  const [userName, setUserName] = useState("");
  const [actionType, setActionType] = useState("");

  const handleRequest = (a: any, b: string) => {
    setUserName(a);
    setActionType(b);
    onOpenRequest();
  };

  return (
    <Box
      outline="1px solid #E2E2EA"
      borderRadius="2xl"
      bg="white"
      position="relative"
      py="1.8rem"
      px="1.4rem"
    >
      <NotAllowed isOpen={isOpen} onClose={onClose} />
      <Request
        isOpen={isOpenRequest}
        onClose={onCloseRequest}
        name={userName}
        action={actionType}
      />

      <HStack mb="1rem" justifyContent="space-between" alignItems="start">
        <Text color="text.gray" fontWeight="medium" fontSize="lg" mb="1rem">
          Your Lending History
        </Text>

        <ChakraLink
          color="brand.400"
          fontSize="sm"
          textDecoration="underline"
          onClick={onOpen}
        >
          View All
        </ChakraLink>
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
                        onClick={() => {
                          handleRequest(item.name, "Accept");
                        }}
                      >
                        Accept
                      </Button>

                      <Button
                        flex="1 1 0px"
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
                        onClick={() => {
                          handleRequest(item.name, "Reject");
                        }}
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
    name: "Johnson Doe",
    date: "2022-07-02T03:36:49.452785+01:00",
    points: "100",
    amount: "100",
    status: "PENDING",
  },
  {
    image: "/images/avatar2.png",
    name: "Anna Kendrick",
    date: "2022-04-10T03:36:49.452785+01:00",
    points: "150",
    amount: "200",
    status: "REJECTED",
  },
  {
    image: "/images/avatar3.png",
    name: "Tunde Segun",
    date: "2022-02-22T03:36:49.452785+01:00",
    points: "200",
    amount: "300",
    status: "APPROVED",
  },
];
