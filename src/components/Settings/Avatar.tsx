import { useCallback, useEffect, useState } from "react";
import { Box, Text, Avatar, Button, Center } from "@chakra-ui/react";
import { useUser } from "@utils/hooks/useUser";
import { avatarSets } from "@utils/avatarSets";
import { userAPI } from "@utils/api";
import { useSWRConfig } from "swr";
import { swrKeys } from "@utils/swrKeys";
import { successToast, errorToast } from "@lib/toast";

export default function AvatarView() {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [allAvatars, setAllAvatars] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: user } = useUser();
  const { mutate } = useSWRConfig();

  const generateRandomAvatar = (length: number) => {
    return Math.random().toString(16).substring(2, length);
  };

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
          mutate(swrKeys.getUserProfile);
          successToast({ message: result?.data?.message });
        }
      } catch (error: any) {
        errorToast({ message: error ?? "An error occured, Try again" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [mutate]
  );

  return (
    <Box pt="1rem" color="#000">
      <Text fontSize="sm">Select one avatar to change your current avatar</Text>

      <Box
        display="flex"
        mt="3rem"
        alignItems="center"
        gap="20px"
        justifyContent="center"
      >
        {selectedAvatar.length > 0 && (
          <Button
            variant="solid"
            px="10px"
            py="5px"
            _focus={{ outline: "none" }}
            type="submit"
            isLoading={isSubmitting}
            onClick={() => setSelectedAvatar("")}
          >
            Abort
          </Button>
        )}
        <Avatar
          src={
            selectedAvatar.length ? selectedAvatar : user?.data?.data?.avatar
          }
          name={user?.data?.data?.user_name}
          size="xl"
        />
        {selectedAvatar.length > 0 && (
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
