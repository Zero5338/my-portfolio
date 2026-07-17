import type { Project } from "../types/portfolio";

export function ProjectCard({ proj }: { proj: Project }) {
  return (
    <div
      style={{
        border: "1px solid rgba(28,24,20,0.12)",
        borderRadius: "2px",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ width: "4px", flexShrink: 0, background: proj.color }} />
        <div style={{ flex: 1, padding: "14px 16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "6px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "14px",
                  color: "#1C1814",
                  fontWeight: 600,
                }}
              >
                {proj.name}
              </h3>
              <p
                style={{ fontSize: "10px", color: "#7A7268", marginTop: "1px" }}
              >
                {proj.subtitle}
              </p>
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                color: "#7A7268",
                flexShrink: 0,
                marginLeft: "12px",
              }}
            >
              {proj.period}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {Object.entries(proj.stack).map(([groupName, items]) => (
              <div key={groupName}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "8px",
                    color: "#7A7268",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "5px",
                  }}
                >
                  {groupName}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {items.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "9px",
                        color: proj.color,
                        border: `1px solid ${proj.color}35`,
                        background: `${proj.color}08`,
                        padding: "2px 9px",
                        borderRadius: "99px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "11px",
              color: "#1C1814",
              lineHeight: 1.7,
              marginBottom: "8px",
            }}
          >
            {proj.desc}
          </p>

          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              marginBottom: "10px",
            }}
          >
            {proj.highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "6px",
                  fontSize: "10.5px",
                  color: "#4A4540",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: proj.color, flexShrink: 0 }}>▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              paddingTop: "10px",
              borderTop: "1px solid rgba(28,24,20,0.08)",
            }}
          >
            {typeof proj.github === "string" ? (
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#7A7268",
                }}
              >
                ⌥ {proj.github}
              </span>
            ) : (
              Object.entries(proj.github).map(([label, url]) => (
                <span
                  key={label}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "9px",
                    color: "#7A7268",
                  }}
                >
                  ⌥{" "}
                  <span style={{ color: proj.color, fontWeight: 500 }}>
                    {label}
                  </span>{" "}
                  {url}
                </span>
              ))
            )}
            {proj.live && (
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#7A7268",
                }}
              >
                ↗ {proj.live}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
