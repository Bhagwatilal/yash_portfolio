import { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import heroVideo from "../assets/hero.mp4";
import "../styles/hero.css";

const Play = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
const Pause = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>;

export default function Hero() {
  const sec = useRef<HTMLElement>(null);
  const v = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false); // video file loaded
  const [on, setOn] = useState(false);       // true while the voice is playing

  // The avatar always plays, silently, in a loop; ensure hero text reveals on mount/HMR.
  useEffect(() => {
    const el = v.current!;
    el.muted = true;
    el.play().catch(() => {});
    const id = requestAnimationFrame(() => {
      sec.current?.querySelectorAll(".fade,.rv").forEach((n) => n.classList.add("in"));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const toggle = () => {
    const el = v.current!;
    if (!ready) { setOn((o) => !o); return; }
    if (on) { el.muted = true; setOn(false); }                                  // pause the voice, video keeps going
    else { el.currentTime = 0; el.muted = false; el.play().catch(() => {}); setOn(true); } // restart with voice
  };
  // when the clip ends with the voice on, go back to the silent loop
  const ended = () => { const el = v.current!; el.muted = true; el.currentTime = 0; el.play().catch(() => {}); setOn(false); };

  return (
    <section id="hero" ref={sec}>
      <div className="hero-stage">
        <div className="wm" aria-hidden="true">YASH</div>
        <div className="av">
          {!ready && (
            <div className={"stand" + (on ? " talk" : "")}>
              <small className="mono">Avatar video goes here</small><i /><b />
            </div>
          )}
          {/* replace src/assets/hero.mp4 to change the avatar video */}
          <video ref={v} src={heroVideo} autoPlay muted loop={!on} playsInline preload="auto"
            onLoadedData={() => setReady(true)} onEnded={ended} />
        </div>
        <button className="pp" aria-label={on ? "Pause voice" : "Play voice"} onClick={toggle}>{on ? <Pause /> : <Play />}</button>
      </div>
      <div className="hr mono"><div>MCA graduate · 2025</div><div>Open to SOC roles</div></div>
      <div className="hero-copy">
        <p className="mono fade">Entry-level · Security Operations</p>
        <Heading as="h1" parts={[["SOC"], "br", ["Analyst.", true]]} />
        <div className="btns fade">
          <a className="btn p" href="#work">Explore work</a>
          <a className="btn" href="#contact">Let’s talk</a>
          <a className="btn" href="/Yash_Ahir_Resume.pdf" download>Résumé ↓</a>
        </div>
      </div>
    </section>
  );
}
