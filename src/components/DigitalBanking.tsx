import './DigitalBanking.css';

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const MarqueeContent = () => (
  <>
    <span className="db-m-gradient">N7</span>
    <span className="db-m-sep" aria-hidden="true">✳</span>
    <span className="db-m-text">Say 👋</span>
    <span className="db-m-sep" aria-hidden="true">✳</span>
    <span className="db-m-text">to the new way of banking</span>
    <span className="db-m-sep" aria-hidden="true">✳</span>
    <span className="db-m-gradient">CB7</span>
    <span className="db-m-sep" aria-hidden="true">✳</span>
  </>
);

interface Card {
  phone: string;
  phoneRight?: boolean;
  label: string;
  description: string;
  bullets: string[];
}

const cards: Card[] = [
  {
    phone: '/assets/digital-phone-1.png',
    label: 'Fully compliant with regulatory requirement',
    description:
      "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    bullets: [
      'Pre-integrated Security System',
      'Fully Compliant With Regulatory Requirement',
      'Digitally Connected Core',
    ],
  },
  {
    phone: '/assets/digital-phone-2.png',
    phoneRight: true,
    label: 'No legacy IT systems',
    description:
      'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    bullets: [
      'Adaptive & Intelligent API monetization',
      'Ambient User Experience',
      'Cloud-native With lower TCO',
    ],
  },
  {
    phone: '/assets/digital-phone-3.png',
    label: 'No traditional branches',
    description:
      'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
    bullets: [
      'Branchless & Paperless Banking',
      'Digital Transformation Capability',
      'Optimized, Adoptable and Scalable',
    ],
  },
];

export default function DigitalBanking() {
  return (
    <>
      {/* ── Marquee ticker ───────────────────────────────── */}
      <div className="db-marquee">
        <div className="db-marquee-track">
          <div className="db-marquee-set"><MarqueeContent /></div>
          <div className="db-marquee-set"><MarqueeContent /></div>
        </div>
      </div>

      {/* ── Main section ─────────────────────────────────── */}
      <div className="db-section-outer">
      <section className="db-section">
        {/* Arc lives in its own clip wrapper so sticky still works */}
        <div className="db-arc-clip" aria-hidden="true">
          <div className="db-bg-arc" />
        </div>

        {/* Left — sticky heading + CTA */}
        <div className="db-left">
          <h2 className="db-title">Digital banking out-of-the-box</h2>
          <p className="db-desc">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures
          </p>
          <div className="db-cta">
            <button className="db-btn-primary">REQUEST DEMO</button>
            <a href="#" className="db-link">
              <span className="db-link-text">Learn More</span>
              <ArrowRight />
            </a>
          </div>
        </div>

        {/* Right — 3 scrolling cards */}
        <div className="db-cards">
          {cards.map((card, i) => (
            <div key={i} className={`db-card${card.phoneRight ? ' db-card--reverse' : ''}`}>
              <img
                src={card.phone}
                alt=""
                className="db-phone"
                draggable={false}
              />
              <div className="db-features">
                <h3 className="db-feature-label">{card.label}</h3>
                <p className="db-feature-desc">{card.description}</p>
                <div className="db-bullets">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="db-bullet-item">
                      <img
                        src="/assets/icons/icon-checkmark.svg"
                        alt=""
                        className="db-bullet-icon"
                        aria-hidden="true"
                      />
                      <span className="db-bullet-text">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
