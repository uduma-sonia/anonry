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
import { useRouter } from "next/router";

export default function DashboardHeader({ onOpen }: any) {
  const { data: user } = useUser();
  const router = useRouter();

  const routerName = () => {
    if (router.pathname === "/" || router.pathname === "/dashboard") {
      return "Home";
    } else if (router.pathname === "/diary") {
      return "Diary";
    } else if (router.pathname === "/feed") {
      return "Feed";
    } else if (router.pathname === "/settings") {
      return "Settings";
    } else if (router.pathname === "/trash") {
      return "Trash";
    }
  };

  return (
    <Box position="sticky" top="0px" bg="#F7F7F7" zIndex="999">
      <Box h="80px" px={{ base: "1.2rem", lg: "4rem", "2xl": "10rem" }}>
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

            <Heading fontSize={{ base: "lg", lg: "xl" }}>
              {routerName()}
            </Heading>
          </Box>

          <Box display="flex" alignItems="center">
            <Button
              _focus={{ outline: "none" }}
              variant="primary"
              display={{ sm: "none", xl: "block" }}
              mr="1rem"
              type="button"
            >
              <Link href="/diary" passHref>
                New
              </Link>
            </Button>

            <Link href="/diary" passHref>
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

            <Link href="/settings" passHref>
              <Avatar
                size="sm"
                src={user?.data?.data?.avatar}
                display={{ base: "block", xl: "none" }}
                name={user?.data?.data?.user_name}
                cursor="pointer"
              />
            </Link>

            <Link href="/settings" passHref>
              <Avatar
                size="md"
                src={user?.data?.data?.avatar}
                name={user?.data?.data?.user_name}
                display={{ base: "none", xl: "block" }}
                cursor="pointer"
              />
            </Link>
          </Box>
        </HStack>
      </Box>

      <Divider borderColor="#000000" />
    </Box>
  );
}
