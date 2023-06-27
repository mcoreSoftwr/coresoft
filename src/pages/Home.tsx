import { useEffect } from "react";
import { Features } from "../components/features";
import { Hero } from "../components/hero";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";
import { Testimonials } from "../components/testimonials";
import { Zigzag } from "../components/zigzag";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div  className="flex flex-col min-h-screen justify-between">
        <Header />
        <Hero />
        <Features />
        <Zigzag />
        <Testimonials />
        <main className="flex-grow">
        </main>
        <Footer />
      </div>
    </>
  );
};