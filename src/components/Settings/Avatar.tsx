import { useCallback, useEffect, useState } from "react";
import { Box, Text, Avatar, Button, Center, useToast } from "@chakra-ui/react";
import { useUser } from "@utils/hooks/useUser";
import { avatarSets } from "@utils/prodData";
import { userAPI } from "@utils/api";

export default function AvatarView() {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [allAvatars, setAllAvatars] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const { data: user } = useUser();

  const generateRandomAvatar = (length: number) => {
    // generate random alphanumeric value
    return Math.random().toString(16).substring(2, length);
  };

  // runs once on every page load
  useEffect(() => {
    const avatarUrl = avatarSets.map((item) => {
      const ran = generateRandomAvatar(8);
      return `https://robohash.org/${ran}?set=${item.id}&size=200x200`;
    });

    setAllAvatars(avatarUrl);
  }, []);

  const onSubmit = useCallback(
    async (data: string) => {
      setIsSubmitting(true);
      try {
        const result = await userAPI.updateUser({ avatar: data });
        if (result) {
          toast({
            position: "top-right",
            duration: 2000,
            isClosable: true,
            render: () => (
              <Box
                color="white"
                p={3}
                bg="black"
                borderRadius={10}
                textAlign="center"
                fontSize="xs"
              >
                {result?.data?.message}
              </Box>
            ),
          });
        }
      } catch (error: any) {
        console.log(error);

        toast({
          position: "top-right",
          duration: 9000,
          isClosable: true,
          render: () => (
            <Box
              color="white"
              p={3}
              bg="#fa4e37"
              borderRadius={10}
              textAlign="center"
              fontSize="xs"
            >
              {error ?? "Error, try again"}
            </Box>
          ),
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [toast]
  );

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
        {/* if selected avatar is an empty string display the current user avatar if not show the selected user avatar*/}
        <Avatar
          src={
            selectedAvatar.length ? selectedAvatar : user?.data?.data?.avatar
          }
          name="anonry"
          size="xl"
        />
        {/* if there is a selected avatar */}
        {!!selectedAvatar.length && (
          <Button
            variant="primary"
            px="10px"
            py="5px"
            _focus={{ outline: "none" }}
            type="submit"
            isLoading={isSubmitting}
            onClick={() => onSubmit(selectedAvatar)}
          >
            Save
          </Button>
        )}
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
          return (
            <Center key={index}>
              <Avatar
                size="lg"
                src={item}
                mx="auto"
                cursor="pointer"
                transition="all 0.5s"
                _hover={{ transform: "scale(1.1)" }}
                onClick={(e) => setSelectedAvatar(item)}
              />
            </Center>
          );
        })}
      </Box>
    </Box>
  );
}
