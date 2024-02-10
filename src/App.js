import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
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
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
