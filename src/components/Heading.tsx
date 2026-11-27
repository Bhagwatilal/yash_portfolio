import { ElementType } from "react";

export type Part = [string, boolean?] | "br"; // [text, italic?] or a line break

/** Big heading whose words slide up from a mask when it scrolls into view. */
export default function Heading({ parts, as: Tag = "h2" }: { parts: Part[]; as?: ElementType }) {
  let n = 0;
  return (
    <Tag className="rv">
      {parts.map((p, k) =>
        p === "br" ? <br key={k} /> :
        p[0].split(/(\s+)/).map((t, j) =>
          !t.trim() ? t : (
            <span key={`${k}-${j}`} className={"w" + (p[1] ? " it" : "")}>
              <i style={{ transitionDelay: `${n++ * 80}ms` }}>{t}</i>
            </span>
          )
        )
      )}
    </Tag>
  );
}
