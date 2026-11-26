import React, { useState } from 'react';
import { Eye, X, Sparkles, ArrowUpRight } from 'lucide-react';
import {
  PORTFOLIO_ITEMS,
  type PortfolioItem,
  type ServiceCategory,
} from '../data/studioData';

interface PortfolioSectionProps {
  onInquireService: (serviceTitle: string) => void;
}

const FILTERS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'art', label: 'Art & Illustrations' },
  { id: 'dev', label: 'Web & App Dev' },
  { id: 'media', label: 'Photo, Video & AI' },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onInquireService,
}) => {
  const [filter, setFilter] = useState<ServiceCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const visibleItems =
    filter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section
      id="portfolio"
      className="relative border-t border-white/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-pink-600">
              Selected Showcase
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Crafted Across{' '}
              <span className="font-display italic font-normal text-sky-600">
                Every Medium
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-sky-500 to-pink-500 text-white shadow-md shadow-sky-300/40'
                    : 'glass-pill text-slate-700 hover:bg-white/80 hover:text-slate-950'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedItem(item);
              }}
              className="glass-panel group cursor-pointer overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stylized Visual Preview Banner */}
              <div
                className={`relative flex h-48 flex-col justify-between bg-gradient-to-br ${item.gradient} p-6`}
              >
                <div className="flex items-center justify-between">
                  <span className="glass-pill rounded-full px-3 py-1 text-[11px] font-bold text-slate-800">
                    {item.discipline}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {item.year}
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div className="rounded-lg bg-white/60 px-2.5 py-1 text-xs font-bold text-slate-900 backdrop-blur-sm">
                    {item.metrics}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-900 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-pink-600">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                  {item.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/80 bg-white/65 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-sky-950/30 p-4 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="glass-panel-strong relative w-full max-w-xl overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative flex h-44 flex-col justify-between bg-gradient-to-br ${selectedItem.gradient} p-6`}
            >
              <div className="flex items-center justify-between">
                <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-slate-900">
                  <Sparkles className="h-3.5 w-3.5 text-pink-500" />
                  {selectedItem.discipline}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close modal"
                  className="rounded-full bg-white/75 p-2 text-slate-800 hover:bg-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="inline-block w-fit rounded-lg bg-white/70 px-3 py-1 text-sm font-bold text-slate-900 backdrop-blur-sm">
                {selectedItem.metrics}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                {selectedItem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {selectedItem.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/80 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="glass-pill rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-white"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const discipline = selectedItem.discipline;
                    setSelectedItem(null);
                    onInquireService(discipline);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-pink-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-pink-300/40 hover:brightness-105"
                >
                  Start Similar Project
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
