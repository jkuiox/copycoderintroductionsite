'use client';

import { Brain, Clock, Code, Shield } from 'lucide-react';

export function WhyCopycoderSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose CopyCoder?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            CopyCoder revolutionizes the development process by bridging the gap between design and implementation,
            making AI-assisted coding more efficient than ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">AI-Powered Intelligence</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced algorithms analyze your designs and generate optimal prompts that produce accurate, 
              production-ready code through AI coding assistants.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Time Efficiency</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Reduce development time by up to 80% while maintaining high code quality. 
              Transform designs into working code in minutes instead of hours.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Code Quality</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Generate clean, maintainable code that follows best practices and industry standards.
              Perfect for production environments.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Reliable & Secure</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Enterprise-grade security with your data privacy in mind. 
              Consistent results you can rely on for your development needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}