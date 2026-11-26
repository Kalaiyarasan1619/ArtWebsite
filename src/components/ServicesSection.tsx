import React, { useState, useEffect } from 'react';
import {
  Palette,
  PenTool,
  Globe,
  Smartphone,
  Film,
  Sparkles,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES, type ServiceCategory, type ServiceItem } from '../data/studioData';

interface ServicesSectionProps {
  highlightedServiceId?: string | null;
  onInquireService: (serviceTitle: string) => void;
}

const CATEGORY_TABS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Disciplines (6)' },
  { id: 'art', label: 'Art & Illustrations' },
  { id: 'dev', label: 'Website & App Dev' },
  { id: 'media', label: 'Photo, Video & AI' },
];

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'art-drawings': Palette,
  illustrations: PenTool,
  'web-development': Globe,
  'app-development': Smartphone,
  'photo-video-editing': Film,
  'ai-video-editing': Sparkles,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  highlightedServiceId,
  onInquireService,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  useEffect(() => {
    if (highlightedServiceId) {
      setActiveCategory('all');
    }
  }, [highlightedServiceId]);

  const filteredServices: ServiceItem[] =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative border-t border-white/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600">
              What We Create
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Six Creative &amp; Digital{' '}
              <span className="font-display italic font-normal text-pink-600">
                Craft Pillars
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-700">
              Whether you need a hand-drawn portrait, a custom vector world, a React
              web platform, a mobile app, or AI-powered video production, pick a
              discipline below.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-sky-500 to-pink-500 text-white shadow-md shadow-pink-300/40'
                    : 'glass-pill text-slate-700 hover:bg-white/80 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const Icon = ICON_MAP[service.id] ?? Sparkles;
            const isHighlighted = highlightedServiceId === service.id;

            return (
              <article
                key={service.id}
                id={`service-${service.id}`}
                className={`glass-panel group flex flex-col justify-between rounded-3xl bg-gradient-to-br p-7 transition-all duration-300 hover:-translate-y-1 ${
                  service.accent
                } ${
                  isHighlighted
                    ? 'ring-2 ring-pink-400 ring-offset-2 ring-offset-sky-50'
                    : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-sm ${service.badgeColor}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="glass-pill rounded-full px-3 py-1 text-[11px] font-bold text-slate-700">
                      {service.shortTitle}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-sky-700">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <ul className="mt-5 space-y-2 border-t border-white/70 pt-5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs font-medium text-slate-700"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-pink-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools + CTA */}
                <div className="mt-6 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/80 bg-white/65 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onInquireService(service.title)}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/80 bg-white/70 px-4 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-gradient-to-r hover:from-sky-500 hover:to-pink-500 hover:text-white"
                  >
                    Request {service.shortTitle}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
