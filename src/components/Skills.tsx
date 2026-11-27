import { useState } from "react";
import Heading from "./Heading";
import { SK, CU } from "../data/portfolio";
import { BRAND, GENERIC, FALLBACK } from "../data/skillIcons";
import "../styles/skills.css";

const cats = ["All", ...Array.from(new Set(SK.map((s) => s[2])))];

export default function Skills() {
  const [cur, setCur] = useState("All");
  const [sel, setSel] = useState(0);
  const s = SK[sel];
  const brand = BRAND[s[1]];
  const d = brand ? brand.path : GENERIC[FALLBACK[s[1]] || "shield"];
  const fill = brand && brand.hex !== "ink" ? "#" + brand.hex : "var(--ink)";
  return (
    <section id="skills" className="sk">
      <p className="mono fade">02 — Skills</p>
      <Heading parts={[["The periodic table of "], ["my stack.", true]]} />
      <div className="fl">
        {cats.map((c) => (
          <button key={c} className={c === cur ? "on" : ""} onClick={() => setCur(c)}>
            {c} <span style={{ opacity: 0.5 }}>{c === "All" ? SK.length : SK.filter((x) => x[2] === c).length}</span>
          </button>
        ))}
      </div>
      <div className="pt">
        <div className="tb">
          {SK.map((x, i) => (
            <button key={i} className={"el" + (i === sel ? " on" : "") + (cur !== "All" && x[2] !== cur ? " dim" : "")} onClick={() => setSel(i)}>
              <em>{i + 1}</em><b>{x[0]}</b><small>{x[1]}</small>
            </button>
          ))}
        </div>
        <aside className="dt">
          <div className="sw" key={sel}>
            <div className="sklogo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} fill={fill} fillRule="evenodd" /></svg></div>
            <p className="mono">{String(sel + 1).padStart(2, "0")} · {s[0]} · {s[2]}</p>
            <h3>{s[1]}</h3>
            <p className="mono">Used in</p>
            <p style={{ color: "var(--mut)", marginTop: 8 }}>• {CU[s[2]]}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
