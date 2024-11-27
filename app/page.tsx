'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { IntroductionSection } from '@/components/sections/introduction-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { WhyCopycoderSection } from '@/components/sections/why-copycoder-section';
import { UsageGuideSection } from '@/components/sections/usage-guide-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <FeaturesSection />
      <WhyCopycoderSection />
      <UsageGuideSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
}