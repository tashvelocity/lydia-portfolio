import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
      <Text>© 2024 Lydia Welham. Template by <Link href='https://github.com/eldoraboo/portable-portfolio' isExternal> Eldora Boo <ExternalLinkIcon mx='2px' /></Link></Text>
      </Container>
    </Box>
  );
}
