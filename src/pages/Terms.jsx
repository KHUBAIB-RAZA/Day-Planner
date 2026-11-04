import React from 'react';
import { FileText, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
          <Scale className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Terms of Use
        </h1>
        <p className="text-xs text-stone-500">Last Revised: November 4, 2026</p>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-8 text-stone-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using <strong>Daily Planner Generator</strong>, you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not use the utility.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">2. Permitted Use &amp; Print Rights</h2>
          <p>
            You are granted a worldwide, royalty-free, perpetual license to generate, download, print, and distribute planners created using this service for:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-stone-600">
            <li>Personal daily organization and family schedules.</li>
            <li>Classroom, educational, religious, and non-profit community gatherings.</li>
            <li>Physical paper prints in homes, offices, or study spaces.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">3. Prohibited Conduct</h2>
          <p>
            You agree not to attempt to reverse engineer the web application bundle, attack server hosting endpoints, scrape or redistribute raw theme source code as standalone digital templates for commercial sale without permission.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">4. Disclaimer of Warranties</h2>
          <p className="text-stone-600 text-xs">
            The service is provided on an "AS IS" and "AS AVAILABLE" basis. While we strive for flawless 300 DPI exports and high reliability, we make no guarantees that the application will be uninterrupted or error-free on every browser configuration.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">5. Modifications</h2>
          <p>
            We reserve the right to modify or discontinue features of the application at any time without notice. Updates to these terms will be reflected with a revised date on this page.
          </p>
        </section>
      </div>
    </div>
  );
}
