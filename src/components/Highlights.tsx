import { CSSProperties, useEffect, useRef, useState } from "react";
import { HN } from "../data/portfolio";
import { HI } from "../data/highlightIcons";
import "../styles/highlights.css";

/** Number that counts up once `run` becomes true. */
function Count({ to, u, run }: { to: number; u: string; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const t0 = performance.now();
    let id = 0;
    const f = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      setV(+(to * (1 - Math.pow(1 - p, 3))).toFixed(to % 1 ? 2 : 0));
      if (p < 1) id = requestAnimationFrame(f);
    };
    id = requestAnimationFrame(f);
    return () => cancelAnimationFrame(id);
  }, [run, to]);
  return <div className="n">{u === "$" ? "$" + v.toLocaleString() : v + u}</div>;
}

/** Pinned section: vertical scroll slides the cards sideways. */
export default function Highlights() {
  const sec = useRef<HTMLElement>(null);
  const trk = useRef<HTMLDivElement>(null);
  const ul = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const [counted, setCounted] = useState<number[]>([]);

  useEffect(() => {
    const f = () => {
      const r = sec.current!.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -r.top / (sec.current!.offsetHeight - innerHeight)));
      ul.current!.style.setProperty("--p", String(p));
      const t = trk.current!;
      t.style.transform = `translateX(${-p * (t.scrollWidth - innerWidth)}px)`;
      let best = 0, bd = 1e9;
      Array.from(t.children).forEach((c, i) => {
        const b = c.getBoundingClientRect();
        const d = Math.abs(b.left + b.width / 2 - innerWidth / 2);
        if (d < bd) { bd = d; best = i; }
      });
      setActive(r.top < innerHeight && r.bottom > 0 ? best : -1);
      if (r.top < innerHeight * 0.3) setCounted((c) => (c.includes(best) ? c : [...c, best]));
    };
    f();
    addEventListener("scroll", f, { passive: true });
    addEventListener("resize", f);
    return () => { removeEventListener("scroll", f); removeEventListener("resize", f); };
  }, []);

  return (
    <section id="achievements" className="hon" ref={sec}>
      <div className="stk">
        <p className="mono">06 — Highlights &amp; scores</p>
        <h2>Highlights &amp; <span className="it">scores.</span></h2>
        <div className="ul" ref={ul}><i /></div>
        <div className="trk" ref={trk}>
          {HN.map((h, i) => {
            const ic = HI[h.icon];
            return (
              <div key={i} className={"hc" + (active === i ? " on" : "")} style={{ "--g": ic.color } as CSSProperties}>
                <div className="hc-top">
                  <div className="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={ic.path} fill={ic.color} /></svg></div>
                  <span className="mono">0{i + 1} / 0{HN.length}</span>
                </div>
                <div className="hc-body">
                  {h.num !== undefined && <Count to={h.num} u={h.unit!} run={counted.includes(i)} />}
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                  <p className="hx">{h.detail}</p>
                </div>
              </div>
            );
          })}
          <div className="more">and counting <b>→</b></div>
        </div>
      </div>
    </section>
  );
}
