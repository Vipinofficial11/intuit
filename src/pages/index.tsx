import { Inter } from "next/font/google";
import { Hero } from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { LayoutGrids } from "./Components/ImageLayout";
import PriceCards from "./Components/PriceCards";
import { Footer } from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <LayoutGrids />
      <PriceCards />
      <Footer />
    </div>
  );
}
