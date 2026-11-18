export function FeaturedCourse() {
  return (
    <section className="featured-wrap section-shell" id="featured">
      <div className="featured-course">
        <div className="featured-photo">
          <img src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=1000&auto=format&fit=crop&q=85" alt="Designer working on a product design project" />
          <span className="photo-label">Featured course</span>
        </div>
        <div className="featured-copy">
          <p className="eyebrow eyebrow-light">Most popular this month</p>
          <h2>Designing products people understand.</h2>
          <p className="featured-description">
            Learn how to turn complex workflows into simple, intentional product experiences
            through research, structure and thoughtful interaction design.
          </p>
          <p className="instructor">With Maya Chen · Senior Product Designer</p>
          <div className="course-meta">
            <span>8 lessons</span><span>2h 40min</span><span>Intermediate</span>
          </div>
          <div className="featured-actions">
            <a className="button button-yellow" href="#contact">View course</a>
            <a className="light-link" href="#categories">Browse all courses <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
