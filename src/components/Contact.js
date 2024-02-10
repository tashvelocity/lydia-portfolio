import {
  Stack,
  Container,
  Box,
  HStack,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: "5vh"}}
        >
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Center>
              <HStack pt={4} spacing={4}>
                <Box _hover={{ color: `${color}.600`, stroke: "blue" }}>
                  <FaLinkedin onClick={linkedin} size={28} color="currentColor" />
                </Box>
                <Box _hover={{ color: `${color}.600`, stroke: "blue" }}>
                  <FaGithub onClick={github} size={28} color="currentColor" />
                </Box>
                <Box _hover={{ color: `${color}.600`, stroke: "blue" }}>
                  <FaEnvelope onClick={email} size={28} color="currentColor" />
                </Box>
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

