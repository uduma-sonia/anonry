import { useState } from "react";
import { Box, Text, Avatar, Button, Center } from "@chakra-ui/react";

export default function AvatarView() {
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const generateRandomAvatar = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    return rand;
  };

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
        <Avatar src={selectedAvatar} name="anonry" size="xl" />

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
        {allAvatars.map((item, index) => {
          const ran = generateRandomAvatar();
          const nsrc = `https://robohash.org/${ran}?set=${item.id}&size=500x500`;
          return (
            <Center key={index}>
              <Avatar
                size="lg"
                src={nsrc}
                mx="auto"
                cursor="pointer"
                transition="all 0.5s"
                _hover={{ transform: "scale(1.1)" }}
                onClick={(e) => console.log(nsrc)}
              />
            </Center>
          );
        })}
      </Box>
    </Box>
  );
}

const allAvatars = [
  {
    id: "set2",
  },
  {
    id: "set2",
  },
  {
    id: "set2",
  },
  {
    id: "set2",
  },

  {
    id: "set3",
  },
  {
    id: "set3",
  },
  {
    id: "set3",
  },
  {
    id: "set3",
  },

  {
    id: "set4",
  },
  {
    id: "set4",
  },
  {
    id: "set4",
  },
  {
    id: "set4",
  },
];
