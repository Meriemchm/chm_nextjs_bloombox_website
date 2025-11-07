import { Hero } from "@/components/hero/hero";
import { HowItWorks } from "@/components/how-it-works/how-it-works";
import { Membership } from "@/components/membership/membership";
import { Container } from "@/components/ui/container";
import { WhySection } from "@/components/why-section/why-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary">
        <Container className="py-30">
          <Hero />
        </Container>
      </div>
      <div className="bg-secondary">
        <Container className="py-30">
          <HowItWorks />
        </Container>
      </div>
      <div className="bg-thirdary">
        <Container className="py-30">
          <WhySection />
        </Container>
      </div>
      <Membership />
    </div>
  );
}
