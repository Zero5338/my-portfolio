import type { CSSProperties } from "react";
import { SectionLabel } from "./sectionLabel";
import { Project } from "./project";
import { PROFILE, TECH_SKILLS, EDUCATION, PROJECTS } from "../data/portfolio";

export function Page1({ print }: { print?: boolean }) {
  const pageStyle: CSSProperties = print
    ? {
        width: "210mm",
        minHeight: "297mm",
        padding: "14mm",
        background: "#FAF8F3",
        position: "relative",
        overflow: "hidden",
      }
    : {
        width: "794px",
        minHeight: "1123px",
        padding: "30px 56px",
        background: "#FAF8F3",
        position: "relative",
        overflow: "hidden",
      };

  return (
    <div
      className={`page ${
        print ? "" : "shadow-[0_8px_40px_rgba(28,24,20,0.16)]"
      }`}
      style={pageStyle}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "#8B2020",
        }}
      />
      <div style={{ position: "absolute", top: "28px", right: "40px" }}>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            color: "#7A7268",
            letterSpacing: "0.15em",
          }}
        >
          01 / 02
        </span>
      </div>

      <header
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "28px",
          marginBottom: "10px",
          paddingBottom: "28px",
          borderBottom: "1px solid rgba(28,24,20,0.12)",
        }}
      >
        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "4px",
            overflow: "hidden",
            flexShrink: 0,
            border: "1px solid rgba(28,24,20,0.12)",
          }}
        >
          <img
            src={PROFILE.photo}
            alt={PROFILE.name}
            style={{ width: "100%", height: "110%", objectFit: "cover" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              color: "#8B2020",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            {PROFILE.title}
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "42px",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1C1814",
                fontWeight: 700,
              }}
            >
              {PROFILE.name}
            </h1>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "14px",
                fontStyle: "italic",
                color: "#7A7268",
              }}
            >
              {PROFILE.nameEn}
            </span>
          </div>
          <p
            style={{
              marginTop: "6px",
              fontSize: "12px",
              color: "#7A7268",
              lineHeight: 1.5,
            }}
          >
            {PROFILE.tagline}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "flex-end",
            flexShrink: 0,
          }}
        >
          {[PROFILE.email, PROFILE.phone, PROFILE.github].map((val) => (
            <span
              key={val}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                color: "#7A7268",
              }}
            >
              {val}
            </span>
          ))}
        </div>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "186px 1fr",
          gap: "36px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <section>
            <SectionLabel number="01" label="소개" />
            <p style={{ fontSize: "11px", lineHeight: 1.85, color: "#1C1814" }}>
              {PROFILE.about}
            </p>
          </section>

          <section>
            <SectionLabel number="02" label="기술 스택" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              {TECH_SKILLS.map((group) => (
                <div key={group.category}>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "8px",
                      color: "#8B2020",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginBottom: "8px",
                    }}
                  >
                    {group.category}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        style={{
                          fontSize: "10px",
                          color: "#1C1814",
                          border: "1px solid rgba(28,24,20,0.18)",
                          padding: "4px 10px",
                          borderRadius: "99px",
                          background: "#fff",
                        }}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel number="03" label="학력" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    borderLeft: "2px solid #8B2020",
                    paddingLeft: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#1C1814",
                    }}
                  >
                    {edu.school}
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#7A7268",
                      marginTop: "2px",
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "8px",
                      color: "#7A7268",
                      marginTop: "3px",
                    }}
                  >
                    {edu.period} · {edu.note}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <section>
            <SectionLabel number="04" label="프로젝트" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <Project proj={PROJECTS[0]} />
              <Project proj={PROJECTS[1]} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
