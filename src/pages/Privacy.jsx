import React from 'react';
import { Shield, Lock, Eye, Cookie, FileCheck } from 'lucide-react';

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
          <Shield className="w-3.5 h-3.5" />
          <span>Transparency &amp; Trust</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-stone-500">Effective Date: November 4, 2026 • Version 1.0</p>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-8 text-stone-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2 flex items-center space-x-2">
            <Lock className="w-4 h-4 text-indigo-600" />
            <span>1. Zero Personal Data Storage Architecture</span>
          </h2>
          <p>
            <strong>Daily Planner Generator</strong> is designed from the ground up as a client-side web utility. When you enter tasks, dates, headings, or notes, all processing occurs directly within your device's browser memory (via React state and HTML Canvas APIs).
          </p>
          <p className="mt-2 text-stone-600">
            We do not operate a user database, backend server storage, or registration system. Your daily agenda is never uploaded, inspected, or saved to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2 flex items-center space-x-2">
            <Cookie className="w-4 h-4 text-indigo-600" />
            <span>2. Cookies &amp; Local Storage</span>
          </h2>
          <p>
            We may use standard browser local storage (`localStorage`) solely to remember your preferred paper format (A4 or US Letter), selected theme, and your consent banner choice. These local keys remain solely on your device and can be cleared at any time through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2 flex items-center space-x-2">
            <Eye className="w-4 h-4 text-indigo-600" />
            <span>3. Third-Party Advertising &amp; Google AdSense</span>
          </h2>
          <p>
            To keep this web utility free for all users worldwide, this website is prepared for advertising partnerships, including Google AdSense.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5 text-stone-600 text-xs">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.
            </li>
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                Google Ads Settings
              </a>{' '}
              or through{' '}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                www.aboutads.info
              </a>.
            </li>
            <li>
              Advertisements are strictly confined to dedicated webpage slots and will <strong>never</strong> appear inside exported PDF or JPEG documents.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2 flex items-center space-x-2">
            <FileCheck className="w-4 h-4 text-indigo-600" />
            <span>4. GDPR &amp; CCPA Compliance</span>
          </h2>
          <p>
            Because we do not collect, process, or sell personal identifiers or user databases, user privacy rights are inherently safeguarded. For European Economic Area (EEA) and California visitors, our consent management framework respects non-personalized ad preferences where required by law.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">5. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy or our client-side architecture, please visit our Contact page or write to us at{' '}
            <span className="font-mono text-indigo-600 text-xs">privacy@dailyplannergenerator.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
