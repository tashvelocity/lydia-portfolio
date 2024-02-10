import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Header({ color }) {
  const profile = ProfileArray();
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>
      <Container maxW={"3xl"} minHeight="100vh" id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 0, md: "25vh" }}
          pt={{ base: 0, md: "25vh" }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {profile.headerName} <br />
            <Text as={"span"} color={`${color}.400`}>
              {profile.headerRole}
            </Text>
          </Heading>
          <Text
            color={useColorModeValue("gray.800", "gray.300")}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            {profile.headerDesc}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
              <Button
              color={useColorModeValue("gray.800", "gray.300")}
              bg={useColorModeValue("gray.300", "gray.600")}
              mt="15vh"
              rounded={"full"}
              px={6}
              _hover={{
                bg: `${color}.500`,
              }}
              onClick={scrollToAbout}
            >
              <ChevronDownIcon boxSize={50} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
