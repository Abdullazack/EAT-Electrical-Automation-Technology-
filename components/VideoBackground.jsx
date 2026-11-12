'use client';

import { useEffect, useRef } from 'react';

const VIDEO_SRC = encodeURI('/videos/Blue Tech Business Cyber Security Video (1).mp4');

export default function VideoBackground() {
  const ref = useRef(null);

  useEffect(() => {
    // Respect people who ask their device to reduce motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ref.current?.pause();
    }
  }, []);

  return (
    <div className="video-bg" aria-hidden="true">
      <video ref={ref} autoPlay muted loop playsInline preload="metadata">
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
