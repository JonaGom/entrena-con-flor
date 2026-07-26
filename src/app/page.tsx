import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import WhyTrain from "@/components/WhyTrain";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

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
          <About />
        </Reveal>
        <Reveal>
          <CtaBanner />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
