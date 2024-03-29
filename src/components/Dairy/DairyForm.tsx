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
} from "@chakra-ui/react";
import { entriesAPI } from "@utils/api";
import { useSWRConfig } from "swr";
import { useTags } from "@utils/hooks/useTags";
import { swrKeys } from "@utils/swrKeys";
import { successToast, errorToast } from "@lib/toast";

const schema = z.object({
  title: z.string().min(1).max(100).trim(),
  description: z.string().min(1).max(1000).trim(),
  tags: z.any(),
});

export default function DairyForm() {
  const { data: tags } = useTags();
  const { mutate } = useSWRConfig();
  const entriesCacheKey = swrKeys.getUserEntries;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setValue, reset } = useForm({
    resolver: zodResolver(schema),
  });
  setValue("tags", selectedTags);

  const handleSelect = (tag: any) => {
    if (selectedTags.length === 5) {
      setSelectedTags(selectedTags);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tag: any) => {
    let modifiedArr = selectedTags.filter((a) => a !== tag);
    setSelectedTags(modifiedArr);
  };

  const onSubmit = useCallback(
    async (data) => {
      try {
        setIsSubmitting(true);
        const result = await entriesAPI.createEntry(data);
        if (result) {
          reset();
          setSelectedTags([]);
          mutate(entriesCacheKey);
          successToast({ message: result?.data?.message });
        }
      } catch (err: any) {
        errorToast({ message: err ?? "An error occured, Try again" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [entriesCacheKey, mutate, reset]
  );

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
          _focus={{ outline: "none" }}
          border="none"
          placeholder="tag"
          onChange={(e: any) => handleSelect(e.target.value)}
        >
          {tags?.data?.data?.map((tag: any) => (
            <option key={tag._id} value={tag.name}>
              {tag.name}
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
