import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { SERVICES } from '../data/studioData';

interface ContactSectionProps {
  selectedService?: string;
}

const RECIPIENT_EMAIL = 'm.kalaiyarasangi1619@gmail.com';

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(selectedService || SERVICES[0].title);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      setSubmitted(false);
    }
  }, [selectedService]);

  const getEmailSubject = () => `New KalaiArts Project Inquiry: ${service}`;

  const getEmailBody = () =>
    [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Service: ${service}`,
      '',
      'Project Details:',
      message.trim(),
    ].join('\n');

  const buildMailtoHref = () =>
    `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      getEmailSubject()
    )}&body=${encodeURIComponent(getEmailBody())}`;

  const buildGmailComposeHref = () =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      RECIPIENT_EMAIL
    )}&su=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(
      getEmailBody()
    )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    window.location.href = buildMailtoHref();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-white/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600">
              Start a Project
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Let&apos;s Create Something{' '}
              <span className="font-display italic font-normal text-pink-600">
                Unforgettable
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-700">
              Tell us whether you&apos;re commissioning an artwork, launching a
              website or mobile app, or editing your next video campaign.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${RECIPIENT_EMAIL}`}
                className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-pink-600"
              >
                <div className="glass-pill flex h-10 w-10 items-center justify-center rounded-xl text-pink-500">
                  <Mail className="h-4 w-4" />
                </div>
                <span>{RECIPIENT_EMAIL}</span>
              </a>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <div className="glass-pill flex h-10 w-10 items-center justify-center rounded-xl text-sky-500">
                  <Clock className="h-4 w-4" />
                </div>
                <span>Replies within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <div className="glass-pill flex h-10 w-10 items-center justify-center rounded-xl text-pink-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Available Worldwide • Remote Studio</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-strong rounded-3xl p-6 sm:p-9">
              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-sky-500" />
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    Email Draft Ready!
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Your inquiry for{' '}
                    <span className="font-semibold text-pink-600">{service}</span>{' '}
                    is pre-filled for{' '}
                    <span className="font-semibold text-slate-900">
                      {RECIPIENT_EMAIL}
                    </span>
                    . If your mail app didn&apos;t open automatically, use Gmail
                    Web below.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={buildGmailComposeHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-pink-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-pink-300/40 hover:brightness-105"
                    >
                      Send via Gmail Web
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={buildMailtoHref()}
                      className="glass-pill rounded-xl px-5 py-2.5 text-sm font-bold text-slate-800 hover:bg-white"
                    >
                      Open Mail App
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="glass-pill rounded-xl px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-white"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Kalai Selvan"
                        className="mt-2 w-full rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-sky-400 focus:bg-white/90"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-sky-400 focus:bg-white/90"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      Select Service
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-pink-400 focus:bg-white/90"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Full Creative + Tech Bundle">
                        Full Creative + Tech Bundle
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your artwork idea, website/app features, or video editing goals..."
                      className="mt-2 w-full rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-pink-400 focus:bg-white/90"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-pink-400 to-rose-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-300/40 transition-all hover:brightness-105"
                  >
                    Send Project Inquiry
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
