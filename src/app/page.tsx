import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeedYourBrain } from "@/components/sections/FeedYourBrain";
import { AvoHelper } from "@/components/sections/AvoHelper";
import { CozyLoop } from "@/components/sections/CozyLoop";
import { SmartAndSocial } from "@/components/sections/SmartAndSocial";
import { Reviews } from "@/components/sections/Reviews";
import { WaitingList } from "@/components/sections/WaitingList";
import { StickyFooter } from "@/components/StickyFooter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeedYourBrain />
        <AvoHelper />
        <CozyLoop />
        <SmartAndSocial />
        <WaitingList />
      </main>
      <Footer />
      <StickyFooter />
    </>
  );
}
