 "use client";

import { FormEvent, useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact-section section-shell" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>Get in touch</h2>
        <p>
          Have a question? We’re here to help. Whether you’re looking for the right course,
          learning with your team or interested in teaching with Luma, we’d love to hear from you.
        </p>
        <div className="contact-info">
          <div className="info-icon">✉</div>
          <span><strong>Email</strong><a href="mailto:contact@luma.com">contact@luma.com</a></span>
        </div>
        <div className="contact-info">
          <div className="info-icon">◷</div>
          <span><strong>Response time</strong><small>Up to 24 hours on business days</small></span>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Contact us</h3>
        <p>Fill out the fields and we will get in touch.</p>
        <label htmlFor="full-name">Full name</label>
        <input id="full-name" name="name" placeholder="Your name" required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@email.com" required />
        <label htmlFor="question">Your question</label>
        <textarea id="question" name="message" placeholder="Tell us how we can help..." rows={4} required />
        <button className="button button-blue form-submit" type="submit">Send message</button>
        {sent && <p className="form-success" role="status">Thanks! Your message is ready. This demo form does not send data to a server.</p>}
      </form>
    </section>
  );
}
