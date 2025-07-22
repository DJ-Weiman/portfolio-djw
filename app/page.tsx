import About from "../ui/sections/About";
import Experience from "../ui/sections/Experience";
import Header from "../ui/sections/Header";
import NavBar from "../ui/components/NavBar";
import Skills from "../ui/sections/Skills";


export default function Home() {
  return (
    <main className="h-auto bg-mainBG text-slate-50">
      <NavBar />
      {/* <Header /> */}
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
