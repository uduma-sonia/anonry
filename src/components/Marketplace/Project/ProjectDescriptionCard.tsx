import React from "react";
import { Box, Text } from "@chakra-ui/react";

function ProjectDescriptionCard() {
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
        Project Description
      </Text>

      <Text fontSize="sm" color="#000000" opacity="0.8" lineHeight="25px">
        Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit
        eius. Eos excepturi voluptatibus.Voluptatem et est. Et facere ea ipsum
        iste sed quibusdam fugit velit eius. Eos excepturi
        voluptatibus.Voluptatem et est.iste sed quibusdam fugit velit eius. Eos
        excepturi voluptatibus.
      </Text>
    </Box>
  );
}

export default ProjectDescriptionCard;
