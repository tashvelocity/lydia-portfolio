import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState } from "react";
import LanguagesArray from "./LanguagesArray";
import TagsArray from "./TagsArray";

export default function Languages({ color }) {
    const languages = LanguagesArray();
    const options = TagsArray("LanguagesTags");
    
    const [selected, setSelected] = useState("All");

    const handleSelected = (value) => {
      setSelected(value);
    };
    
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
              .filter((language) => {
                if (selected === "All") {
                  return true;
                } else {
                  return language.tags.includes(selected);
                }
              })
              .map((language) => (
                <Fade bottom>
                  <Card key={language.name}>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm">{language.name}</Heading>

                        <Text fontSize="sm" py={2} whiteSpace="pre-line">
                          {language.description}
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
