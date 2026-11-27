import { useState } from "react";
import Heading from "./Heading";
import { WK } from "../data/portfolio";
import "../styles/work.css";

export default function Work() {
  const [open, setOpen] = useState(0);
  return (
    <section id="work">
      <p className="mono fade">03 — Selected work</p>
      <Heading parts={[["Things I’ve "], ["built.", true]]} />
      <div className="wk">
        {WK.map((w, i) => (
          <article key={i} className={"wc" + (open === i ? " on" : "")} onClick={() => setOpen(i)}>
            <div className="vt">
              <span className="mono" style={{ writingMode: "initial", rotate: "none" }}>0{i + 1}</span>
              <span>{w[0]}</span><u>+</u>
            </div>
            <div className="bd">
              <p className="mono">0{i + 1} · {w[1]}</p>
              <h3>{w[0]}</h3>
              <p>{w[2]}</p>
              <div className="tg">
                {w[3].map((t) => <span key={t}>{t}</span>)}
                {w[4].map((t) => <span key={t} style={{ background: "var(--bg)" }}>{t}</span>)}
              </div>
              <div className="ui"><i /><i /><i /></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
