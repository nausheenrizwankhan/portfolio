import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Projects from "./component/projects";
import Skill from "./component/skill";
import About from "./component/about";
export default function Home() {
  return (
    <div>
       <Hero />
        <About/>
        <Skill/>
       <Projects/>
       <Contact />
    </div>
   );
  }