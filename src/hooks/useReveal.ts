import { useEffect } from "react";

/** Adds the "in" class to every .fade / .rv element the first time it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade,.rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
