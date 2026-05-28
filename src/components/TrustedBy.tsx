import './TrustedBy.css';

const logos = [
  { src: '/assets/logos/logo-shells.svg', alt: 'Shells' },
  { src: '/assets/logos/logo-smartfinder.svg', alt: 'SmartFinder' },
  { src: '/assets/logos/logo-zoomerr.svg', alt: 'Zoomerr' },
  { src: '/assets/logos/logo-artvenue.svg', alt: 'ArtVenue' },
  { src: '/assets/logos/logo-kontrastr.svg', alt: 'Kontrastr' },
  { src: '/assets/logos/logo-wavesmarathon.svg', alt: 'WavesMarathon' },
];

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <span className="trusted-by-label">Trusted By:</span>
      <div className="trusted-by-logos">
        {logos.map(logo => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="trusted-by-logo"
          />
        ))}
      </div>
    </section>
  );
}
