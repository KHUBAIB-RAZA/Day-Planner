import React from 'react';
import { Calendar, Shield, Sparkles, Heart, Printer, CheckCircle } from 'lucide-react';

export function About({ onNavigateToPlanner }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Hero header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Independent Web Utility</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
          About Daily Planner Generator
        </h1>
        <p className="text-base text-stone-600 max-w-2xl mx-auto">
          A modern, privacy-first printable planner studio designed to celebrate culture, festivals, and mindful daily focus.
        </p>
      </div>

      <div className="space-y-8 text-stone-700 text-sm leading-relaxed">
        {/* Core Mission */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold text-stone-900 mb-3 flex items-center space-x-2">
            <Heart className="w-5 h-5 text-rose-500" />
            <span>Our Mission</span>
          </h2>
          <p className="mb-3">
            <strong>Daily Planner Generator</strong> was created with a simple purpose: to give individuals, families, students, and professionals a delightful, free, and distraction-free tool to organize their daily schedule.
          </p>
          <p>
            Unlike complicated subscription project managers or bulky mobile apps that require sign-ins and track personal routines, our generator works 100% inside your web browser. You enter your tasks, pick your favorite theme, and instantly download a high-resolution print-ready document.
          </p>
        </div>

        {/* 35+ Culturally Respectful Themes */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold text-stone-900 mb-3 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Celebrating World Traditions &amp; Aesthetics</span>
          </h2>
          <p className="mb-3">
            Every day is shaped by our values, heritage, and the seasons. Our theme engine includes over 35 distinct designs curated with respect:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-600 mt-2">
            <li className="p-2 rounded-lg bg-stone-50 border border-stone-100">🌙 <strong>Islamic:</strong> Ramadan, Eid al-Fitr, Eid al-Adha, Mawlid</li>
            <li className="p-2 rounded-lg bg-stone-50 border border-stone-100">🎄 <strong>Christian:</strong> Christmas, Easter, Advent, Good Friday</li>
            <li className="p-2 rounded-lg bg-stone-50 border border-stone-100">🪔 <strong>Hindu:</strong> Diwali, Holi, Navratri, Durga Puja</li>
            <li className="p-2 rounded-lg bg-stone-50 border border-stone-100">🌾 <strong>Sikh:</strong> Vaisakhi, Gurpurab, Hola Mohalla</li>
            <li className="p-2 rounded-lg bg-stone-50 border border-stone-100">🕎 <strong>Jewish:</strong> Hanukkah, Passover, Rosh Hashanah, Yom Kippur</li>
            <li className="p-2 rounded-lg bg-stone-50 border border-stone-100">🪷 <strong>Buddhist:</strong> Vesak, Bodhi Day, Losar</li>
            <li className="p-2 rounded-lg bg-stone-50 border border-stone-100">🧧 <strong>East Asian:</strong> Lunar New Year, Mid-Autumn, Lantern Festival</li>
            <li className="p-2 rounded-lg bg-stone-50 border border-stone-100">🌸 <strong>Seasonal &amp; General:</strong> Minimalist, Vintage, Floral, Pastel, Dark</li>
          </ul>
        </div>

        {/* Privacy & Browser-Only Promise */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold text-stone-900 mb-3 flex items-center space-x-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span>Privacy By Architecture</span>
          </h2>
          <p className="mb-2">
            We believe your daily schedule, prayers, family events, and personal to-do items belong only to you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
            <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl">
              <CheckCircle className="w-4 h-4 text-emerald-600 mb-1" />
              <strong className="text-xs text-stone-900 block">No Server Transmission</strong>
              <span className="text-[11px] text-stone-500">Your task data never leaves your device.</span>
            </div>
            <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl">
              <CheckCircle className="w-4 h-4 text-emerald-600 mb-1" />
              <strong className="text-xs text-stone-900 block">No Account Required</strong>
              <span className="text-[11px] text-stone-500">Open the page and generate instantly.</span>
            </div>
            <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl">
              <CheckCircle className="w-4 h-4 text-emerald-600 mb-1" />
              <strong className="text-xs text-stone-900 block">Print &amp; PDF Freedom</strong>
              <span className="text-[11px] text-stone-500">Download high-res 300 DPI exports freely.</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button
          onClick={onNavigateToPlanner}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all"
        >
          Open Planner Studio
        </button>
      </div>
    </div>
  );
}
