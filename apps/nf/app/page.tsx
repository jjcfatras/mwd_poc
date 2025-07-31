import { Center, Button as ChakraButton, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center gap={"4"} p={"1"}>
      <ChakraButton>Click Me</ChakraButton>
      <Text fontSize={"2xl"}>Hello World</Text>
    </Center>
  );
}
