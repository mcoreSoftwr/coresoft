import { RefObject, useEffect, useRef } from "react";
import { Services } from "../components/services";
import { Hero } from "../components/hero";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { Technologies } from "../components/technologies";
import { Team } from "../components/team";
import ContactForm from "../components/home/ContactForm";

export interface SectionProps {
  sectionRef: RefObject<HTMLElement>;
}

export const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

 

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollToSection = (ref:React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div  className="flex flex-col min-h-screen font-inter antialiased bg-gray-800 text-gray-200 tracking-tight justify-between">
        <Header scrollToSection={scrollToSection}
        section1Ref= {section1Ref}
        section2Ref= {section2Ref}
        section3Ref= {section3Ref}
        section4Ref= {section4Ref}
        section5Ref= {section5Ref}/>
        <Hero sectionRef={section1Ref}/>
        <Services sectionRef={section2Ref}/>
        <Technologies sectionRef={section3Ref}/>
        <Team sectionRef={section4Ref}/>
        <ContactForm sectionRef={section5Ref}/>
        <Footer />
      </div>
    </>
  );
};