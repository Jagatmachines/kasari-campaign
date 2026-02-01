import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { HowItWorks } from "@/app/components/HowItWorks";
import { PolicyAreas } from "@/app/components/PolicyAreas";
import { Community } from "@/app/components/Community";
import { CallToAction } from "@/app/components/CallToAction";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <HowItWorks />
      <PolicyAreas />
      {/* <Community /> */}
      <CallToAction />
      <Footer />
    </main>
  );
}
