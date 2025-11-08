import React from 'react';

const videos = [
  {
    title: 'Brand Reel',
    url: 'https://player.vimeo.com/video/76979871?h=8272103f6e&title=0&byline=0&portrait=0',
  },
  {
    title: 'Wedding Highlight',
    url: 'https://player.vimeo.com/video/357274789?h=1a1b0e0c9d&title=0&byline=0&portrait=0',
  },
  {
    title: 'Artist Visual',
    url: 'https://player.vimeo.com/video/91512863?h=5b9b8b1c0e&title=0&byline=0&portrait=0',
  },
];

export default function VideoReels() {
  return (
    <section id="videos" className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Video Reels</h2>
          <p className="mt-2 text-sm text-amber-200/80">Cinematic cuts designed for impact across platforms.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {videos.map((v, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg border border-amber-400/10 bg-neutral-900">
              <div className="relative w-full pt-[56.25%]">{/* 16:9 */}
                <iframe
                  src={v.url}
                  title={v.title}
                  className="absolute left-0 top-0 h-full w-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-amber-200">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
