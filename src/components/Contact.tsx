import { useState } from "react";
import Heading from "./Heading";
import "../styles/contact.css";

const EMAIL = "ahiryash.07@gmail.com";
const links: [string, string, string][] = [
  ["Phone", "+91-9604116711", "tel:+919604116711"],
  ["Email", EMAIL, "mailto:" + EMAIL],
  ["LinkedIn", "linkedin.com/in/yashahir", "https://www.linkedin.com/in/yashahir"],
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <section id="contact">
      <p className="mono fade">07 — Contact</p>
      <Heading parts={[["Let’s build something "], ["together.", true]]} />
      <div className="fade"><span className="em">{EMAIL} <button className="cp" onClick={copy}>{copied ? "Copied" : "Copy"}</button></span></div>
      <div className="cx">
        <ul className="fade">
          {links.map(([k, label, href]) => (
            <li key={k}><a href={href}><span className="mono">{k}</span><span>{label}</span><span>↗</span></a></li>
          ))}
        </ul>
        <div className="rot">
          <svg viewBox="0 0 150 150">
            <defs><path id="c" d="M75 75m-60 0a60 60 0 1 1 120 0a60 60 0 1 1-120 0" /></defs>
            <text><textPath href="#c">SAY HELLO · SAY HELLO · SAY HELLO · </textPath></text>
          </svg>
          <a href="#contact" aria-label="Say hello">→</a>
        </div>
      </div>
    </section>
  );
}
