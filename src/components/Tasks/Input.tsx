import {
  Box,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown, BsFillAlarmFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

export default function InputField() {
  const onFocusInput = (e: any) => (e.currentTarget.type = "date");
  const onBlurInput = (e: any) => (e.currentTarget.type = "text");

  return (
    <Box
      display="flex"
      //  position="sticky" top="0px"
      position="relative"
      zIndex="9"
    >
      <Input
        border="1px solid"
        borderColor="gray.300"
        borderRightRadius="0px"
        _focus={{ outline: "none" }}
        _active={{ bg: "none" }}
        _hover={{ bg: "none" }}
        bg="none"
        placeholder="Add a task"
        fontSize="sm"
      />

      <Menu closeOnSelect={false}>
        <MenuButton border="1px" borderColor="gray.300" padding="0px 10px">
          <BsChevronDown size="1.2rem" />
        </MenuButton>
        <MenuList background="white" minWidth="fit-content" paddingX="1rem">
          {/* <MenuItem>
            <Input
              placeholder="Add due date"
              type="text"
              fontSize="sm"
              color="gray.600"
              _placeholder={{ color: "#222", opacity: "1" }}
              onFocus={onFocusInput}
              onBlur={onBlurInput}
              border="none"
              width="130px"
              _focus={{ outline: "none" }}
              _active={{ bg: "none" }}
              _hover={{ bg: "none" }}
              paddingX="0px"
            />
          </MenuItem> */}
          <MenuItem
            fontSize="sm"
            color="#222"
            height="40px"
            _focus={{ backgroundColor: "none" }}
          >
            Add due date
          </MenuItem>
          <MenuItem
            fontSize="sm"
            color="#222"
            height="40px"
            _focus={{ backgroundColor: "none" }}
          >
            Add Reminder
          </MenuItem>
        </MenuList>
      </Menu>
      <Button
        borderLeftRadius="0px"
        fontSize="xs"
        width="50px"
        variant="primary"
      >
        Add
      </Button>
    </Box>
  );
}
