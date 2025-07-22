import Applications from "@/components/Applications";
import Benefits from "@/components/Benefits";
import CellLightPowers from "@/components/CellLightPowers";
import { Footer } from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="lg:hidden">
        <Navbar />
      </div>
      <Hero />
      <Applications />
      <Product />
      <Benefits />
      <CellLightPowers />
      <Footer />
    </div>
  );
}
