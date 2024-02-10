import {
  Box,
  Heading,
  Container,
  Image,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Contact from './Contact';
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
          spacing={{ base: "2vh" }}
          pt={{ base: "20vh" }}
        >
          <Stack
            direction={"column"}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Image
              borderRadius='full'
              boxSize='xs'
              src='assets/avatar.png'
              alt='Lydia Welham'
            />
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              {profile.headerName} <br />
            </Heading>
            <Heading
              fontWeight={600}
              fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
              lineHeight={"110%"}
              color={`${color}.400`}
            >
            {profile.headerRole} <br />
            </Heading>
            <Contact color={color} />
          </Stack>
          
          <Stack
            direction={"column"}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
            pt={{ base: "5vh" }}
          >
            <Button
              color={useColorModeValue("gray.800", "gray.300")}
              bg={useColorModeValue("gray.300", "gray.600")}
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
