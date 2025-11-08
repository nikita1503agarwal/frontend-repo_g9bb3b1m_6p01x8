import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/50 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-300/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          Premium Photography & Videography
        </span>
        <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
          Timeless Stories in Black & Gold
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-sm text-gray-300 sm:text-base">
          Cinematic visuals for brands, weddings, and artists. Explore curated galleries and reels that merge art with technology.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#photos"
            className="group inline-flex items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/10 px-6 py-3 text-sm font-medium text-amber-200 transition hover:bg-amber-500/20 hover:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          >
            View Photos
          </a>
          <a
            href="#videos"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
          >
            Watch Reels
          </a>
        </div>
      </div>
    </section>
  );
}
