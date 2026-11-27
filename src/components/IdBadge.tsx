import { useState } from "react";
import photo from "../assets/yash.jpg";

const RUN = "YASH AHIR · SOC ANALYST · ";

/** Hanging ID card: flips on hover (tap on touch screens), strap text scrolls. */
export default function IdBadge() {
  const [flip, setFlip] = useState(false);
  return (
    <div className={"badge" + (flip ? " flip" : "")}
      onClick={() => { if (!matchMedia("(hover:hover)").matches) setFlip((f) => !f); }}>
      <div className="strap"><div className="st"><span>{RUN}</span><span>{RUN}</span></div></div>
      <div className="clip" />
      <div className="bw fade"><div className="bi">
        <div className="bc">
          <div className="hd">SOC PROFILE</div>
          <div className="ph" style={{ background: `url(${photo}) center/cover` }} />
          <b>Yash Ahir</b>
          <small>SOC Analyst (Entry-level)</small>
          <small style={{ opacity: 0.7 }}>MCA · 2025</small>
          <div className="bar" /><div className="mt" />
        </div>
        <div className="bk">
          <p className="mono" style={{ color: "#8d8d88" }}>What I am</p>
          <ul>
            <li>Entry-level SOC analyst: monitoring, threat detection, incident response</li>
            <li>MCA, GES R. H. Sapat College of Engineering (2025)</li>
            <li>Splunk, Wazuh, Wireshark, Burp Suite, Nmap</li>
            <li>Project: Wazuh SIEM lab mapped to MITRE ATT&amp;CK</li>
            <li>Training: PortSwigger AI &amp; LLM attacks, Android pentesting</li>
          </ul>
          <div className="sg">Yash Ahir</div>
          <div className="ft">If found, say hello · ahiryash.07@gmail.com</div>
        </div>
      </div></div>
    </div>
  );
}
