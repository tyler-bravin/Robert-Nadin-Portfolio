import { C } from "./theme.js";
import Nav from "./components/Nav.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Grain from "./components/Grain.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: C.bg, color: C.text, fontFamily: "'Inter', sans-serif" }}>
      <Grain />
      <Nav />
      <ScrollProgress />
      <Hero />
      <Stats />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
