import './FooterCTA.css';

export default function FooterCTA() {
  return (
    <section className="fcta-section">
      {/* Left — heading + description */}
      <div className="fcta-left">
        <h2 className="fcta-heading">
          Take the full advantage of going paper-less now.
        </h2>
        <p className="fcta-desc">
          CB7 helps your financial institution improve the client experience,
          automate and optimize procedures, simplify banking operations
        </p>
      </div>

      {/* Right — buttons */}
      <div className="fcta-buttons">
        <button className="fcta-btn-secondary">CONTACT US</button>
        <button className="fcta-btn-primary">REQUEST DEMO</button>
      </div>
    </section>
  );
}
