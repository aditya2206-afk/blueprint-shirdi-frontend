import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Collection from "@/components/Collection/Collection";
import Stats from "@/components/Stats/Stats";
import FilmSection from "@/components/FilmSection/FilmSection";
import ShirdiLegacy from "@/components/ShirdiLegacy/ShirdiLegacy";
import Investment from "@/components/Investment/Investment";
import VillaOwnership from "@/components/VillaOwnership/VillaOwnership";
import ManagedHospitality from "@/components/ManagedHospitality/ManagedHospitality";
import OwnershipComparison from "@/components/OwnershipComparison/OwnershipComparison";
import OwnershipProcess from "@/components/OwnershipProcess/OwnershipProcess";
import BalineseRetreat from "@/components/BalineseRetreat/BalineseRetreat";
import Amenities from "@/components/Amenities/Amenities";
import Gallery from "@/components/Gallery/Gallery";
import ProjectPromise from "@/components/ProjectPromise/ProjectPromise";
import Developer from "@/components/Developer/Developer";
import Testimonials from "@/components/Testimonials/Testimonials";
import Location from "@/components/Location/Location";
import InvitationCTA from "@/components/InvitationCTA/InvitationCTA";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collection />
        <Stats />
        <FilmSection />
        <ShirdiLegacy />
        <Investment />
        <VillaOwnership />
        <ManagedHospitality />
        <OwnershipComparison />
        <OwnershipProcess />
        <BalineseRetreat />
        <Amenities />
        <Gallery />
        <ProjectPromise />
        <Developer />
        <Testimonials />
        <Location />
        <InvitationCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
