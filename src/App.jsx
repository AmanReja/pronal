import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Slide from "./components/Slide";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Slide></Slide>
      <About></About>

      <Resume></Resume>
      <Contact></Contact>
    </>
  );
};

export default App;
