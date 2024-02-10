import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import LanguagesArray from "./LanguagesArray";

export default function Languages({ color }) {
    const languages = LanguagesArray();     
  return (
    <>
      <Container maxW={"3xl"} id="languages">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          pb={{ base: 20, md: 20 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Languages</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <SimpleGrid columns={[1, 2]} px={4} spacing={4}>
            {languages
              .map((language) => (
                <Fade bottom>
                  <Card key={language.name}>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm">{language.name}</Heading>

                        <Text fontSize="sm" py={2} whiteSpace="pre-line">
                          {language.description}
                        </Text>
                        <br />
                        <Text fontSize="sm" py={2} whiteSpace="pre-line">
                          {language.listDesc}
                        </Text>
                        <UnorderedList>
                          {language.list.map((list) => (
                            <ListItem
                            >
                              {list.text}
                            </ListItem>
                          ))}
                        </UnorderedList>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
