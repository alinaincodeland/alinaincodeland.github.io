import "./index.scss";
import "./reset.scss";
import Hero from "./components/Hero.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import ContactForm from "./components/ContactForm.js";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
      <ScrollToTop showUnder={160}>
        <span>
          <BsArrowUpCircle
            style={{
              marginRight: "2.5rem",
              width: "2.5rem",
              height: "2.5rem",
              color: "#a876f5",
            }}
          />
        </span>
      </ScrollToTop>
    </div>
  );
}
