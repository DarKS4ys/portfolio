import About from "@/components/About";
import Cards from "@/components/Cards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Cards />
      <Projects />
      <Skills />
      {/* <Experience /> */}
      <Contact />
    </main>
  )
}
