import { useState } from "react";
import { Box, Text, Avatar, Button, Center } from "@chakra-ui/react";

export default function AvatarView() {
  const [selectedAvatar, setSelectedAvatar] = useState("");

  return (
    <Box pt="1rem" color="#000">
      <Text fontSize="sm">Select one avatar to change your current avatar</Text>

      <Box
        display="flex"
        mt="2rem"
        alignItems="center"
        gap="20px"
        justifyContent="center"
      >
        <Avatar src={selectedAvatar} name="buffy" size="xl" />

        <Button variant="primary" px="10px" py="5px">
          Save
        </Button>
      </Box>

      <Box
        mt="3rem"
        display="grid"
        gridTemplateColumns={{
          base: "1fr 1fr",
          md: "1fr 1fr 1fr",
          xl: "repeat(4, 1fr)",
        }}
        gap="1.8rem"
      >
        {allAvatars.map(({ ava }) => (
          <Center key={ava}>
            <Avatar
              size="lg"
              src={ava}
              mx="auto"
              cursor="pointer"
              transition="all 0.5s"
              _hover={{ transform: "scale(1.1)" }}
              onClick={() => setSelectedAvatar(ava)}
            />
          </Center>
        ))}
      </Box>
    </Box>
  );
}

const allAvatars = [
  {
    ava: "https://robohash.org/happy?set=set2&size=500x500",
  },
  {
    ava: "https://robohash.org/sad?set=set2&size=500x500",
  },
  {
    ava: "https://robohash.org/freaky?set=set2&size=500x500",
  },
  {
    ava: "https://robohash.org/67w?set=set2&size=500x500",
  },

  {
    ava: "https://robohash.org/6hs?set=set3&size=500x500",
  },
  {
    ava: "https://robohash.org/09p?set=set3&size=500x500",
  },
  {
    ava: "https://robohash.org/fr34?set=set3&size=500x500",
  },
  {
    ava: "https://robohash.org/mbds?set=set3&size=500x500",
  },

  {
    ava: "https://robohash.org/mo34?set=set4&size=500x500",
  },
  {
    ava: "https://robohash.org/hvf4?set=set4&size=500x500",
  },
  {
    ava: "https://robohash.org/p9a?set=set4&size=500x500",
  },
  {
    ava: "https://robohash.org/HVF.png?set=set4&size=500x500",
  },
];
