import HeroSection from "./components/HeroSection/page";
import NavBar from "./components/NavBar/page";
import AboutSection from "./components/AboutSection/page"
import ContactSection from "./components/ContactSection/page";
import FooterSection from "./components/FooterSection/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar /> 
     <div className="container mt-11 mx-auto px-12 py-4">     
        <HeroSection />
        <AboutSection />
        <ContactSection />
    </div>
    <FooterSection />
    </main>
  );
}
