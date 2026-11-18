 "use client";

import { useState } from "react";

const links = [
  ["Courses", "#categories"],
  ["For Teams", "#featured"],
  ["Community", "#people"],
  ["About", "#how-it-works"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="logo" href="#" aria-label="Luma home">luma<span>.</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="mobile-actions">
            <a href="#contact" onClick={() => setOpen(false)}>Log in</a>
            <a className="button button-blue" href="#categories" onClick={() => setOpen(false)}>Start learning</a>
          </div>
        </nav>
        <div className="nav-actions">
          <a className="login-link" href="#contact">Log in</a>
          <a className="button button-blue nav-cta" href="#categories">Start learning</a>
        </div>
      </div>
    </header>
  );
}
