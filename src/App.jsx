import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import VideoReels from './components/VideoReels';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      {/* Hero with Spline cover */}
      <Hero />
      {/* Photo Gallery */}
      <Gallery />
      {/* Video Reels */}
      <VideoReels />
      {/* Contact Call-to-Action */}
      <ContactCTA />
    </div>
  );
}
