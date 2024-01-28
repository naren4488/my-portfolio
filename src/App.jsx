import Hero from "./pages/home/section/Hero";
import About from "./pages/home/section/About";
import Project from "./pages/home/section/Project";
import Skills from "./pages/home/section/Skills";
import Experience from "./pages/home/section/Experience";
import Contact from "./pages/home/section/Contact";
import Header from "./components/Header";
import Footer from "./pages/home/section/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 1320, left: 0 });
  }, [pathname]);
  return (
    <div className="font-sans font-light tracking-wide">
      <Header />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
