'use client';

import Image from 'next/image';

export function UsageGuideSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">How to Use CopyCoder</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started with CopyCoder in three simple steps
          </p>
        </div>

        <div className="space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">1. Upload Your Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Simply drag and drop your UI design file, mockup, or screenshot into CopyCoder. 
                Supported formats include PNG, JPG, Figma links, and more.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Supports multiple file formats</li>
                <li>✓ Automatic design analysis</li>
                <li>✓ Instant processing</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <Image
                src="https://images.unsplash.com/photo-1618788372246-79faff0c3742"
                alt="Upload design interface"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <Image
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
                alt="AI prompt generation"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">2. Generate AI Prompts</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                CopyCoder analyzes your design and generates optimized prompts specifically for your 
                chosen AI coding assistant (Cursor, Bolt, or v0).
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Tool-specific optimization</li>
                <li>✓ Context-aware prompts</li>
                <li>✓ Best practices included</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">3. Generate Code</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Copy the generated prompt into your AI coding assistant and watch as it transforms 
                into production-ready code that matches your design perfectly.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Clean, maintainable code</li>
                <li>✓ Framework-specific output</li>
                <li>✓ Ready for production</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Code generation result"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}