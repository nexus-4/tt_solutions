// components
import { Navbar, Footer } from "@/components";

// sections
import Start from "./home";
import About from "./about";
import Solutions from "./solutions";
import MuralPrecos from "./whyMP";
import Companies from "./companies";
import Numbers from "./numbers";


export default function Campaign() {
  return (
    <>
      <Navbar />
      <Start />
      <About/>
      <Solutions />
      <MuralPrecos />
      <Numbers />
      <Companies />
      <Footer />
    </>
  );
}
