import {
  Box,
  Link as ChakraLink,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { RiBookletFill } from "react-icons/ri";
import { HiOutlineViewBoards } from "react-icons/hi";
import { VscTasklist } from "react-icons/vsc";
import { IoMdCog } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DashboardSidebar() {
  const router = useRouter();
  const defaultRoutes = [
    {
      route: "/dashboard",
      sub_route: "/",
      label: "Home",
      icon: <AiFillHome />,
    },
    {
      route: "/diary",
      label: "Diary",
      icon: <RiBookletFill />,
    },
    {
      route: "/entries",
      label: "Entries",
      icon: <HiOutlineViewBoards />,
    },
    {
      route: "/tasks",
      label: "Tasks",
      icon: <VscTasklist />,
    },
    {
      route: "/settings",
      label: "Settings",
      icon: <IoMdCog />,
    },
    {
      route: "/trash",
      label: "Trash",
      icon: <FaTrash />,
    },
  ];

  return (
    <Box minH="100vh" bg="#19191a" position="sticky" top="0px">
      <Box w="fit-content" mx="auto" py="3rem">
        <ChakraLink
          href="/dashboard"
          letterSpacing="-2px"
          fontWeight="bold"
          color="#ffffff"
          fontSize="2xl"
          _hover={{ textDecoration: "none" }}
          textAlign="center"
          _focus={{ outline: "none" }}
        >
          Anonry
        </ChakraLink>
      </Box>

      <UnorderedList listStyleType="none" spacing={0}>
        {defaultRoutes.map(({ route, label, icon, sub_route }) => {
          const isActive =
            router.pathname === route || router.pathname === sub_route;

          return (
            <ListItem
              key={label}
              mb="12px"
              bg={isActive ? "#bdbdbd" : "transparent"}
              py="14px"
              pl="2rem"
              color={isActive ? "#000" : "#fff"}
              borderLeftRadius={5}
              _hover={{ bg: isActive ? "#bdbdbd" : "#bdbdbd20" }}
            >
              <Link href={route} passHref>
                <ChakraLink
                  _hover={{ textDecor: "none" }}
                  _focus={{ outline: "none" }}
                  d="flex"
                >
                  <Text mr="1rem">{icon}</Text>
                  {label}
                </ChakraLink>
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}
