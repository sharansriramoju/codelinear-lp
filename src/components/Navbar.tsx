import { useState } from 'react';
import './Navbar.css';

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
    <path
      d="M1 1L5 5L9 1"
      stroke="#E9F4F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
    <path d="M0 1H20" stroke="#E9F4F9" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M0 7H20" stroke="#E9F4F9" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M0 13H20" stroke="#E9F4F9" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 1L15 15M15 1L1 15" stroke="#E9F4F9" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <span className="navbar-logo">N7</span>

        {/* Desktop links */}
        <div className="navbar-links">
          <a href="#" className="navbar-item">
            Solutions <ChevronDown />
          </a>
          <a href="#" className="navbar-item">
            Resources <ChevronDown />
          </a>
          <a href="#" className="navbar-item">About Us</a>
          <button className="navbar-demo-btn">Request Demo</button>
        </div>

        {/* Mobile right side */}
        <div className="navbar-mobile-right">
          <button className="navbar-demo-btn">Request Demo</button>
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <a href="#" className="mobile-menu-item" onClick={() => setMenuOpen(false)}>
          Solutions <ChevronDown />
        </a>
        <a href="#" className="mobile-menu-item" onClick={() => setMenuOpen(false)}>
          Resources <ChevronDown />
        </a>
        <a href="#" className="mobile-menu-item" onClick={() => setMenuOpen(false)}>
          About Us
        </a>
      </div>
    </header>
  );
}
