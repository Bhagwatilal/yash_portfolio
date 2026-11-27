import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Highlights from "../components/Highlights";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Certifications />
      <Experience />
      <Highlights />
      <Contact />
      <Footer />
    </>
  );
};
export default Index;
