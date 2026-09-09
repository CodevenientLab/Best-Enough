import Navbar from "./components/Navbar";
import MobileActionBar from "./components/MobileActionBar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import Pricing from "./components/Pricing";
import Packages from "./components/Packages";
import Journey from "./components/Journey";
import WhyUs from "./components/WhyUs";
import ServiceFinder from "./components/ServiceFinder";
import RealPeople from "./components/RealPeople";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <Pricing />
        <Packages />
        <Journey />
        <WhyUs />
        <ServiceFinder />
        <RealPeople />
        <TeamSection />
        <Testimonials />
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

export default App;
