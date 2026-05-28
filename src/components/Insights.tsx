import './Insights.css';

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

interface Article {
  tag: string;
  title: string;
  author: string;
  date: string;
}

const articles: Article[] = [
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
];

export default function Insights() {
  const [featured, ...rest] = articles;
  return (
    <section className="ins-section">
      {/* Gradient glow behind left column */}
      <div className="ins-glow" aria-hidden="true" />

      {/* Left — sticky heading + CTA */}
      <div className="ins-left">
        <h2 className="ins-heading">
          Get yourself up-to-speed on all the things happening in fintech
        </h2>
        <button className="ins-btn">INSIGHTS</button>
      </div>

      {/* Right — cards */}
      <div className="ins-cards">

        {/* Featured top card */}
        <div className="ins-card ins-card--featured">
          <div className="ins-thumb">
            <div className="ins-thumb-grid">
              <img src="/assets/icons/insight-icon.svg" alt="" className="ins-icon" draggable={false} />
              <img src="/assets/icons/insight-icon.svg" alt="" className="ins-icon" draggable={false} />
              <img src="/assets/icons/insight-icon.svg" alt="" className="ins-icon" draggable={false} />
              <img src="/assets/icons/insight-icon.svg" alt="" className="ins-icon" draggable={false} />
            </div>
          </div>
          <div className="ins-content ins-content--featured">
            <span className="ins-tag">{featured.tag}</span>
            <h3 className="ins-title">{featured.title}</h3>
            <div className="ins-meta">
              <span className="ins-author">{featured.author}</span>
              <span className="ins-date">{featured.date}</span>
            </div>
            <button className="ins-read-more">READ MORE</button>
          </div>
        </div>

        {/* Bottom 2 small cards */}
        <div className="ins-bottom-row">
          {rest.map((article, i) => (
            <div key={i} className="ins-card ins-card--small">
              <span className="ins-tag">{article.tag}</span>
              <h3 className="ins-title">{article.title}</h3>
              <div className="ins-meta">
                <span className="ins-author">{article.author}</span>
                <span className="ins-date">{article.date}</span>
              </div>
              <button className="ins-read-more">READ MORE</button>
            </div>
          ))}
        </div>

        {/* Read all insights */}
        <div className="ins-footer">
          <a href="#" className="ins-all-link">
            <span className="ins-all-text">READ ALL INSIGHTS</span>
            <ArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
}
