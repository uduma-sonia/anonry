import React from "react";
import { Box, Text, Avatar } from "@chakra-ui/react";
import { useUser } from "@utils/hooks/useUser";

export default function ProfileCard() {
  const { data: user } = useUser();

  return (
    <Box
      border="1px solid #d7d7d7"
      borderRadius={10}
      p="1.4rem"
      bg="white"
      color="#000"
    >
      <Avatar
        size="xl"
        src={user?.data?.data?.avatar}
        name={user?.data?.data?.user_name}
        mx="auto"
        display="block"
      />

      <Text fontWeight="medium" fontSize="lg" textAlign="center" mt="1rem">
        {user?.data?.data?.user_name}
      </Text>
      <Text fontWeight="300" fontSize="sm" textAlign="center" mt="0.5rem">
        {user?.data?.data?.email}
      </Text>
      <Text fontWeight="300" fontSize="xs" textAlign="center" mt="0.5rem">
        {user?.data?.data?.no_of_notes} notes
      </Text>
    </Box>
  );
}
