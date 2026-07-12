import NoteBanner from "@/components/NoteBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NoteBanner />
      <Header />
      <main>
        <Hero />
        <Categories />
        <Packages />
        <Testimonials />
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
