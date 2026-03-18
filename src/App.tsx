import PageWrapper from "./components/layout/PageWrapper";
import HeroSection from "./components/sections/HeroSection";
import ChallengeSection from "./components/sections/ChallengeSection";
import HypothesisSection from "./components/sections/HypothesisSection";
import WarehouseSection from "./components/sections/WarehouseSection";
import ZeroVsOSection from "./components/sections/ZeroVsOSection";
import ValidationSection from "./components/sections/ValidationSection";
import JourneySection from "./components/sections/JourneySection";
import TakeawaysSection from "./components/sections/TakeawaysSection";

export default function App() {
  return (
    <PageWrapper>
      <HeroSection />
      <ChallengeSection />
      <HypothesisSection />
      <WarehouseSection />
      <ZeroVsOSection />
      <ValidationSection />
      <JourneySection />
      <TakeawaysSection />
    </PageWrapper>
  );
}