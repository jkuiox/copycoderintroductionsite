'use client';

import { Image, Terminal, Sparkles } from 'lucide-react';
import { FeatureCard } from '@/components/ui/feature-card';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Image className="h-8 w-8" />}
            title="Image to Code"
            description="Upload UI mockups or designs and get accurate code implementations instantly"
          />
          <FeatureCard
            icon={<Terminal className="h-8 w-8" />}
            title="Smart Prompts"
            description="Generate optimized prompts for popular AI coding assistants"
          />
          <FeatureCard
            icon={<Sparkles className="h-8 w-8" />}
            title="Multi-Tool Support"
            description="Works seamlessly with Cursor, Bolt, v0, and other AI coding tools"
          />
        </div>
      </div>
    </section>
  );
}