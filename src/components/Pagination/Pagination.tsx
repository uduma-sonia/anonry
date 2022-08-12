import { Box, IconButton, Tag } from "@chakra-ui/react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

interface PaginationProps {
  totalPages: number;
  currentUrl: string;
  currentPage: any;
}

export default function Pagination({
  currentPage,
  currentUrl,
  totalPages,
}: PaginationProps) {
  const router = useRouter();

  const handlePagination = (val: number) => {
    router.push(
      {
        pathname: currentUrl,
        query: { page: val },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box display="flex" justifyContent="center" gap="1px" mt="2rem">
      <IconButton
        aria-label=""
        icon={<FaChevronLeft />}
        _focus={{ outline: "none" }}
        _hover={{ bg: "none", color: "black", border: "1px solid gray" }}
        bg="black"
        size="sm"
        boxSize="35px"
        color="white"
        borderRadius={0}
        transition="all 0.5s"
        onClick={() => handlePagination(Number(currentPage) - 1)}
        disabled={Number(currentPage) === 1}
      />

      <Tag
        bg="black"
        borderRadius={0}
        color="white"
        boxSize="35px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {currentPage}
      </Tag>

      <IconButton
        aria-label=""
        icon={<FaChevronRight />}
        boxSize="35px"
        _focus={{ outline: "none" }}
        _hover={{ bg: "none", color: "black", border: "1px solid gray" }}
        bg="black"
        size="sm"
        color="white"
        borderRadius={0}
        transition="all 0.5s"
        onClick={() => handlePagination(Number(currentPage) + 1)}
        disabled={totalPages === Number(currentPage)}
      />
    </Box>
  );
}
