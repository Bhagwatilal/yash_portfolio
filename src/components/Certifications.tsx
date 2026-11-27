import Heading from "./Heading";
import { CE } from "../data/portfolio";
import "../styles/certifications.css";

export default function Certifications() {
  return (
    <section id="certs">
      <div className="cr">
        <div>
          <p className="mono fade">04 — Trainings</p>
          <Heading parts={[["Always "], ["learning.", true]]} />
          <p className="fade"><span className="mono">0{CE.length}</span> trainings and counting</p>
        </div>
        <ol className="cl fade">
          {CE.map((c, i) => (
            <li key={i}><a href="#"><span className="mono">0{i + 1}</span><span>{c[0]}</span><span className="mono">{c[1]}</span></a></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
