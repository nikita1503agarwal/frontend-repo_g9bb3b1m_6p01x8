import React from 'react';

const photos = [
  'https://images.unsplash.com/photo-1526178610637-1a0471f1b2f8?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922329-4bda0be3b067?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922329-4bda0be3b067?q=80&w=1887&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <section id="photos" className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured Photography</h2>
            <p className="mt-2 text-sm text-amber-200/80">A selection of editorial, lifestyle and event work.</p>
          </div>
          <a href="#contact" className="text-sm font-medium text-amber-400 hover:text-amber-300">Book a shoot →</a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg border border-amber-400/10 bg-neutral-900">
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
