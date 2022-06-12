import React from "react";
import {
  Box,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { BsFunnel } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import NotAllowed from "@components/Modal/NotAllowed";

function MarketplaceSearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pt="4rem" d="flex" alignItems="center" justifyContent="end" gap="6rem">
      <NotAllowed isOpen={isOpen} onClose={onClose} />

      <Box d="flex" gap="14px">
        <Box
          bg="white"
          borderRadius="20px"
          w="600px"
          h="60px"
          d="flex"
          justifyContent="space-between"
          gap="20px"
          py="8px"
          px="20px"
        >
          <InputGroup>
            <Input
              h="100%"
              placeholder="Search"
              borderRadius="xl"
              bgColor="#FAFAFB"
              border="1px solid #F1F1F5"
              _placeholder={{ fontSize: "xs" }}
            />
            <InputRightElement>
              <RiSearchLine color="#92929D" size="1.3rem" />
            </InputRightElement>
          </InputGroup>

          <Button
            alignSelf="center"
            bgColor="#F1F1F5"
            fontSize="xs"
            px="30px"
            borderRadius="xl"
            fontWeight="semibold"
            color="#696974"
          >
            Search now
          </Button>
        </Box>

        <IconButton
          aria-label="filter"
          size="sm"
          icon={<BsFunnel size="1rem" />}
          bgColor="white"
          alignSelf="center"
          color="#92929D"
        />
      </Box>

      <Box>
        <Button
          color="white"
          fontSize="xs"
          borderRadius="xl"
          fontWeight="semibold"
          bgColor="brand.400"
          onClick={onOpen}
          _focus={{ outline: "none" }}
          _hover={{ bg: "brand.400" }}
        >
          <Box as="span" mr="6px">
            <AiOutlinePlus />
          </Box>
          Create Bid
        </Button>
      </Box>
    </Box>
  );
}

export default MarketplaceSearchBar;
