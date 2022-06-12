import { Box } from "@chakra-ui/react";
import DefaultHeader from "./DefaultHeader";
import { ReactNode, useState } from "react";
interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <DefaultHeader />

      <Box bgColor="#FAFAFB" minH="calc(100vh - 70px)">
        <Box maxW={"min(100%,1920px)"} mx="auto">
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
