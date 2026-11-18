export function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="section-shell testimonial-inner">
        <div className="quote-block">
          <span className="quote-mark">“</span>
          <blockquote>
            The lessons are short enough to fit into my week, but detailed enough that I
            actually leave with something I can use.
          </blockquote>
          <div className="quote-author">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces" alt="Alex Morgan" />
            <span><strong>Alex Morgan</strong><small>Product Manager</small></span>
          </div>
        </div>
        <div className="stats-grid">
          <div><strong>24K+</strong><span>active learners</span></div>
          <div><strong>120+</strong><span>expert-led courses</span></div>
          <div><strong>92%</strong><span>complete their first course</span></div>
        </div>
      </div>
    </section>
  );
}
