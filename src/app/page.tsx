import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import WhyTrain from "@/components/WhyTrain";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// "Sobre Flor" y "Contacto" pasaron a ser páginas propias (/sobre-flor,
// /contacto) en vez de secciones del inicio — el link del menú abre esas
// páginas en una pestaña nueva (ver Header.tsx).
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Reveal>
          <Categories />
        </Reveal>
        <Reveal>
          <WhyTrain />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <CtaBanner />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
