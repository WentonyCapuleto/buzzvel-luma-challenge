const portraits = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces",
];

export function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Learn at your own pace</p>
        <h1>Build skills that actually move you forward.</h1>
        <p className="hero-description">
          Practical courses taught by people who do the work every day. Learn design,
          technology, business and more — one focused lesson at a time.
        </p>
        <div className="hero-actions">
          <a className="button button-blue" href="#categories">Explore courses</a>
          <a className="button button-white" href="#how-it-works">See how it works</a>
        </div>
        <div className="social-proof">
          <div className="avatar-stack" aria-label="Luma learners">
            {portraits.map((src, i) => <img key={src} src={src} alt="" style={{ zIndex: 3 - i }} />)}
          </div>
          <p><strong>Trusted by 24,000+</strong> learners</p>
        </div>
      </div>
      <div className="hero-art" aria-label="A learner studying at her laptop">
        <span className="hero-orb" />
        <span className="floating-note" />
        <span className="floating-square" />
        <div className="hero-image-main">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&auto=format&fit=crop&q=85" alt="Woman smiling while working on her laptop" />
        </div>
        <div className="hero-image-side hero-image-left">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=80" alt="Creative team collaborating around a table" />
        </div>
        <div className="hero-image-side hero-image-right">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=80" alt="Colleagues sharing ideas in a meeting" />
        </div>
        <div className="hero-mini-card"><span className="mini-icon">↗</span><span><b>Keep growing</b><small>One lesson at a time</small></span></div>
      </div>
    </section>
  );
}
