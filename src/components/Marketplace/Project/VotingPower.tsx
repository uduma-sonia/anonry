import React from "react";
import {
  Box,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function VotingPower() {
  const data = {
    labels: ["Voting", "Voting", "Voting", "Voting", "Voting"],
    datasets: [
      {
        label: "# of Votes",
        data: [400, 300, 200, 100, 50],
        backgroundColor: [
          "#408AFD",
          "#70CF98",
          "#A36AFF",
          "#B1C3F1",
          "#7FD3EE",
        ],
        borderColor: ["#408AFD", "#70CF98", "#A36AFF", "#B1C3F1", "#7FD3EE"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box
      outline="1px solid #E2E2EA"
      borderRadius="2xl"
      bg="white"
      position="relative"
      py="1.8rem"
      px="1.4rem"
    >
      <HStack mb=".51rem" justifyContent="space-between" alignItems="center">
        <Text color="text.gray" fontWeight="medium" fontSize="md" w="50%">
          Voting Power Distribution
        </Text>

        <Box w="50%">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BiChevronDown size="1.5rem" />}
              bgColor="transparent"
              borderRadius="20px"
              border="1px solid #717579"
              _focus={{ outline: "none" }}
              _hover={{ bgColor: "transparent" }}
              _active={{ bgColor: "transparent" }}
              h="33px"
              fontWeight="normal"
              fontSize="xs"
              color="text.secondary"
            >
              March 2022
            </MenuButton>
            <MenuList fontWeight="normal" fontSize="xs" color="text.secondary">
              <MenuItem>January 2022</MenuItem>
              <MenuItem>February 2022</MenuItem>
              <MenuItem>March 2022</MenuItem>
              <MenuItem>April 2022</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>

      <HStack>
        <Box w="50%">
          <Doughnut data={data} options={options} />
        </Box>

        <Box w="50%">
          <List spacing={1} fontSize="12px" color="#1D2129">
            <ListItem d="flex" alignItems="center">
              <GoPrimitiveDot color="#408AFD" fontSize="1.5rem" />
              400 Voting Points
            </ListItem>
            <ListItem d="flex" alignItems="center">
              <GoPrimitiveDot color="#70CF98" fontSize="1.5rem" />
              300 Voting Points
            </ListItem>
            <ListItem d="flex" alignItems="center">
              <GoPrimitiveDot color="#A36AFF" fontSize="1.5rem" />
              200 Voting Points
            </ListItem>
            <ListItem d="flex" alignItems="center">
              <GoPrimitiveDot color="#B1C3F1" fontSize="1.5rem" />
              100 Voting Points
            </ListItem>
            <ListItem d="flex" alignItems="center">
              <GoPrimitiveDot color="#7FD3EE" fontSize="1.5rem" />
              50 Voting Points
            </ListItem>
          </List>
        </Box>
      </HStack>
    </Box>
  );
}

export default VotingPower;
