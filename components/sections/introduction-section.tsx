'use client';

import { Code2, Wand2, Rocket } from 'lucide-react';

export function IntroductionSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What is CopyCoder?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            CopyCoder is an innovative AI-powered tool that bridges the gap between design and code. 
            It transforms your UI designs, mockups, and visual concepts into precise, production-ready code 
            through intelligent prompt generation for leading AI coding assistants.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Code Generation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload any design and get accurate, clean code that matches your exact specifications and follows best practices.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Wand2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seamlessly works with popular AI coding assistants like Cursor, Bolt, and v0 through optimized prompt generation.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accelerated Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reduce development time by up to 80% while maintaining high code quality and consistency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}