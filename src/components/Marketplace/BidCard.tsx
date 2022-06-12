import React from "react";
import { Box, Heading, Text, Tag, Progress } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { format } from "date-fns";

function BidCard({ data }: any) {
  return (
    <Box position="relative" maxH="400px" borderRadius="24px" h="400px">
      <Box h="50%" w="100%" position="relative">
        <Box
          bg={`url(${data.image})`}
          w="100%"
          h="100%"
          borderRadius="20px"
          backgroundPosition="center"
          backgroundSize="cover"
        />
      </Box>

      <Box
        border="1px solid #D7D7D7"
        h="65%"
        w="100%"
        borderRadius="24px"
        position="absolute"
        bottom="0"
        bg="white"
        p="20px"
      >
        <Text
          fontSize="lg"
          fontWeight="semibold"
          color="text.dark"
          textTransform="capitalize"
        >
          {data.name}
        </Text>
        <Text
          mt="0.5rem"
          fontSize="xs"
          color="brand.400"
          fontWeight="normal"
          textTransform="capitalize"
        >
          by {data.owner}
        </Text>

        <Text
          mt="0.7rem"
          fontSize="11px"
          color="#44444f"
          lineHeight="15px"
          fontWeight="normal"
        >
          {data.description}
        </Text>

        <Box mt="0.7rem">
          <Text
            textAlign="right"
            color="#696974"
            fontWeight="normal"
            fontSize="14px"
            mb="5px"
          >
            {data.funding_level}% funded
          </Text>

          <Progress
            value={data.funding_level}
            size="xs"
            colorScheme="green"
            borderRadius="20px"
          />
        </Box>

        <Box d="flex" alignItems="flex-end" mt="1rem" gap="7px">
          <Heading color="brand.400" fontWeight="semibold" fontSize="lg">
            USD {data.final_amount}
          </Heading>

          <Text
            textAlign="right"
            color="#696974"
            fontWeight="normal"
            fontSize="12px"
          >
            Needed
          </Text>
        </Box>

        <Box
          d="flex"
          justifyContent="space-between"
          mt="1.2rem"
          alignItems="center"
        >
          <Tag
            color="#FC5A5A"
            size="xs"
            fontSize="11px"
            p="6px"
            bgColor="#FC5A5A40"
            borderRadius="md"
          >
            <Box as="span" mr="4px">
              <BsClock />
            </Box>
            {data.days_left} days left
          </Tag>

          <Text fontSize="11px">
            Payback Date:{" "}
            <Text as="span" fontWeight="semibold">
              {format(new Date(data.payback_date), "PP")}
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default BidCard;
