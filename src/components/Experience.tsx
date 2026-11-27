import { useEffect, useRef } from "react";
import Heading from "./Heading";
import { TL } from "../data/portfolio";
import "../styles/experience.css";

export default function Experience() {
  const wrap = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLElement>(null);

  useEffect(() => {
    // light up each timeline dot when its card crosses the middle of the screen
    const observers = Array.from(wrap.current!.querySelectorAll(".ti")).map((el) => {
      const o = new IntersectionObserver(
        ([x]) => x.target.classList.toggle("act", x.isIntersecting || x.boundingClientRect.top < 0),
        { rootMargin: "-45% 0px -45% 0px" }
      );
      o.observe(el);
      return o;
    });
    // vertical line fills as you scroll
    const f = () => {
      const r = wrap.current!.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (innerHeight * 0.55 - r.top) / r.height));
      fill.current!.style.transform = `scaleY(${p})`;
    };
    f();
    addEventListener("scroll", f, { passive: true });
    return () => { observers.forEach((o) => o.disconnect()); removeEventListener("scroll", f); };
  }, []);

  return (
    <section id="experience">
      <p className="mono fade">05 — Experience</p>
      <Heading parts={[["Where I’ve "], ["been.", true]]} />
      <div className="tlw" ref={wrap}>
        <div className="tll"><i ref={fill} /></div>
        {TL.map((t, i) => (
          <div key={i} className="ti fade">
            <p className="mono">0{i + 1} · {t[0]}</p>
            <h3>{t[1]}</h3>
            <p>{t[2]}</p>
            <p className="mono" style={{ marginTop: 6 }}>{t[3]}</p>
            {t[4] && <ul>{t[4].map((x) => <li key={x}>{x}</li>)}</ul>}
          </div>
        ))}
        <div className="ti nx fade"><p className="mono">Next</p><h3>Your team<span className="it">?</span></h3></div>
      </div>
    </section>
  );
}
