import { ReactNode } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
interface LayoutProps {
  children: ReactNode;
}
import dynamic from "next/dynamic";
const [DashboardHeader, DashboardSidebar] = [
  dynamic(() => import("./DashboardHeader")),
  dynamic(() => import("./DashboardSidebar")),
];

export default function DashboardLayout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", xl: "230px 1fr" }}
      >
        <Box display={{ sm: "none", xl: "block" }}>
          <DashboardSidebar />
        </Box>

        <Box bg="#F7F7F7">
          <DashboardHeader onOpen={onOpen} />
          <Box
            maxWidth="1500px"
            px={{ base: "1.2rem", lg: "4rem" }}
            pt={{ base: "2rem", lg: "4rem" }}
          >
            {children}
          </Box>
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#19191a">
          <DrawerBody py="0px">
            <DashboardSidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
