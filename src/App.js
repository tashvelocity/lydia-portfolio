import React from 'react';
import {
  Divider,
  Stack,
  Box,
  Heading
} from "@chakra-ui/react";
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Languages from './components/Languages';
import color from "./color";

function App() {

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Languages color={color} />
      <Projects color={color} />
      <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
        >
        <Divider orientation="horizontal" />
        <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
      </Stack>
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
