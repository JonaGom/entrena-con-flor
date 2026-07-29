import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// "Sobre Flor" y "Contacto" pasaron a ser páginas propias (/sobre-flor,
// /contacto) en vez de secciones del inicio — el link del menú abre esas
// páginas en una pestaña nueva (ver Header.tsx). Las secciones "Por qué
// entrenar" (WhyTrain) y "Lo que dicen" (Testimonials) se sacaron del
// inicio a pedido de Jonathan.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Categories />
        </Reveal>
        <Benefits />
        <Reveal>
          <CtaBanner />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
