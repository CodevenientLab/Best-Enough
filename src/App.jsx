import Navbar from "./components/Navbar";
import MobileActionBar from "./components/MobileActionBar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import Pricing from "./components/Pricing";
import Packages from "./components/Packages";
import ServiceFinder from "./components/ServiceFinder";
import RealPeople from "./components/RealPeople";
import TeamSection from "./components/TeamSection";
import Locations from "./components/Locations";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <Pricing />
        <Packages />
        <RealPeople />
        <ServiceFinder />
        <TeamSection />
        <Locations />
        <Booking />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
