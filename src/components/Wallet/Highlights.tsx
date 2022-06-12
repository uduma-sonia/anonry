import { Box, Text } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Highlights() {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Sept",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Oct",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Box mt="3rem">
      <Text color="#0D0138" fontWeight="medium" fontSize="lg">
        Money Highlights
      </Text>

      <Box
        border="1px solid #D7D7D7"
        bgColor="#ffffff"
        p="1.2rem"
        borderRadius="10px"
        h="400px"
        mt="1.2rem"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            // width={500}
            // height={300}
            data={data}
            margin={
              {
                // top: 5,
                // right: 30,
                // left: 20,
                // bottom: 5,
              }
            }
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#FF8A65"
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#00A15D"
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
