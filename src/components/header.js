import { Box, Heading } from "@chakra-ui/react";

import { AppContainer } from "./app-container";

export function Header() {
  return (
    <Box position="sticky" as="header" backgroundColor="blue.900" py="4">
      <AppContainer>
        <Heading as="h2" fontSize="2xl" fontWeight="semibold" textColor="white">
          Product Listing Analytics
        </Heading>
      </AppContainer>
    </Box>
  );
}
