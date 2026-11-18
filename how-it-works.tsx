const steps = [
  { title: "Choose your focus", text: "Find courses based on the skill you want to build, not endless content categories.", shape: "shape-blue" },
  { title: "Learn from experience", text: "Follow concise lessons created by professionals who use these skills.", shape: "shape-coral" },
  { title: "Put it into practice", text: "Every course includes practical exercises designed to turn knowledge into action.", shape: "shape-yellow" },
];

export function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-shell">
        <div className="center-heading">
          <p className="eyebrow">How Luma works</p>
          <h2>Less browsing. More learning.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <article className="step-card" key={step.title}>
              <span className={`step-shape ${step.shape}`} />
              <p className="step-label">Step 0{i + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
