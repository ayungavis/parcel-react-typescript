import React from "react";
import { Button, ChakraProvider, VStack } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      <h1>Hello world!</h1>
      <VStack>
        <h2>Chakra UI</h2>
        <Button>Test</Button>
      </VStack>
    </ChakraProvider>
  );
};
