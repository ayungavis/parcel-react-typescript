import React from "react";
import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <VStack spacing={2}>
        <Heading>Home Page</Heading>
        <Button onClick={() => navigate("/about")}>Go to about page</Button>
      </VStack>
    </Container>
  );
};
