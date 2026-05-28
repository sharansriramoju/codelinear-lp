import './Footer.css';

const columns = [
  {
    city: 'London',
    address:
      'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
    linksHeading: 'Solutions',
    links: [
      'Core Banking CB7',
      'Digital Banking N7',
      'Open Banking',
      'Loan Origination System',
      'Loan Management System',
      'Digital Transformation',
    ],
  },
  {
    city: 'Dubai',
    address:
      'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
    linksHeading: 'N7 Banking',
    links: [
      'About Us',
      'Solutions',
      'Contact',
      'Company',
      'Careers',
      'Insights',
      'Core Team',
      'Brand Center',
    ],
  },
  {
    city: 'London',
    address:
      'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
    linksHeading: 'Our Socials',
    links: ['LinkedIn', 'X'],
  },
];

export default function Footer() {
  return (
    <footer className="ft-section">
      {/* ── Bottom gradient decoration ─────────────────────── */}
      <div className="ft-gradient" aria-hidden="true" />

      {/* ── N7 logo ────────────────────────────────────────── */}
      <img
        src="/assets/footer-n7-logo.png"
        alt="N7"
        className="ft-n7-logo"
        draggable={false}
      />

      {/* ── Right content ──────────────────────────────────── */}
      <div className="ft-right">
        {/* Three columns — CSS Grid keeps addr row and links row aligned */}
        <div className="ft-cols-grid">
          {/* Row 1: Address blocks */}
          {columns.map((col, i) => (
            <div key={`addr-${i}`} className="ft-addr-block">
              <h4 className="ft-city">{col.city}</h4>
              <p className="ft-addr-text">{col.address}</p>
            </div>
          ))}

          {/* Row 2: Links blocks */}
          {columns.map((col, i) => (
            <div key={`links-${i}`} className="ft-links-block">
              <h4 className="ft-links-heading">{col.linksHeading}</h4>
              <ul className="ft-links-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="ft-link-item">
                      <span className="ft-link-text">{link}</span>
                      <img
                        src="/assets/icons/footer-arrow.svg"
                        alt=""
                        className="ft-link-arrow"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="ft-copyright">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}
