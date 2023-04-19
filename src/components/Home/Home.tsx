import { FC } from "react";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div>
    <Hero/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Contact/>
  </div>
)

export default Home;