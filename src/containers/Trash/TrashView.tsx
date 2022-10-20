import React, { useState } from "react";
import { Box, Stack, Skeleton, Button, useToast, Text } from "@chakra-ui/react";
import { trashAPI } from "@utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import { swrKeys } from "@utils/swrKeys";
import dynamic from "next/dynamic";
import { useSWRConfig } from "swr";
import Pagination from "@components/Pagination/Pagination";

const [TrashCard] = [dynamic(() => import("@components/Trash/TrashCard"))];

export default function TrashView() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const toast = useToast();
  const [selectedNote, setSelectedNote] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const handlePagination = (val: any) => setPageNum(val);

  const { data: trash, error } = useSWR(
    router.isReady && swrKeys.getUserTrash({ page: pageNum }),
    async () => trashAPI.getUserTrash({ page: pageNum }),
    {
      revalidateOnMount: true,
    }
  );

  const handleSelect = (id: string) => {
    setSelectedNote((prev: any) => {
      const isInArr = prev.find((item: any) => item === id);

      if (isInArr) {
        return prev.filter((a: any) => a !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleRestore = async () => {
    try {
      setIsLoading(true);

      const data = {
        trash: selectedNote,
      };

      const result = await trashAPI.restoreTrash(data);
      if (result) {
        setSelectedNote([]);
        mutate(swrKeys.getUserTrash({ page: pageNum }));
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
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsSubmitting(true);

      const removeBracket = selectedNote.join(",");

      const result = await trashAPI.deletePermanently(removeBracket);
      if (result) {
        setSelectedNote([]);
        mutate(swrKeys.getUserTrash({ page: pageNum }));
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
  };

  return (
    <>
      <Stack flexDir="row" mb="2rem" spacing={0} gap="2rem">
        <Button
          variant="primary"
          isDisabled={selectedNote.length === 0}
          _focus={{ outline: "none" }}
          onClick={handleDelete}
          isLoading={isSubmitting}
        >
          Delete
        </Button>

        <Button
          variant="primary"
          onClick={handleRestore}
          type="button"
          isLoading={isLoading}
          isDisabled={selectedNote.length === 0}
          _focus={{ outline: "none" }}
        >
          Recover
        </Button>
      </Stack>

      <Box pb="100px" maxW="500px">
        {!error && !trash && (
          <>
            <Stack
              bg="white"
              border="1px solid #d7d7d7"
              borderRadius="10px"
              p="20px"
              mb="20px"
              position="relative"
              boxShadow="sm"
            >
              <Skeleton height="10px" w="80%" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
            </Stack>

            <Stack
              mt="3rem"
              bg="white"
              border="1px solid #d7d7d7"
              borderRadius="10px"
              p="20px"
              mb="20px"
              position="relative"
              boxShadow="sm"
            >
              <Skeleton height="10px" w="80%" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
            </Stack>
          </>
        )}

        {!error && trash?.data?.data?.trash?.length === 0 && (
          <Text fontWeight={500} textAlign="center" mt="4rem">
            Trash Empty
          </Text>
        )}

        <Stack spacing={0} gap="20px">
          {trash?.data?.data?.trash?.map((item: any) => {
            return (
              <React.Fragment key={item._id}>
                <TrashCard data={item} handleSelect={handleSelect} />
              </React.Fragment>
            );
          })}
        </Stack>

        {trash?.data?.data?.pageInfo?.totalPages > 1 && (
          <>
            {trash?.data?.data?.trash &&
              trash?.data?.data?.trash?.length > 0 && (
                <Pagination
                  currentPage={pageNum}
                  totalPages={trash?.data?.data?.pageInfo?.totalPages}
                  handlePagination={handlePagination}
                />
              )}
          </>
        )}
      </Box>
    </>
  );
}
