import { useState, useRef, useEffect } from 'react';
import './CaseStudies.css';

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const slides = [
  { tag: 'GETTING STARTED', title: 'How we help brand reach out to more people', company: 'Zoomerr' },
  { tag: 'GETTING STARTED', title: 'How we help brand reach out to more people', company: 'Zoomerr' },
  { tag: 'GETTING STARTED', title: 'How we help brand reach out to more people', company: 'Zoomerr' },
  { tag: 'GETTING STARTED', title: 'How we help brand reach out to more people', company: 'Zoomerr' },
];

const CARD_WIDTH = 1015;
const CARD_GAP = 50;

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardOffset, setCardOffset] = useState(CARD_WIDTH + CARD_GAP);

  // Measure actual rendered card width + gap so translateX is correct at every viewport
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const card = trackRef.current.querySelector('.cs-card') as HTMLElement | null;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(trackRef.current).gap) || CARD_GAP;
      setCardOffset(card.offsetWidth + gap);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section className="cs-section">
      <h2 className="cs-heading">Our Case Studies</h2>

      {/* ── Carousel ──────────────────────────────────────── */}
      <div className="cs-carousel">
        <div
          ref={trackRef}
          className="cs-track"
          style={{ transform: `translateX(${-(current * cardOffset)}px)` }}
        >
          {slides.map((slide, i) => {
            const dist = Math.abs(i - current);
            const opacity = dist === 0 ? 1 : dist === 1 ? 0.55 : 0.15;
            return (
            <div key={i} className="cs-card" style={{ opacity, transition: 'opacity 0.5s ease' }}>
              {/* Left thumbnail */}
              <div className="cs-thumb">
                <div className="cs-thumb-grid">
                  <img src="/assets/icons/insight-icon.svg" alt="" className="cs-icon" draggable={false} />
                  <img src="/assets/icons/insight-icon.svg" alt="" className="cs-icon" draggable={false} />
                  <img src="/assets/icons/insight-icon.svg" alt="" className="cs-icon" draggable={false} />
                  <img src="/assets/icons/insight-icon.svg" alt="" className="cs-icon" draggable={false} />
                </div>
              </div>

              {/* Right content */}
              <div className="cs-content">
                <div className="cs-content-top">
                  <span className="cs-tag">{slide.tag}</span>
                  <h3 className="cs-title">{slide.title}</h3>
                </div>
                <div className="cs-content-bottom">
                  <div className="cs-company">
                    <img src="/assets/logos/logo-zoomerr.svg" alt="Zoomerr" className="cs-company-logo" />
                  </div>
                  <button className="cs-read-more">READ MORE</button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* ── Navigation ────────────────────────────────────── */}
      <div className="cs-nav">
        {/* Arrow + dots — centered under the card */}
        <div className="cs-arrow-dots">
          <button
            className="cs-arrow"
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>

          <div className="cs-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`cs-dot${i === current ? ' cs-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="cs-arrow"
            onClick={() => setCurrent(Math.min(total - 1, current + 1))}
            disabled={current === total - 1}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>

        {/* View all */}
        <a href="#" className="cs-view-all">
          <span className="cs-view-all-text">VIEW ALL</span>
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}
