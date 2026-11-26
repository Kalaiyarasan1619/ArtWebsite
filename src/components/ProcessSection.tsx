import React from 'react';
import { PROCESS_STEPS } from '../data/studioData';
import { Award, Cpu, Brush, Zap } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <>
      {/* Creative Workflow */}
      <section id="process" className="border-t border-white/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600">
              How We Work
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              From First{' '}
              <span className="font-display italic font-normal text-pink-600">
                Pencil Stroke
              </span>{' '}
              to Final Launch
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="glass-panel relative rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="font-display bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-4xl italic text-transparent">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Studio */}
      <section id="about" className="border-t border-white/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-pink-600">
                About KalaiArts
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                One Studio for Artists, Founders &amp; Creators
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Most studios force you to hire separate freelancers for drawings,
                illustrations, web development, mobile apps, and video editing.
                KalaiArts unites fine-art sensibility with full-stack TypeScript
                engineering and AI-powered post-production.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              <div className="glass-panel rounded-3xl p-5">
                <Brush className="h-6 w-6 text-pink-500" />
                <h3 className="mt-3 font-bold text-slate-900">Artist-Led Vision</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Every website, app, and reel is designed with an illustrator&apos;s
                  eye for composition and color.
                </p>
              </div>
              <div className="glass-panel rounded-3xl p-5">
                <Cpu className="h-6 w-6 text-sky-500" />
                <h3 className="mt-3 font-bold text-slate-900">Modern Tech Stack</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Clean React, TypeScript, and Tailwind CSS codebases built for
                  long-term maintainability.
                </p>
              </div>
              <div className="glass-panel rounded-3xl p-5">
                <Zap className="h-6 w-6 text-fuchsia-500" />
                <h3 className="mt-3 font-bold text-slate-900">
                  AI-Accelerated Media
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Smart AI video workflows that cut turnaround times while keeping
                  human creative direction in charge.
                </p>
              </div>
              <div className="glass-panel rounded-3xl p-5">
                <Award className="h-6 w-6 text-cyan-600" />
                <h3 className="mt-3 font-bold text-slate-900">End-to-End Delivery</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Print-ready art, deployed web/mobile apps, and 4K social masters
                  under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
