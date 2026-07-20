import type { Project } from "../types/portfolio";

export function ProjectDetail({ proj }: { proj: Project }) {
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
        <div style={{ flex: 1, padding: "24px 28px" }}>
          {/* 헤더 */}
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
                  fontSize: "20px",
                  color: "#1C1814",
                  fontWeight: 700,
                }}
              >
                {proj.name}
              </h3>
              <p
                style={{ fontSize: "11px", color: "#7A7268", marginTop: "3px" }}
              >
                {proj.subtitle}
              </p>
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                color: "#7A7268",
              }}
            >
              {proj.period}
            </span>
          </div>

          {proj.role && (
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                color: proj.color,
                marginBottom: "16px",
              }}
            >
              ROLE · {proj.role}
            </p>
          )}

          <p
            style={{
              fontSize: "12px",
              color: "#1C1814",
              lineHeight: 1.75,
              marginBottom: "20px",
            }}
          >
            {proj.desc}
          </p>
          {proj.images && (
            <div style={{ marginBottom: "24px", breakInside: "avoid" }}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: proj.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "10px",
                }}
              >
                Screens
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "6px",
                }}
              >
                {proj.images.map((src, i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: "4 / 3",
                      border: "1px solid rgba(28,24,20,0.12)",
                      borderRadius: "2px",
                      overflow: "hidden",
                      background: "#fff",
                    }}
                  >
                    <img
                      src={src}
                      alt={`${proj.name} 스크린샷 ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* 주요 지표 */}
          {proj.metrics && (
            <div
              style={{
                display: "flex",
                marginBottom: "24px",
                border: "1px solid rgba(28,24,20,0.1)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              {proj.metrics.map((m, i) => (
                <div
                  key={m.label}
                  style={{
                    flex: 1,
                    padding: "14px 12px",
                    textAlign: "center",
                    borderLeft: i > 0 ? "1px solid rgba(28,24,20,0.1)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: proj.color,
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "8px",
                      color: "#7A7268",
                      marginTop: "4px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}
          {proj.problemSolving && (
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: proj.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "16px",
                }}
              >
                Problem Solving
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "26px",
                }}
              >
                {proj.problemSolving.map((ps, i) => (
                  <div
                    key={i}
                    style={{
                      paddingLeft: "16px",
                      borderLeft: `2px solid ${proj.color}30`,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "14px",
                        color: "#1C1814",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        marginBottom: "10px",
                      }}
                    >
                      {i + 1}. {ps.problem}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "10px",
                        color: proj.color,
                        fontWeight: 500,
                      }}
                    >
                      ✓ {ps.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 주요 성과 */}
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "16px",
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

          {/* 링크 */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              paddingTop: "14px",
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
