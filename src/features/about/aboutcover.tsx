// AboutUs.tsx (Main Component)
import React from "react";
import TeamSection from "./components/TeamSection";
import MissionSection from "./components/MissionSection";
import VisionSection from "./components/VisionSection";
import HistorySection from "./components/HistorySection";
import CoreValuesSection from "./components/CoreValuesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import JoinOurTeamSection from "./components/JoinOurTeamSection";
import ContactUsSection from "./components/ContactUsSection";
import FAQSection from "./components/FAQSection";

const Aboutcover: React.FC = () => {
  return (
    <section>
      <MissionSection />
      <TeamSection />
      <VisionSection />
      <HistorySection />
      <CoreValuesSection />
      <TestimonialsSection />
      <JoinOurTeamSection />
      <ContactUsSection />
      <FAQSection />
    </section>
  );
};

export default Aboutcover;
