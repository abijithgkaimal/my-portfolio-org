import React from 'react';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
// import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="w-full min-h-screen bg-black font-sans select-none scroll-smooth">
      <Hero />
      <About />
      <Projects />
      {/* <Services /> */}
      <Contact />
    </div>
  );
}

export default App;
