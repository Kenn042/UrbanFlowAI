import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Technology from "@/components/sections/Technology";
import HowItWorks from "@/components/sections/HowItWorks";
import EcoFlow from "@/components/sections/EcoFlow";
import Impact from "@/components/sections/Impact";
import Pilot from "@/components/sections/Pilot";
import InteractiveDemo from "@/components/sections/InteractiveDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden pt-20">
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <HowItWorks />
      <EcoFlow />
      <Impact />
      <InteractiveDemo />
      <Pilot />
    </main>
  );
}
