import './CTABanner.css';

export default function CTABanner() {
  return (
    <div className="cta-outer">
    <section className="cta-section">
      {/* Main card */}
      <div className="cta-card">
        {/* CB7 watermark — inside card */}
        <img src="/assets/cb7-watermark.svg" alt="" className="cta-watermark" aria-hidden="true" />
        {/* Left — heading + subtext */}
        <div className="cta-content">
          <h2 className="cta-heading">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="cta-subtext">
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right — buttons */}
        <div className="cta-buttons">
          <button className="cta-btn-secondary">CONTACT US</button>
          <button className="cta-btn-primary">REQUEST DEMO</button>
        </div>
      </div>
    </section>
    </div>
  );
}
