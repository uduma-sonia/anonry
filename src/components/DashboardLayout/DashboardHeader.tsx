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
import { useUser } from "@utils/hooks/useUser";

export default function DashboardHeader({ onOpen }: any) {
  const { data: user } = useUser();

  return (
    <Box position="sticky" top="0px" bg="#F7F7F7" zIndex="999">
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
              type="button"
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
              type="button"
            >
              <Link href="/dairy" passHref>
                New
              </Link>
            </Button>

            <Link href="/dairy" passHref>
              <Button
                p="7px"
                _focus={{ outline: "none" }}
                variant="primary"
                display={{ sm: "block", xl: "none" }}
                mr="1rem"
                type="button"
              >
                <AiOutlinePlus />
              </Button>
            </Link>

            <Avatar
              size="sm"
              src={user?.data?.data?.avatar}
              display={{ base: "block", xl: "none" }}
              name={user?.data?.data?.user_name}
            />

            <Avatar
              size="md"
              src={user?.data?.data?.avatar}
              display={{ base: "none", xl: "block" }}
              name={user?.data?.data?.user_name}
            />
          </Box>
        </HStack>
      </Box>

      <Divider borderColor="#000000" />
    </Box>
  );
}
