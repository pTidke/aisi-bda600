import Hero from "@/components/Hero/Hero";
import Methodology from "@/components/Methodology/Methodology";
import Datasets from "@/components/Datasets/Datasets";
import VideoSection from "@/components/VideoSection/VideoSection";
import CTA from "@/components/CTA/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Methodology />
      <Datasets />
      <VideoSection />
      <CTA />
    </main>
  );
}
