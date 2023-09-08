import React from "react";
import { Box } from "@chakra-ui/react";

export function AppContainer({ children }) {
  return (
    <Box as="div" className="container" w="90%" mx="auto">
      {children}
    </Box>
  );
}
