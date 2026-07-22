import type { CSSProperties } from "react";
import { SectionLabel } from "./sectionLabel";
import { ProjectDetail } from "./projectDetail";
import { PROFILE, PROJECTS } from "../data/portfolio";

export function Page2({ print }: { print?: boolean }) {
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
        padding: "60px 56px",
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          paddingBottom: "20px",
          borderBottom: "1px solid rgba(28,24,20,0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "14px",
              fontStyle: "italic",
              color: "#7A7268",
            }}
          >
            {PROFILE.name}
          </span>
          <span style={{ color: "rgba(28,24,20,0.2)" }}>·</span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              color: "#7A7268",
              letterSpacing: "0.1em",
            }}
          >
            Frontend Developer
          </span>
        </div>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            color: "#7A7268",
            letterSpacing: "0.15em",
          }}
        >
          02 / 02
        </span>
      </div>

      <SectionLabel number="06" label="프로젝트 상세" />
      <div style={{ marginBottom: "36px" }}>
        <ProjectDetail proj={PROJECTS[2]} />
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "28px",
          borderTop: "1px solid rgba(28,24,20,0.12)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          <div
            style={{
              width: "24px",
              height: "2px",
              background: "#8B2020",
              marginBottom: "12px",
            }}
          />
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "14px",
              fontStyle: "italic",
              lineHeight: 1.65,
              color: "#1C1814",
              maxWidth: "340px",
            }}
          >
            "개발을 통해 일상의 변화를 추구하는 프론트엔드 개발자 김태훈입니다."
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "13px", color: "#8B2020", fontWeight: 500 }}>
            {PROFILE.email}
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: "#7A7268",
              marginTop: "3px",
            }}
          >
            {PROFILE.github}
          </p>
        </div>
      </div>
    </div>
  );
}
