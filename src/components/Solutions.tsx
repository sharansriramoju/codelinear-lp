import './Solutions.css';

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

interface Card {
  icon: string;
  title: string;
  description: string;
  nbfc?: boolean;
}

const cards: Card[] = [
  {
    icon: '/assets/icons/icon-core-banking.svg',
    title: 'Core Banking CB7',
    description:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: '/assets/icons/icon-digital-banking.svg',
    title: 'Digital Banking N7',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    icon: '/assets/icons/icon-open-banking.svg',
    title: 'Open Banking',
    description:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    icon: '/assets/icons/icon-loan-origination.svg',
    title: 'Loan Origination System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    nbfc: true,
  },
  {
    icon: '/assets/icons/icon-loan-management.svg',
    title: 'Loan Management System',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    nbfc: true,
  },
];

export default function Solutions() {
  return (
    <section className="solutions">
      <div className="solutions-bg-glow" />

      {/* Left column */}
      <div className="solutions-left">
        <h2 className="solutions-heading">
          All of our solutions are tailor-made to your needs
        </h2>
        <button className="solutions-btn">REQUEST DEMO</button>
      </div>

      {/* Right grid */}
      <div className="solutions-grid">
        {cards.map((card) => (
          <div key={card.title} className="solution-card">
            <div className="card-icon-row">
              <img
                src={card.icon}
                alt={card.title}
                className="card-icon"
              />
              {card.nbfc && <span className="nbfc-tag">NBFC</span>}
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.description}</p>
            <a href="#" className="card-link">
              <span className="card-link-text">Learn More</span>
              <ArrowRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
