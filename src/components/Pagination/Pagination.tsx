import { Box, IconButton, Tag } from "@chakra-ui/react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  totalPages: number;
  currentPage: any;
  handlePagination: any;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePagination,
}: PaginationProps) {
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
