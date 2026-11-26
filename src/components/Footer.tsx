import React from 'react';
import { Sparkles } from 'lucide-react';
import { SERVICES } from '../data/studioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/70 bg-white/40 py-12 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-pink-400 to-rose-400 p-0.5 shadow-sm">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white/90">
                  <Sparkles className="h-4 w-4 text-pink-500" />
                </div>
              </div>
              <span className="text-lg font-extrabold text-slate-900">
                Kalai
                <span className="bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">
                  Arts
                </span>
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Creative studio blending fine art, illustration, React &amp; mobile
              engineering, and AI-powered photo &amp; video production.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm font-medium text-slate-600">
              <li>
                <a href="#home" className="hover:text-pink-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-pink-600">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-pink-600">
                  Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-pink-600">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Services
            </h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm font-medium text-slate-600 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-sky-600">
                    {s.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/70 pt-8 text-xs font-medium text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} KalaiArts Studio. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
