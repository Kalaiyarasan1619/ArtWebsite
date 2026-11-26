import React from 'react';
import {
  ArrowRight,
  Palette,
  Code2,
  Smartphone,
  Film,
  Sparkles,
  PenTool,
  Layers,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const disciplinePills = [
    { label: 'Art & Drawings', icon: Palette, href: '#services' },
    { label: 'Illustrations', icon: PenTool, href: '#services' },
    { label: 'Website Dev', icon: Code2, href: '#services' },
    { label: 'App Dev', icon: Smartphone, href: '#services' },
    { label: 'Photo & Video', icon: Film, href: '#services' },
    { label: 'AI Video Editing', icon: Sparkles, href: '#services' },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7">
            <div className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-pink-500" />
              Multi-Disciplinary Creative &amp; Digital Studio
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:leading-[1.08]">
              Where{' '}
              <span className="font-display italic font-normal text-pink-600">
                Fine Art
              </span>{' '}
              Meets Modern{' '}
              <span className="bg-gradient-to-r from-sky-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Code &amp; AI Media
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              From hand-drawn portraits and bespoke illustrations to high-converting
              websites, mobile apps, cinematic photo &amp; video editing, and
              next-generation AI video production — we bring imagination and
              engineering together under one roof.
            </p>

            {/* Discipline Quick Pills */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {disciplinePills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <a
                    key={pill.label}
                    href={pill.href}
                    className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/80 hover:text-slate-950"
                  >
                    <Icon className="h-3.5 w-3.5 text-sky-500" />
                    {pill.label}
                  </a>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-pink-400 to-rose-400 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-300/40 transition-all hover:brightness-105"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://advanced-port-folio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all hover:bg-white/80"
              >
                View Portfolio
              </a>
            </div>

            {/* Quick Stats */}
            <div className="glass-panel mt-12 grid grid-cols-3 gap-6 rounded-3xl p-6 sm:max-w-lg">
              <div>
                <div className="bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                  6+
                </div>
                <div className="mt-1 text-xs font-medium text-slate-600">
                  Creative &amp; Tech Pillars
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                  150+
                </div>
                <div className="mt-1 text-xs font-medium text-slate-600">
                  Artworks, Apps &amp; Edits
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                  100%
                </div>
                <div className="mt-1 text-xs font-medium text-slate-600">
                  Custom Craftsmanship
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Studio Glass Bento Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: Art & Illustration */}
              <div className="glass-panel group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200/45 via-white/50 to-sky-100/40 p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-600 shadow-sm">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Art &amp; Illustrations
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Charcoal portraits, concept sketches &amp; custom vector worlds.
                </p>
                <div className="mt-4 rounded-xl border border-white/80 bg-white/60 p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-pink-600">
                    <span>Studio Canvas</span>
                    <span>300 DPI</span>
                  </div>
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-gradient-to-r from-sky-400 to-pink-400" />
                </div>
              </div>

              {/* Card 2: Web & App Dev */}
              <div className="glass-panel group relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-200/45 via-white/50 to-pink-100/40 p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600 shadow-sm">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Web &amp; App Dev
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  React, TypeScript, Tailwind &amp; cross-platform mobile apps.
                </p>
                <div className="mt-4 rounded-xl border border-white/80 bg-white/65 p-2.5 font-mono text-[10px] text-sky-700 backdrop-blur-sm">
                  <div>&lt;App theme=&quot;glass&quot; /&gt;</div>
                  <div className="mt-1 font-semibold text-pink-600">
                    ✓ Build ready (99ms)
                  </div>
                </div>
              </div>

              {/* Card 3: Photo & Video Editing */}
              <div className="glass-panel group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-200/40 via-white/50 to-rose-100/45 p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 shadow-sm">
                  <Film className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  Photo &amp; Video
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Color grading, retouching &amp; high-impact social reels.
                </p>
                <div className="mt-4 flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/60 p-2.5">
                  <span className="h-6 w-1/3 rounded-md bg-sky-400/75" />
                  <span className="h-6 w-1/4 rounded-md bg-pink-300/80" />
                  <span className="h-6 w-5/12 rounded-md bg-rose-400/75" />
                </div>
              </div>

              {/* Card 4: AI Video Editing */}
              <div className="glass-panel group relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200/45 via-white/50 to-sky-200/45 p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-fuchsia-600 shadow-sm">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  AI Video Editing
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Generative scenes, 4K AI upscaling &amp; smart VFX workflows.
                </p>
                <div className="mt-4 flex items-center justify-between rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-[11px] font-semibold text-pink-600">
                  <span>AI Render</span>
                  <span className="inline-flex items-center gap-1 text-sky-600">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-pink-500" />
                    4K 60fps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
