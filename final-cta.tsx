const tinyFaces = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=70&h=70&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=70&h=70&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=70&h=70&fit=crop&crop=faces",
];

export function FinalCta() {
  return (
    <section className="final-cta">
      <span className="decor decor-circle decor-one" /><span className="decor decor-square decor-two" />
      <span className="decor decor-circle decor-three" /><span className="decor decor-sun" />
      <span className="decor decor-square decor-four" /><span className="decor decor-circle decor-five" />
      <div className="cta-content">
        <div className="cta-avatars">{tinyFaces.map((src) => <img src={src} alt="" key={src} />)}</div>
        <h2>What will you learn next?</h2>
        <p>Start with one course. Build from there.</p>
        <div className="cta-actions">
          <a className="button button-blue" href="#categories">Explore all courses</a>
          <a className="button button-white" href="#contact">Join Luma</a>
        </div>
      </div>
    </section>
  );
}
