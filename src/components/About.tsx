import Heading from "./Heading";
import IdBadge from "./IdBadge";
import "../styles/about.css";

const facts: [string, string][] = [
  ["Focus", "SOC operations, threat detection, incident response"],
  ["Education", "MCA, GES R. H. Sapat College of Engineering (2023–2025)"],
  ["Also", "B.Sc Computer Science, ACS College, Navapur"],
  ["Email", "ahiryash.07@gmail.com"],
];

export default function About() {
  return (
    <section id="about">
      <div className="ab">
        <div>
          <p className="mono fade">01 — About me</p>
          <Heading parts={[["Hi, I’m "], ["Yash.", true]]} />
          <p className="lead fade">
            Entry-level SOC analyst with hands-on experience in security monitoring, threat detection, vulnerability
            assessment and incident response. I work with SIEM tools, endpoint security and penetration testing
            fundamentals, and I’m looking for a SOC role where I can monitor threats in real time and learn from senior analysts.
          </p>
          <div className="btns fade" style={{ marginTop: 30 }}>
            <a className="btn p" href="/Yash_Ahir_Resume.pdf" download>Résumé</a>
            <a className="btn" href="mailto:ahiryash.07@gmail.com">Email</a>
            <a className="btn" href="https://www.linkedin.com/in/yashahir">LinkedIn</a>
          </div>
        </div>
        <IdBadge />
        <div className="qcol">
          <p className="mono fade" style={{ marginBottom: 14 }}>Quick facts</p>
          <div className="qf fade">
            {facts.map(([k, v]) => <div key={k}><span className="mono">{k}</span><span>{v}</span></div>)}
          </div>
          <p className="quote fade">Built a Wazuh SIEM lab and mapped detections <span className="it">to MITRE ATT&amp;CK.</span></p>
        </div>
      </div>
    </section>
  );
}
