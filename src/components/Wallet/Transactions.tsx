import {
  Box,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  IconButton,
  Tag,
  Image,
  HStack,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { format } from "date-fns";

const Transactions = () => {
  return (
    <Box mt="3rem">
      <Text color="#0D0138" fontWeight="medium" fontSize="lg">
        Recent Transactions
      </Text>

      <Box overflowX="scroll">
        <TableContainer
          mt="1rem"
          bgColor="white"
          borderRadius="13px"
          px="20px"
          border="1px solid #D7D7D7"
          overflowX="scroll"
        >
          <Table variant="simple" size="xs" overflowX="scroll">
            <Tbody border="none">
              {defaultTransaction.map((item) => (
                <Tr
                  key={item.name}
                  border="none"
                  color="#0D0138"
                  fontSize="sm"
                  fontWeight="medium"
                  h="70px"
                >
                  <Td border="none" textTransform="capitalize">
                    {item.title}
                    <Text color="#0D0138" opacity="0.5" mt="3px">
                      {format(new Date(item.createdAt), "PP")}
                    </Text>
                  </Td>

                  <Td border="none" textTransform="capitalize">
                    {item.type}
                  </Td>

                  <Td border="none" textTransform="capitalize">
                    {item.name}
                  </Td>

                  <Td border="none">
                    <Box d="flex" gap="10px">
                      <GoPrimitiveDot
                        color={item.schema === "income" ? "#00A15D" : "#FC2E53"}
                        size="1.2rem"
                      />
                      {item.schema}
                    </Box>
                  </Td>

                  <Td>
                    <HStack spacing={1}>
                      <Tag p="0px" bg="none" minW="0px">
                        <Image alt="" src="/images/hedera.svg" boxSize="12px" />
                      </Tag>
                      <Text>{item.amount}</Text>
                    </HStack>
                  </Td>

                  <Td border="none">
                    <IconButton
                      aria-label="action button"
                      size="sm"
                      icon={<BsThreeDots />}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Transactions;

const defaultTransaction = [
  {
    title: "monthly salary",
    type: "salary",
    name: "Emmanuel Johnson",
    schema: "income",
    amount: 10000,
    createdAt: "2022-03-02T03:36:49.452785+01:00",
  },
  {
    title: "Design project",
    type: "project",
    name: "Linda Howsten",
    schema: "income",
    amount: 1000,
    createdAt: "2022-04-15T03:36:49.452785+01:00",
  },
  {
    title: "paypal topup",
    type: "topup",
    name: "Paypal.INC",
    schema: "expenses",
    amount: 3000,
    createdAt: "2022-05-17T03:36:49.452785+01:00",
  },
  {
    title: "transfer money",
    type: "transfer",
    name: "Heyston Wilson",
    schema: "expenses",
    amount: 10000,
    createdAt: "2022-06-10T03:36:49.452785+01:00",
  },
];
