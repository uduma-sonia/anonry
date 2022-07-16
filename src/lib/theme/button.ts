import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      py: "0.5rem",
      px: "clamp(1.25rem, 1vw + 0.5rem, 1.5rem)",
      minWidth: "unset",
      bgColor: "#000000",
      borderColor: "#000000",
      borderWidth: "2px",
      color: "white",
      height: "unset",
      fontWeight: "normal",
      fontSize: "sm",
      _hover: { bgColor: "brand.500" },
    },
  },
};
