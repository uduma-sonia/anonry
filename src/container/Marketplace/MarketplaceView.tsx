import React from "react";
import {
  Box,
  Button,
  Center,
  useDisclosure,
  Skeleton,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import NotAllowed from "@components/Modal/NotAllowed";
import dynamic from "next/dynamic";

const [MarketplaceSearchBar, BidCard] = [
  dynamic(() => import("@components/Marketplace/MarketplaceSearchBar"), {
    loading: () => (
      <Stack>
        <Skeleton height="50px" />
      </Stack>
    ),
  }),
  dynamic(() => import("@components/Marketplace/BidCard"), {
    loading: () => (
      <Stack>
        <Skeleton height="200px" borderRadius="20px" />
      </Stack>
    ),
  }),
];

function MarketplaceView() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={{ base: "1rem", lg: "4rem" }}>
      <NotAllowed isOpen={isOpen} onClose={onClose} />
      <MarketplaceSearchBar />

      <Box mt="2rem" pb="100px">
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap={8}
        >
          {defaultBids?.map((item: any, index: any) => {
            return (
              <Link
                href="/crowd-lending/abcd"
                passHref
                key={`${item.name} - ${index}`}
              >
                <ChakraLink
                  _hover={{ textDecor: "none" }}
                  _focus={{ outline: "none" }}
                >
                  <BidCard data={item} />
                </ChakraLink>
              </Link>
            );
          })}
        </Box>

        <Center mt="4rem">
          <Button
            color="white"
            fontSize="sm"
            borderRadius="8px"
            fontWeight="semibold"
            bgColor="brand.400"
            onClick={onOpen}
          >
            Load more
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default MarketplaceView;

const defaultBids = [
  {
    image: "/images/stripe_bg.png",
    name: "Project Agerbee",
    owner: "Tap house",
    description:
      "Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit eius. Eos excepturi voluptatibus.",
    funding_level: 75,
    final_amount: "150,000",
    days_left: "1",
    payback_date: "2022-07-02T03:36:49.452785+01:00",
  },
  {
    image: "/images/img_2.jpg",
    name: "Project Berkowitz",
    owner: "Wonka Industries",
    description:
      "Bacon ipsum dolor amet andouille pork belly drumstick doner chislic turkey. Cow strip steak landjaeger,",
    funding_level: 55,
    final_amount: "50,000",
    days_left: "4",
    payback_date: "2022-08-02T03:36:49.452785+01:00",
  },
  {
    image: "/images/img_3.jpg",
    name: "Sputnik",
    owner: "Wayne Enterprises",
    description:
      "Brisket swine andouille, shank capicola spare ribs pork. Fatback chuck venison, ribeye sausage pork loin.",
    funding_level: 15,
    final_amount: "10,000",
    days_left: "7",
    payback_date: "2022-09-02T03:36:49.452785+01:00",
  },
  {
    image: "/images/img_4.jpg",
    name: "Linkage, Inc.",
    owner: "Cyberdyne Systems",
    description:
      "Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit eius. Eos excepturi voluptatibus.",
    funding_level: 90,
    final_amount: "3,000",
    days_left: "2",
    payback_date: "2022-10-02T03:36:49.452785+01:00",
  },
];
