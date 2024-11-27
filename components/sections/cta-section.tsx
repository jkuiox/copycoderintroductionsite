'use client';

import { Zap } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Supercharge Your Development?
        </h2>
        <Link
          href="https://copycoder.ai"
          className="inline-flex items-center px-8 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started <Zap className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}