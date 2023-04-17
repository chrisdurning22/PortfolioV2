import { FC, RefObject } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div>
    <Hero/>
    <Experience/>
    <Projects/>
    <Contact/>
  </div>
)

export default Home;