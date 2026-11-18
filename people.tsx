const people = [
  ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=360&h=420&fit=crop", "Students collaborating"],
  ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=360&h=420&fit=crop", "Teacher smiling"],
  ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=360&h=420&fit=crop", "Student portrait"],
  ["https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=360&h=420&fit=crop", "Team learning together"],
  ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=360&h=420&fit=crop", "Teacher portrait"],
  ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=360&h=420&fit=crop", "Workshop discussion"],
  ["https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=360&h=420&fit=crop", "Student portrait"],
  ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=360&h=420&fit=crop", "Student smiling"],
];

export function People() {
  return (
    <section className="people-section" id="people">
      <div className="section-shell people-inner">
        <div className="people-copy">
          <p className="eyebrow">The people</p>
          <h2>Meet international<br className="desktop-break" /> students &amp; teachers</h2>
          <p>
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac
            vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna
            hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <a className="button button-white button-small" href="#contact">Explore teachers and students</a>
        </div>
        <div className="people-collage" aria-label="Luma's international learning community">
          <span className="collage-disc" />
          {people.map(([src, alt], i) => (
            <div className={`people-tile tile-${i + 1}`} key={src}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
