import './CoreBankingFeatures.css';

const leftFeatures = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
];

const rightFeatures = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

export default function CoreBankingFeatures() {
  return (
    <section className="cbf-section">
      {/* Left — dashboard mockup */}
      <div className="cbf-visual">
        <div className="cbf-dashboard-wrapper">
          <div className="cbf-dashboard-frame">
            <img
              src="/assets/kyc-dashboard-mockup.png"
              alt="KYC Dashboard"
              className="cbf-dashboard-img"
              draggable={false}
            />
          </div>
          <div className="cbf-dashboard-bar" />
        </div>
      </div>

      {/* Right — content */}
      <div className="cbf-content">
        <h2 className="cbf-heading">
          Run a more efficient, flexible, and digitally connected corebanking system
        </h2>

        <div className="cbf-features">
          <p className="cbf-features-label">What you will get:</p>

          <div className="cbf-features-grid">
            {/* Left column */}
            <div className="cbf-features-col">
              {leftFeatures.map((item) => (
                <div key={item} className="cbf-feature-item">
                  <img
                    src="/assets/icons/icon-checkmark.svg"
                    alt=""
                    className="cbf-checkmark"
                    aria-hidden="true"
                  />
                  <span className="cbf-feature-text">{item}</span>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="cbf-features-col">
              {rightFeatures.map((item) => (
                <div key={item} className="cbf-feature-item">
                  <img
                    src="/assets/icons/icon-checkmark.svg"
                    alt=""
                    className="cbf-checkmark"
                    aria-hidden="true"
                  />
                  <span className="cbf-feature-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
