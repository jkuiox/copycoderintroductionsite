'use client';

import { StepCard } from '@/components/ui/step-card';

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">How to Use with Cursor</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            number="1"
            title="Upload Design"
            description="Upload your UI design or mockup to CopyCoder"
          />
          <StepCard
            number="2"
            title="Generate Prompt"
            description="Get an optimized prompt specifically for Cursor"
          />
          <StepCard
            number="3"
            title="Code Generation"
            description="Paste the prompt in Cursor and watch your code come to life"
          />
        </div>
      </div>
    </section>
  );
}