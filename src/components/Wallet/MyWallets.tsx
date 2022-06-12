import React from "react";
import {
  Box,
  Tag,
  Text,
  HStack,
  Image,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import Transfer from "@components/Modal/Transfer";

const AllTimeWallet = () => {
  return (
    <Box
      border="1px solid #D7D7D7"
      bgColor="#ffffff"
      p="10px"
      borderRadius="10px"
      height="130px"
      maxH="150px"
      d="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <HStack justifyContent="space-between">
        <Text color="#0D0138" fontWeight="medium" fontSize="14px">
          All Time
        </Text>

        <Tag color="brand.400" bgColor="#DCEEE6" py="10px">
          +1,300.50
        </Tag>
      </HStack>

      <Box>
        <Text color="#0D0138" fontWeight="medium" opacity="0.4" fontSize="sm">
          Current Balance
        </Text>

        <Text color="#0D0138" fontWeight="semibold" mt="1.2rem" fontSize="xl">
          $147,242,131,40
        </Text>
      </Box>
    </Box>
  );
};

const MainWallet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative">
      <Transfer isOpen={isOpen} onClose={onClose} />

      <IconButton
        aria-label="transfer"
        icon={<BiTransferAlt size="1.3rem" />}
        _hover={{ bg: "brand.400" }}
        position="absolute"
        right="-30px"
        top="30%"
        bgColor="brand.400"
        d={{ base: "none", lg: "flex" }}
        onClick={onOpen}
      />
      <Box
        w={{ base: "100%", lg: "90%" }}
        border="1px solid #D7D7D7"
        bgColor="#ffffff"
        p="10px"
        borderRadius="10px"
        height="130px"
        maxH="150px"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text color="#0D0138" fontWeight="medium" fontSize="14px">
          Main Wallet
        </Text>

        <Text color="#0D0138" fontWeight="medium" fontSize="xl">
          $123,000.10
        </Text>

        <HStack d="flex" justifyContent="space-between">
          <Tag color="brand.400" bgColor="#DCEEE6">
            20.4%
            <IoIosArrowRoundUp />
          </Tag>

          <FaRegMoneyBillAlt size="1.5rem" color="#000000" />
        </HStack>
      </Box>
    </Box>
  );
};

const CeloWallet = () => {
  return (
    <Box position="relative" d="flex" justifyContent="end">
      <Box
        w={{ base: "100%", lg: "90%" }}
        border="1px solid #D7D7D7"
        bgColor="#ffffff"
        p="10px"
        borderRadius="10px"
        height="130px"
        maxH="150px"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text color="#0D0138" fontWeight="medium" fontSize="14px">
          Hedera Wallet
        </Text>

        <Text color="#0D0138" fontWeight="medium" fontSize="xl">
          $123,000.10
        </Text>

        <HStack d="flex" justifyContent="space-between">
          <Tag color="brand.400" bgColor="#DCEEE6">
            20.4%
            <IoIosArrowRoundUp />
          </Tag>

          <Image
            src="/images/hedera_logo.svg"
            boxSize="25px"
            alt="hedera logo"
          />
        </HStack>
      </Box>
    </Box>
  );
};

function MyWallets() {
  return (
    <Box>
      <Box
        d="grid"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
        gap={4}
      >
        <AllTimeWallet />
        <MainWallet />
        <CeloWallet />
      </Box>
    </Box>
  );
}

export default MyWallets;
