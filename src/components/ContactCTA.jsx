import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-neutral-950 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-amber-400/20 bg-neutral-950/60 p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">Let’s create something unforgettable</h2>
              <p className="mt-2 text-sm text-amber-200/80">Bookings open for brand campaigns, weddings, and editorial shoots.</p>
            </div>
            <a
              href="mailto:hello@yourstudio.com?subject=Booking%20Inquiry"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            >
              Book a session
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-amber-200/60">© {new Date().getFullYear()} Your Studio. All rights reserved.</p>
      </div>
    </section>
  );
}
