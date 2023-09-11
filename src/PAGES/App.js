import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Links from "./Links";
import Skills from "./Skills";
import Contact from "./Contact";
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Links />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
