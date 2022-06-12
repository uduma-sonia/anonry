import { Box, Text, HStack, IconButton, Image, Center } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function MyCards() {
  return (
    <Box
      border="1px solid #D7D7D7"
      bgColor="#ffffff"
      px="20px"
      py="20px"
      borderRadius="10px"
      maxW={{ lg: "25rem" }}
      mb="80px"
      mt={{ base: "2rem", lg: "0px" }}
    >
      <HStack justifyContent="space-between">
        <Text color="#0D0138" fontWeight="medium" fontSize="md">
          My Cards
        </Text>

        <IconButton
          aria-label="action button"
          size="sm"
          bg="none"
          icon={<BsThreeDots size="1.2rem" />}
        />
      </HStack>

      <Box my="1rem" position="relative">
        <Box
          h="190px"
          w="85%"
          maxW="300px"
          mx={{ md: "auto", lg: "0" }}
          borderRadius="10px"
        >
          <Image
            src="/images/card_1.png"
            alt="card"
            w="100%"
            h="100%"
            borderRadius="10px"
            objectFit="cover"
          />
        </Box>

        <Center
          bg="linear-gradient(180deg, #FF8A65 0%, #FF5E4B 100%)"
          height="100%"
          w="35px"
          position="absolute"
          right="-18px"
          top="0px"
          zIndex="99"
          borderTopLeftRadius="10px"
          borderBottomLeftRadius="10px"
        >
          <AiOutlinePlus color="white" size="1.3rem" />
        </Center>
      </Box>

      <Box d="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gap="10px">
        <Box>
          <Center
            border="1px solid rgba(0, 0, 0, 0.2)"
            borderRadius="8px"
            h="70px"
            _hover={{ bg: "brand.400" }}
            cursor="pointer"
          >
            <Image src="/images/req.svg" alt="icon" boxSize="27px" />
          </Center>

          <Text
            fontWeight="normal"
            color="text.gray"
            fontSize="md"
            textAlign="center"
            mt="10px"
          >
            Transfer
          </Text>
        </Box>

        <Box>
          <Center
            border="1px solid rgba(0, 0, 0, 0.2)"
            borderRadius="8px"
            h="70px"
            _hover={{ bg: "brand.400" }}
            cursor="pointer"
          >
            <Image src="/images/req.svg" alt="icon" boxSize="27px" />
          </Center>

          <Text
            fontWeight="normal"
            color="text.gray"
            fontSize="md"
            textAlign="center"
            mt="10px"
          >
            Request
          </Text>
        </Box>

        <Box>
          <Center
            border="1px solid rgba(0, 0, 0, 0.2)"
            borderRadius="8px"
            h="70px"
            _hover={{ bg: "brand.400" }}
            cursor="pointer"
          >
            <Image src="/images/topup.svg" alt="icon" boxSize="27px" />
          </Center>

          <Text
            fontWeight="normal"
            color="text.gray"
            fontSize="md"
            textAlign="center"
            mt="10px"
          >
            Topup
          </Text>
        </Box>

        <Box>
          <Center
            border="1px solid rgba(0, 0, 0, 0.2)"
            borderRadius="8px"
            h="70px"
            _hover={{ bg: "brand.400", color: "white" }}
            cursor="pointer"
          >
            <BsThreeDots size="1.8rem" />
          </Center>

          <Text
            fontWeight="normal"
            color="text.gray"
            fontSize="md"
            textAlign="center"
            mt="10px"
          >
            More
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
