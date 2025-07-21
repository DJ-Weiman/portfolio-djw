import About from "./ui/components/About";
import Experience from "./ui/components/Experience";
import Header from "./ui/components/Header";
import NavBar from "./ui/components/NavBar";
import Skills from "./ui/components/Skills";


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
