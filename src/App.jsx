import React from 'react';
import Nav from './PortfolioComponent/Home/Nav';
import About from './PortfolioComponent/AboutMe/About';
import Skills from './PortfolioComponent/Skill/Skills';
import Project from './PortfolioComponent/Projects/Project';
import Contact from './PortfolioComponent/ContactMe/Contact';



function App() {
  return (
    <div className="">
      <Nav />
       <About />
       <Skills />
       <Project />
       <Contact />
   
       
    </div>
  );
}

export default App;
