import "./index.scss";
import "./reset.scss";
import "./index.css";
import { lazy, Suspense } from "react";
import Hero from "./components/Hero.js";
import ContactForm from "./components/ContactForm.js";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline.js";

const Skills = lazy(() => import("./components/Skills.js"));
const Projects = lazy(() => import("./components/Projects.js"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
      <Suspense fallback={<ContactForm />}>
        <Skills />
        <Projects />
      </Suspense>
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
    </>
  );
}
