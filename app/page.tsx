import About from "@/components/About";
import Container from "@/components/Container";
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Container  > */}
      <LandingSection />
      <About />
      <Services />
      {/* </Container> */}
    </main>
  );
}
