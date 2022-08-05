/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Box,
  Input,
  Button,
  Textarea,
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
  useToast,
} from "@chakra-ui/react";
import { entriesAPI } from "@utils/api";
import { useSWRConfig } from "swr";

import { swrKeys } from "@utils/swrKeys";

const schema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  tags: z.any(),
});

export default function DairyForm() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const entriesCacheKey = swrKeys.getUserEntries;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  setValue("tags", selectedTags);

  const handleSelect = (tag: any) => {
    if (selectedTags.length === 3) {
      setSelectedTags(selectedTags);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tag: any) => {
    let modifiedArr = selectedTags.filter((a) => a !== tag);
    setSelectedTags(modifiedArr);
  };

  const onSubmit = useCallback(async (data) => {
    try {
      setIsSubmitting(true);
      const result = await entriesAPI.createEntry(data);
      if (result) {
        reset();
        setSelectedTags([]);
        mutate(entriesCacheKey);
        toast({
          position: "top-right",
          duration: 4000,
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
        duration: 4000,
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
  }, []);

  return (
    <Box px={{ lg: "1rem" }} as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex">
        <Input
          placeholder="title"
          border="none"
          bg="white"
          _focus={{ outline: "none" }}
          {...register("title")}
        />

        <Select
          w="200px"
          mx="1rem"
          bg="#fff"
          border="none"
          placeholder="tag"
          onChange={(e: any) => handleSelect(e.target.value)}
        >
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </Select>

        <Button variant="primary" type="submit" isLoading={isSubmitting}>
          Save
        </Button>
      </Box>

      <Box
        mt="1rem"
        display="flex"
        flexWrap="nowrap"
        gap="10px"
        overflowX="auto"
      >
        {selectedTags.map((tag) => (
          <Tag
            bg="black"
            color="#fff"
            px="10px"
            py="4px"
            key={tag}
            w="fit-content"
          >
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => handleRemoveTag(tag)} />
          </Tag>
        ))}
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
