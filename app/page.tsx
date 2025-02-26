import { CursorHighlight } from "./components";
import Footer from "./components/Footer";
import { About, Contact, Experience, Hero } from "./sections";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <CursorHighlight />
      <Hero />
      <About />
      <Experience />
      {/* <Education />*/}
      <Contact />
      <Footer />
    </div>
  );
}
