import React from "react";
import { Button, ChakraProvider, HStack, VStack } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      <VStack>
        <h2>Chakra UI</h2>
        <HStack spacing={2}>
          <Button variant="ghost">Ghost</Button>
          <Button>Primary</Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};
