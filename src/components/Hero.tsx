import { useState, useRef, useCallback } from 'react';
import './Hero.css';

const logos = [
  { src: '/assets/logos/logo-shells.svg', alt: 'Shells' },
  { src: '/assets/logos/logo-smartfinder.svg', alt: 'SmartFinder' },
  { src: '/assets/logos/logo-zoomerr.svg', alt: 'Zoomerr' },
  { src: '/assets/logos/logo-artvenue.svg', alt: 'ArtVenue' },
  { src: '/assets/logos/logo-kontrastr.svg', alt: 'Kontrastr' },
  { src: '/assets/logos/logo-wavesmarathon.svg', alt: 'WavesMarathon' },
];

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 10, y: -x * 10 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-glow" />

      {/* Left content */}
      <div className="hero-content">
        <h1 className="hero-heading">
          The new foundation<br />of modern banking
        </h1>
        <p className="hero-subtext">
          We drive innovation and growth, provide seamless<br />
          customer experience and operational excellence
        </p>
        <div className="hero-cta">
          <button className="hero-btn-primary">REQUEST DEMO</button>
          <button className="hero-btn-secondary">CONTACT US</button>
        </div>

        {/* Trusted By */}
        <div className="trusted-by">
          <span className="trusted-by-label">Trusted By:</span>
          <div className="trusted-by-logos">
            {logos.map(logo => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="trusted-by-logo" />
            ))}
          </div>
        </div>
      </div>

      {/* Right — tiltable composite image */}
      <div
        ref={containerRef}
        className="hero-visual"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered
            ? 'transform 0.08s ease-out'
            : 'transform 0.6s ease-out',
        }}
      >
        <img
          src="/assets/hero-visual.png"
          alt="Banking app interface"
          className="hero-visual-img"
          draggable={false}
        />
      </div>
    </section>
  );
}
