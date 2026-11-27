import { useEffect, useRef, useState } from "react";

const ids = ["about", "skills", "work", "experience", "achievements", "contact"];
const labels = ["About", "Skills", "Work", "Experience", "Achievements", "Contact"];

/** Logo, nav pill with scroll-spy, and the top progress bar. */
export default function Navbar() {
  const [active, setActive] = useState(-1);
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const f = () => {
      const H = document.documentElement;
      bar.current!.style.transform = `scaleX(${scrollY / (H.scrollHeight - innerHeight || 1)})`;
      setTop(scrollY < 60);
      let a = -1;
      ids.forEach((id, i) => { if (document.getElementById(id)!.getBoundingClientRect().top < innerHeight * 0.4) a = i; });
      setActive(a);
    };
    f();
    addEventListener("scroll", f, { passive: true });
    addEventListener("resize", f);
    return () => { removeEventListener("scroll", f); removeEventListener("resize", f); };
  }, []);

  useEffect(() => { document.body.classList.toggle("top", top); }, [top]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    addEventListener("pointerdown", onDown);
    addEventListener("keydown", onKey);
    return () => { removeEventListener("pointerdown", onDown); removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <div id="bar" ref={bar} />
      <a className="logo" href="#hero" aria-label="Back to top">YA<span className="nm">Yash Ahir</span></a>
      <nav id="nav" ref={navRef} className={open ? "open" : ""}>
        <button
          type="button"
          className="nav-tgl"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span>{open ? "Close" : "Menu"}</span>
        </button>
        <div id="nav-links" className="nav-links">
          {ids.map((id, i) => (
            <a key={id} href={"#" + id} className={active === i ? "on" : ""} onClick={() => setOpen(false)}>
              {labels[i]}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
