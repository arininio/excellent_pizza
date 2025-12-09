import Hero from "@/components/Hero";
import MenuImageGrid from "@/components/MenuImageGrid";
import OurStory from "@/components/OurStory";
import { FindUsSection } from "@/components/FindUsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MenuImageGrid />
      <OurStory />
      <FindUsSection />
    </>
  );
}
