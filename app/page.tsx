"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Education from "../components/education";
import Contact from "../components/contact";
import SplashScreen from "../components/splash-screen";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || showSplash) {
    return (
      <SplashScreen
        visibleMs={2800}
        fadeMs={1800}
        onFinish={() => setShowSplash(false)}
      />
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

