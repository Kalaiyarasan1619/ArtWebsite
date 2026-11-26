import React, { useState, useEffect, useRef } from 'react';
import {
  Palette,
  PenTool,
  Globe,
  Smartphone,
  Film,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

interface NavbarProps {
  onSelectService?: (serviceId: string) => void;
}

const SERVICE_MENU_ITEMS = [
  {
    id: 'art-drawings',
    label: 'Artist & Art Drawings',
    desc: 'Portraits, charcoal & custom art',
    icon: Palette,
    color: 'text-pink-500',
  },
  {
    id: 'illustrations',
    label: 'Illustrations',
    desc: 'Character, editorial & vector art',
    icon: PenTool,
    color: 'text-rose-500',
  },
  {
    id: 'web-development',
    label: 'Website Development',
    desc: 'React, TypeScript & Tailwind sites',
    icon: Globe,
    color: 'text-sky-500',
  },
  {
    id: 'app-development',
    label: 'App Development',
    desc: 'iOS, Android & web applications',
    icon: Smartphone,
    color: 'text-sky-600',
  },
  {
    id: 'photo-video-editing',
    label: 'Photo & Video Editing',
    desc: 'Retouching, color grading & reels',
    icon: Film,
    color: 'text-cyan-600',
  },
  {
    id: 'ai-video-editing',
    label: 'AI Video Editing',
    desc: 'Generative VFX, upscaling & AI cuts',
    icon: Sparkles,
    color: 'text-fuchsia-500',
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (id: string) => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    onSelectService?.(id);
    const el = document.getElementById('services');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/70 bg-white/55 backdrop-blur-2xl shadow-lg shadow-sky-200/30'
          : 'bg-white/25 backdrop-blur-md border-b border-white/40'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-pink-400 to-rose-400 p-0.5 shadow-md shadow-pink-300/40 transition-transform duration-300 group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white/90">
              <Sparkles className="h-5 w-5 text-pink-500" />
            </div>
          </div>
          <div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              Kalai
              <span className="bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">
                Arts
              </span>
            </span>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              Art • Code • Media
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary Navigation">
          <a
            href="#home"
            className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/60 hover:text-slate-950"
          >
            Home
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/60 hover:text-slate-950"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-pink-500' : ''
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="glass-panel-strong absolute left-1/2 mt-3 w-[540px] -translate-x-1/2 rounded-3xl p-3">
                <div className="mb-2 flex items-center justify-between px-3 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Creative &amp; Tech Disciplines
                  </span>
                  <a
                    href="#services"
                    onClick={() => setServicesOpen(false)}
                    className="text-xs font-semibold text-sky-600 hover:text-pink-500"
                  >
                    View all →
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {SERVICE_MENU_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleServiceClick(item.id)}
                        className="flex items-start gap-3 rounded-2xl p-2.5 text-left transition-colors hover:bg-white/75"
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/80 bg-gradient-to-br from-sky-100 to-pink-100 shadow-sm">
                          <Icon className={`h-4 w-4 ${item.color}`} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">
                            {item.label}
                          </div>
                          <div className="text-xs text-slate-600">{item.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="#portfolio"
            className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/60 hover:text-slate-950"
          >
            Portfolio
          </a>
          <a
            href="#process"
            className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/60 hover:text-slate-950"
          >
            Process
          </a>
          <a
            href="#about"
            className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/60 hover:text-slate-950"
          >
            About
          </a>
          <a
            href="#contact"
            className="rounded-xl px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/60 hover:text-slate-950"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 via-pink-400 to-rose-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-300/40 transition-all hover:brightness-105 sm:inline-flex"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="glass-pill inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-white/80 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/60 bg-white/75 px-4 pb-6 pt-3 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col space-y-1">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-white/70"
            >
              Home
            </a>

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-white/70"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileServicesOpen ? 'rotate-180 text-pink-500' : ''
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 pl-3">
                  {SERVICE_MENU_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleServiceClick(item.id)}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-white/70"
                      >
                        <Icon className={`h-4 w-4 ${item.color}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-white/70"
            >
              Portfolio
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-white/70"
            >
              Process
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-white/70"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-white/70"
            >
              Contact
            </a>

            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-pink-400 to-rose-400 px-5 py-3 text-sm font-bold text-white shadow-md shadow-pink-300/40"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
