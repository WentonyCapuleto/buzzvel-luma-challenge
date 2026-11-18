const columns = [
  { title: "Explore", links: ["Courses", "Categories", "Instructors", "For Teams"] },
  { title: "Company", links: ["About", "Careers", "Journal"] },
  { title: "Support", links: ["Help Center", "Contact", "Terms", "Privacy"] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand">
          <a className="logo logo-light" href="#">luma<span>.</span></a>
          <p>Practical learning for curious<br /> people.</p>
        </div>
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => <a href={link === "Contact" ? "#contact" : "#categories"} key={link}>{link}</a>)}
          </div>
        ))}
      </div>
      <div className="section-shell footer-bottom"><span>© 2026 Luma Learning</span><span>Made for curious minds.</span></div>
    </footer>
  );
}
