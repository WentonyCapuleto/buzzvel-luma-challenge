const categories = [
  { number: "01", title: "Product Design", description: "Turn complex problems into clear, useful experiences." },
  { number: "02", title: "Technology", description: "Build a stronger understanding of the tools shaping digital products." },
  { number: "03", title: "Business", description: "Develop practical skills for better decisions and stronger teams." },
  { number: "04", title: "Creative", description: "Explore new ways to communicate, create and tell stories." },
];

export function Categories() {
  return (
    <section className="categories section-shell" id="categories">
      <div className="section-heading">
        <p className="eyebrow">Find your next skill</p>
        <h2>Learn something worth<br className="desktop-break" /> knowing.</h2>
        <p>Short, practical courses designed around skills you can put to work immediately.</p>
      </div>
      <div className="category-grid">
        {categories.map((item) => (
          <article className="category-card" key={item.number}>
            <span className="card-number">{item.number}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <a href="#featured" className="text-link">Explore <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}
