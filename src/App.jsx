import React, { useState } from 'react';
import { Header } from './components/Header';
import { ConsentBanner } from './components/ConsentBanner';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { Calendar, Heart } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About onNavigateToPlanner={() => handleNavigate('home')} />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage={activePage} onNavigate={handleNavigate} />

      <main className="flex-1">{renderPage()}</main>

      {/* Footer */}
      <footer className="no-export bg-white border-t border-stone-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-600">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="font-serif font-bold text-stone-900 text-sm">
                  Daily Planner Generator
                </span>
              </div>
              <p className="text-stone-500 leading-relaxed">
                A free, privacy-first, browser-based printable daily planner
                studio with 35+ culturally respectful festival and seasonal
                themes.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-semibold text-stone-900 mb-2 uppercase tracking-wider text-[11px]">
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {[
                  { id: 'home', label: 'Planner Studio' },
                  { id: 'about', label: 'About Us' },
                  { id: 'contact', label: 'Contact & Theme Requests' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigate(link.id)}
                      className="text-stone-500 hover:text-indigo-600 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-semibold text-stone-900 mb-2 uppercase tracking-wider text-[11px]">
                Legal &amp; Policies
              </h4>
              <ul className="space-y-1.5">
                {[
                  { id: 'privacy', label: 'Privacy Policy' },
                  { id: 'terms', label: 'Terms of Use' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigate(link.id)}
                      className="text-stone-500 hover:text-indigo-600 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-6 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400">
            <p>
              &copy; {new Date().getFullYear()} Daily Planner Generator. Free
              for personal, educational &amp; community use.
            </p>
            <p className="flex items-center space-x-1 mt-1 sm:mt-0">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
              <span>for mindful planning worldwide</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie / Consent Banner */}
      <ConsentBanner onNavigateToPrivacy={() => handleNavigate('privacy')} />
    </div>
  );
}
