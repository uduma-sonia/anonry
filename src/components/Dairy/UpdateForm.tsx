import { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Box, Input, Button, Textarea, Tag, useToast } from "@chakra-ui/react";
import { entriesAPI } from "@utils/api";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import { swrKeys } from "@utils/swrKeys";

const schema = z.object({
  title: z.string().min(1).max(100).trim(),
  description: z.string().min(1).max(1000).trim(),
  entry_id: z.string(),
});

export default function UpdateForm() {
  const [selectedTags, setSelectedTags] = useState<any>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();
  const { mutate } = useSWRConfig();

  const { data: entry } = useSWR(
    router.isReady && swrKeys.getSingleEntry(id),
    async () => entriesAPI.getSingleEntry(id),
    {
      revalidateOnMount: true,
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (entry) {
      setValue("description", entry?.data?.data?.description);
      setValue("title", entry?.data?.data?.title);
    }
  }, [entry, setValue]);

  const onSubmit = useCallback(
    async (data) => {
      try {
        setIsSubmitting(true);
        const result = await entriesAPI.updateUserEntries(data);
        if (result) {
          mutate(swrKeys.getUserEntries);
          mutate(swrKeys.getSingleEntry);
          toast({
            position: "top-right",
            duration: 9000,
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
      } catch (err: any) {
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
              {err ?? "Error, try again"}
            </Box>
          ),
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [mutate, toast]
  );

  return (
    <Box px={{ lg: "1rem" }} as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex">
        <Input {...register("entry_id")} hidden value={id} />
        <Input
          placeholder="title"
          border="none"
          bg="white"
          mr="1rem"
          _focus={{ outline: "none" }}
          {...register("title")}
        />

        <Button variant="primary" type="submit" isLoading={isSubmitting}>
          Update
        </Button>
      </Box>

      <Box mt="1rem" display="flex" flexWrap="wrap" gap="10px">
        {entry?.data?.data?.tags.map(
          ({ name, _id }: { name: string; _id: string }) => (
            <Tag
              key={_id}
              fontSize="xs"
              opacity="0.7"
              borderRadius="20px"
              w="fit-content"
              bg="#00000020"
              color="#000"
            >
              {name}
            </Tag>
          )
        )}
      </Box>

      <Textarea
        mt="1rem"
        rows={14}
        border="none"
        placeholder="Start typing..."
        bg="white"
        resize="none"
        className="tiny-scrollbar"
        _focus={{ outline: "none" }}
        {...register("description")}
      />
    </Box>
  );
}

const allTags: Array<string> = [
  // emotion tags
  "happy",
  "sad",
  "angry",
  "scared",
  "confused",
  "disgusted",
  "surprised",
  "calm",
  "tired",
  "bored",
  "excited",
  "sleepy",
  "lonely",
  "hungry",
  "thirsty",
  "sick",
  "annoyed",
  "curious",
  "blessed",
  "loved",
  "indifferent",
  "horny",
  // activity tags
  "running",
  "walking",
  "cycling",
  "swimming",
  "sitting",
  "standing",
  "sleeping",
  "reading",
  "writing",
  "listening",
  "watching",
  "eating",
  "drinking",
  "working",
  "studying",
  "shopping",
  "cleaning",
  "cooking",
  // location tags
  "home",
  "office",
  "school",
  "work",
  "gym",
  "park",
  "restaurant",
  "cafe",
  "bar",
  "shop",
  "hospital",
  "bank",
  "hotel",
  "airport",
  "train",
  "bus",
  "taxi",
  "car",
  "bike",
  "truck",
  "humor",
  "dark humor",
  "light humor",
];
