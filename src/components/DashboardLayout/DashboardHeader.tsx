import {
  Box,
  Divider,
  HStack,
  IconButton,
  Heading,
  Text,
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
          <Box
            display="flex"
            alignItems="center"
            gap={{ base: "1rem", xl: "0rem" }}
          >
            <Button
              p="7px"
              _focus={{ outline: "none" }}
              variant="primary"
              display={{ sm: "block", xl: "none" }}
              onClick={onOpen}
            >
              <GiHamburgerMenu />
            </Button>
            <Heading fontSize={{ base: "lg", lg: "xl" }}>Home</Heading>
          </Box>

          <Box display="flex" alignItems="center" gap="1rem">
            <Button
              _focus={{ outline: "none" }}
              variant="primary"
              display={{ sm: "none", xl: "block" }}
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
            >
              <Link href="/dairy" passHref>
                <AiOutlinePlus />
              </Link>
            </Button>

            <Avatar size="sm" />
          </Box>
        </HStack>
      </Box>

      <Divider borderColor="#000000" />
    </Box>
  );
}
