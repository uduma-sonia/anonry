import React from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tag,
  Image,
} from "@chakra-ui/react";

function DonateForm() {
  return (
    <Box
      outline="1px solid #E2E2EA"
      borderRadius="2xl"
      bg="white"
      position="relative"
      py="1.8rem"
      px="2.4rem"
    >
      <Text color="text.gray" fontWeight="semibold" fontSize="md" mb="1rem">
        Donate to Project
      </Text>

      <Box px="50px" mt="3rem">
        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <Tag p="0px" bg="none" minW="0px">
              <Image alt="" src="/images/hedera.svg" boxSize="12px" />
            </Tag>
          </InputLeftElement>
          <Input
            placeholder="Type amount"
            _placeholder={{ fontSize: "13px" }}
            _focus={{ outline: "none" }}
          />
          <InputRightElement
            color="#A36AFF"
            w="fit-content"
            fontSize="12px"
            px="10px"
          >
            200 Points
          </InputRightElement>
        </InputGroup>

        <Center mt="2rem">
          <Button
            bgColor="brand.400"
            color="white"
            _focus={{ outline: "none" }}
            _hover={{ bgColor: "brand.400" }}
            _active={{ bgColor: "brand.400" }}
            fontSize="sm"
            fontWeight="normal"
            minW="17rem"
            py="23px"
          >
            Invest in Project
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default DonateForm;
