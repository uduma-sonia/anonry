import { VscTriangleDown } from "react-icons/vsc";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiWallet3Line, RiSearchLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Box,
  HStack,
  VStack,
  Image,
  Link as ChakraLink,
  Avatar,
  Tag,
  TagLabel,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Hide,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import NotAllowed from "@components/Modal/NotAllowed";

export const defaultRoutes = [
  {
    links: "/crowd-lending",
    label: "Crowdlending",
    icon: <RiSearchLine />,
  },
  {
    links: "/wallet",
    label: "Wallet",
    icon: <RiWallet3Line />,
  },
];

const Logo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NotAllowed isOpen={isOpen} onClose={onClose} />
      <Box d="flex" gap="20px">
        <Image
          src="/images/beta_logo.png"
          alt="sync logo"
          width={{ base: "60px", lg: "100px" }}
          height={{ base: "30px", lg: "40px" }}
          cursor="pointer"
          onClick={onOpen}
        />
      </Box>
    </>
  );
};

const HeaderMiddle = () => {
  const router = useRouter();

  return (
    <Box height="100%">
      <HStack as="nav" justifyContent="center" height="100%" spacing={10}>
        {defaultRoutes.map(({ links, label, icon }) => {
          const isActive = router.pathname.includes(links);

          return (
            <Link key={links ?? label} href={links} passHref>
              <ChakraLink
                as="a"
                position="relative"
                backgroundColor="transparent"
                alignSelf="center"
                justifyContent="center"
                alignItems="center"
                display="flex"
                fontSize="sm"
                fontWeight={isActive ? "600" : "400"}
                color={isActive ? "brand.400" : "text.secondary"}
                height="100%"
                borderRadius="0px"
                px="0px"
                _hover={{ bgColor: "transparent" }}
                _focus={{ boxShadow: "none" }}
                _after={{
                  content: isActive ? '""' : "unset",
                  position: "absolute",
                  bgColor: "brand.400",
                  borderTopStartRadius: "full",
                  borderTopEndRadius: "full",
                  width: "100%",
                  height: "2.95px",
                  bottom: "0%",
                }}
              >
                <Box as="span" mr="4px">
                  {icon}
                </Box>
                {label}
              </ChakraLink>
            </Link>
          );
        })}
      </HStack>
    </Box>
  );
};

const HeaderMiddleMoile = () => {
  const router = useRouter();

  return (
    <VStack as="nav" spacing={0} gap={10} mt="5rem">
      {defaultRoutes.map(({ links, label, icon }) => {
        const isActive = router.pathname.includes(links);

        return (
          <Link key={links ?? label} href={links} passHref>
            <ChakraLink
              as="a"
              position="relative"
              backgroundColor="transparent"
              alignSelf="center"
              justifyContent="center"
              alignItems="center"
              display="flex"
              fontSize="sm"
              fontWeight={isActive ? "600" : "400"}
              color={isActive ? "text.gray" : "text.secondary"}
              borderRadius="0px"
              px="0px"
              _hover={{ bgColor: "transparent" }}
              _focus={{ boxShadow: "none" }}
              _after={{
                position: "absolute",
                bgColor: "brand.400",
                borderTopStartRadius: "full",
                borderTopEndRadius: "full",
                width: "100%",
                height: "2.95px",
                bottom: "0%",
              }}
            >
              <Box as="span" mr="4px">
                {icon}
              </Box>
              {label}
            </ChakraLink>
          </Link>
        );
      })}
    </VStack>
  );
};

const HeaderAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      justifyContent="end"
      alignItems="center"
      height="100%"
      spacing={4}
      cursor="pointer"
      onClick={onOpen}
    >
      <NotAllowed isOpen={isOpen} onClose={onClose} />

      <FaRegBell />
      <Box>
        <Tag
          size="lg"
          variant="unstyled"
          borderRadius="full"
          px="0px"
          gap="0.5rem"
        >
          <Avatar size="sm" name="austin robert" />
          <Hide below="sm">
            <TagLabel fontSize="sm" color="#171725" fontWeight="semibold">
              Austin{" "}
              <Text as="span" display={{ base: "none", lg: "inline-block" }}>
                {" "}
                Robert
              </Text>
            </TagLabel>
            <VscTriangleDown color="#92929D" size="1rem" />
          </Hide>
        </Tag>
      </Box>
    </HStack>
  );
};

function DefaultHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as="header"
      boxShadow="inset 0px -1px 0px #E2E2EA"
      height="70px"
      px="30px"
      position="sticky"
      w="100%"
      top="0px"
      zIndex={{ base: 2, lg: 1 }}
      backgroundColor="#ffffff"
      maxW={"min(100%,1920px)"}
      mx="auto"
    >
      <HStack justifyContent="space-between" alignItems="center" height="100%">
        <Box>
          <Box d="flex" gap="20px">
            <Logo />

            <IconButton
              display={{ base: "block", lg: "none" }}
              aria-label="action button"
              size="sm"
              bg="none"
              _hover={{ bg: "none" }}
              icon={<GiHamburgerMenu />}
              onClick={onOpen}
            />
          </Box>
        </Box>

        <Box h="100%" display={{ base: "none", lg: "block" }}>
          <HeaderMiddle />
        </Box>

        <HeaderAction />
      </HStack>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            <HeaderMiddleMoile />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default DefaultHeader;
