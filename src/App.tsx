import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { config } from "./constants/config";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Education,
  StarsCanvas,
  Chatbot,
  Footer,
} from "./components";

const App: React.FC = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Education />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
};

export default App;
