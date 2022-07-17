import {
  Box,
  Divider,
  HStack,
  Heading,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

export default function DashboardHeader({ onOpen }: any) {
  return (
    <Box position="sticky" top="0px" bg="#F7F7F7">
      <Box h="100px" px={{ base: "1.2rem", lg: "4rem" }}>
        <HStack h="100%" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Button
              p="7px"
              _focus={{ outline: "none" }}
              variant="primary"
              display={{ sm: "block", xl: "none" }}
              onClick={onOpen}
              mr="1rem"
            >
              <GiHamburgerMenu />
            </Button>

            <Heading fontSize={{ base: "lg", lg: "xl" }}>Home</Heading>
          </Box>

          <Box display="flex" alignItems="center">
            <Button
              _focus={{ outline: "none" }}
              variant="primary"
              display={{ sm: "none", xl: "block" }}
              mr="1rem"
            >
              <Link href="/dairy" passHref>
                New
              </Link>
            </Button>

            <Button
              p="7px"
              _focus={{ outline: "none" }}
              variant="primary"
              display={{ sm: "block", xl: "none" }}
              mr="1rem"
            >
              <Link href="/dairy" passHref>
                <AiOutlinePlus />
              </Link>
            </Button>

            <Avatar
              size="sm"
              src="https://robohash.org/40"
              display={{ base: "block", xl: "none" }}
            />

            <Avatar
              size="md"
              src="https://robohash.org/40"
              display={{ base: "none", xl: "block" }}
            />
          </Box>
        </HStack>
      </Box>

      <Divider borderColor="#000000" />
    </Box>
  );
}
