import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CoreBanking from './components/CoreBanking';
import CoreBankingFeatures from './components/CoreBankingFeatures';
import DigitalBanking from './components/DigitalBanking';
import CTABanner from './components/CTABanner';
import Insights from './components/Insights';
import CaseStudies from './components/CaseStudies';
import FooterCTA from './components/FooterCTA';
import './index.css';

function App() {
  return (
    <div style={{ background: '#000d12', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Solutions />
      <CoreBanking />
      <CoreBankingFeatures />
      <DigitalBanking />
      <CTABanner />
      <Insights />
      <CaseStudies />
      <FooterCTA />
    </div>
  );
}

export default App;
