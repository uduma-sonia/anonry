import {
  Box,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

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
                      21 Dec 2021, at 08.12 am
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

                  <Td border="none">+${item.amount}</Td>

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
    createdAt: "21 Dec 2021, at 08.12 am",
  },
  {
    title: "Design project",
    type: "project",
    name: "Linda Howsten",
    schema: "income",
    amount: 1000,
    createdAt: "21 Dec 2021, at 08.12 am",
  },
  {
    title: "paypal topup",
    type: "topup",
    name: "Paypal.INC",
    schema: "expenses",
    amount: 3000,
    createdAt: "21 Dec 2021, at 08.12 am",
  },
  {
    title: "transfer money",
    type: "transfer",
    name: "Heyston Wilson",
    schema: "expenses",
    amount: 10000,
    createdAt: "21 Dec 2021, at 08.12 am",
  },
];
