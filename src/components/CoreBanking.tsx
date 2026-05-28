import './CoreBanking.css';

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function CoreBanking() {
  return (
    <section className="core-banking">
      {/* CB7 watermark */}
      <img src="/assets/cb7-watermark.svg" alt="" className="cb7-watermark" aria-hidden="true" />

      {/* Left content */}
      <div className="core-banking-content">
        <h2 className="core-banking-heading">
          A complete cloud-based core banking.
        </h2>
        <p className="core-banking-subtext">
          Faster time to market with our cloud-based<br />core banking services
        </p>
        <button className="core-banking-btn">REQUEST DEMO</button>
        <a href="#" className="core-banking-link">
          <span className="core-banking-link-text">Learn More</span>
          <ArrowRight />
        </a>
      </div>

      {/* Right — dashboard mockup */}
      <div className="core-banking-visual">
        <div className="dashboard-wrapper">
          <div className="dashboard-frame">
            <img
              src="/assets/dashboard-mockup.png"
              alt="AML Dashboard"
              className="dashboard-img"
              draggable={false}
            />
          </div>
          <div className="dashboard-bar" />
        </div>
      </div>
    </section>
  );
}
