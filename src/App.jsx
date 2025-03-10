import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  // Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      smoothTouch: true,
      touchMultiplier: 4,
    },
  });

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <HeroSection />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
