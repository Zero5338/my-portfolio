import { useEffect } from "react";
import type { CSSProperties } from "react";
import { Printer } from "lucide-react";

/* ─────────────────────────────────────────
   데이터 — 이 부분만 수정하세요
───────────────────────────────────────── */
const PROFILE = {
  name: "김태훈",
  nameEn: "Kim tae-hoon",
  title: "Frontend Developer",
  tagline: "개발을 통해 일상의 변화를 추구하는 프론트엔드 개발자",
  email: "ghost111789@gmail.com",
  phone: "+82 10-3046-8656",
  github: "https://github.com/Zero5338",
  blog: "https://velog.io/@taehoon1195/posts",
  photo: "/profileImg.jpg",
  about: `기술을 통한 진보로 일상의 변화를 추구합니다. 저는 개발을 단순한 기능 구현을 넘어서, 사람들의 일상을 바꾸는 도구를 만드는 일이라고 생각합니다. 작은 기능 하나가 누군가의 일상을 더 편하고 즐겁게 만들 수 있다는 믿음으로 개발하고 있으며, 그 기술이 만들어내는 '변화'에 집중하는 개발자입니다.`,
};

const TECH_SKILLS = [
  {
    category: "Core",
    items: [{ name: "JavaScript" }, { name: "TypeScript" }],
  },
  {
    category: "Framework",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TanStack Query" },
      { name: "React Hook Form" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "API / Infra",
    items: [
      { name: "RESTful API" },
      { name: "Axios" },
      { name: "AWS S3" },
      { name: "AWS EC2" },
    ],
  },
  {
    category: "Tooling",
    items: [
      { name: "GitHub" },
      { name: "Storybook" },
      { name: "Figma" },
      { name: "ESLint" },
      { name: "Prettier" },
    ],
  },
];

const PROJECTS = [
  {
    name: "무빙(Moving24)",
    subtitle: "이사중개 o2o 플랫폼",
    period: "팀원 8명, 2025.03 — 2025.04 (6주)",
    stack: {
      Frontend: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "react-hook-form",
        "RESTful API",
        "Axios",
      ],
      Backend: ["Express.js", "Prisma ORM", "PostgreSQL", "JWT"],
      Infra: ["EC2", "RDS", "S3", "Docker"],
      Collaboration: [
        "Storybook",
        "GitHub",
        "Google WBS",
        "ESLint",
        "Prettier",
        "Husky",
      ],
    },
    desc: "이사 업체와 고객을 매칭하는 O2O 견적 플랫폼입니다. 기존 시장의 불투명한 가격 문제와 신뢰할 수 있는 업체 선정의 어려움을 해결하기 위해 기획되었으며, Next.js와 Atomic Design을 도입해 유지보수성과 사용자 경험을 중점으로 개발하였습니다.",
    highlights: [
      "공통 컴포넌트 설계 및 개발",
      "프론트엔드 초기 인프라 세팅",
      "API 설계 및 연동",
      "네트워크 데이터 속도 테스트 진행",
      "기사님 마이페이지, 기사님 작성된 리뷰페이지 개발",
    ],
    github: {
      FE: "github.com/Zero5338/moving-refactoring-FE",
      BE: "github.com/Zero5338/moving-refactoring-BE",
    },
    live: "https://moving24.duckdns.org/",
    color: "#2D5BE3",
  },
  {
    name: "무빙 인프라 리팩토링",
    subtitle: "팀프로젝트 무빙 인프라관련 업데이트 및 재배포 리팩토링",
    period: "2026.06 (4주)",
    stack: {
      Infra: ["Docker", "AWS S3", "AWS EC2"],
    },
    desc: "무빙 재배포를 위한 인프라관련 세팅 변경 및 환경변수 관련 이슈 디버깅 및 문제해결",
    highlights: [
      "AWS S3 소유권 변경 후 CloudFront환경변수 불일치 이슈 원인 분석 및 재설정으로 해결",
      "AWS EC2설정 및 배포 후 커스텀도메인(DNS) 연결로 서비스 접근성 개선",
      "Docker 도입에 따른 서비스 간 통신 주소 변경 - 관련 설정 일괄 정비",
    ],
    github: {
      FE: "github.com/Zero5338/moving-refactoring-FE",
      BE: "github.com/Zero5338/moving-refactoring-BE",
    },
    live: "https://moving24.duckdns.org/",
    color: "#16A34A",
  },
  {
    name: "UIKit",
    subtitle: "사내 디자인 시스템 (인턴십)",
    period: "2023.07 — 2023.08",
    stack: {
      Frontend: ["React", "Storybook", "CSS Modules"],
      Infra: ["Chromatic"],
    },
    desc: "핀테크 스타트업 인턴으로 참여해 공통 컴포넌트 라이브러리 개발. Button·Input·Modal 등 12종 컴포넌트를 ARIA 기준에 맞게 구현.",
    highlights: [
      "12종 컴포넌트 Storybook 문서화 및 Chromatic 시각적 회귀 테스트",
      "ARIA 패턴 준수 — 키보드 내비게이션·스크린리더 호환",
      "번들 사이즈 30% 감소 (tree-shaking 적용)",
    ],
    github: "github.com/seojunlee/uikit",
    live: null,
    color: "#8B2020",
  },
];

const EXPERIENCE = [
  {
    company: "FinUp (핀업)",
    role: "Frontend Developer Intern",
    period: "2023.07 — 2023.08",
    location: "Seoul · 정규직 전환 제안",
    bullets: [
      "공통 UI 컴포넌트 라이브러리 12종 개발 및 Storybook 문서화",
      "레거시 class component → functional component + hooks 마이그레이션 (8개 파일)",
      "팀 코드리뷰 참여 — PR 16건 리뷰·반영",
    ],
  },
];

const EDUCATION = [
  {
    school: "배재대학교",
    degree: "무역물류학 전공",
    period: "2020 — 2024",
    note: "GPA 3.7 / 4.5",
  },
  {
    school: "코드잇 풀스택 부트캠프 (8개월)",
    degree: "React & TypeScript 심화 과정",
    period: "2024.09 - 2025.04",
    note: "수료",
  },
];

// const CERTIFICATIONS = [
//   { name: "정보처리기사", issuer: "한국산업인력공단", year: "2023" },
//   {
//     name: "AWS Cloud Practitioner",
//     issuer: "Amazon Web Services",
//     year: "2024",
//   },
// ];

/* ─────────────────────────────────────────
   컴포넌트
───────────────────────────────────────── */
function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[9px] text-accent tracking-widest font-medium"
      >
        {number}
      </span>
      <div className="h-px flex-1 bg-border" />
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[9px] text-muted-foreground tracking-widest uppercase font-medium"
      >
        {label}
      </span>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        @page { size: A4; margin: 0; }
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .no-print { display: none !important; }
        .page {
          box-shadow: none !important;
          page-break-after: always;
          break-after: page;
        }
        .page:last-of-type {
          page-break-after: avoid;
          break-after: avoid;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="bg-background"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-3 rounded-sm shadow-lg text-[13px] font-medium transition-opacity hover:opacity-80"
          style={{
            background: "var(--accent)",
            color: "var(--accent-foreground)",
          }}
        >
          <Printer size={15} />
          PDF로 저장
        </button>
      </div>

      <div className="no-print-wrapper flex flex-col items-center gap-8 py-12">
        <Page1 />
        <Page2 />
      </div>

      <div className="hidden print:block">
        <Page1 print />
        <Page2 print />
      </div>

      <style>{`
        @media screen {
          .hidden.print\\:block { display: none; }
        }
        @media print {
          .no-print-wrapper { display: none; }
          .hidden.print\\:block { display: block !important; }
        }
      `}</style>
    </div>
  );
}

function Page1({ print }: { print?: boolean }) {
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
          marginBottom: "32px",
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
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
          {[
            PROFILE.email,
            PROFILE.phone,
            // PROFILE.location,
            PROFILE.github,
            PROFILE.blog,
          ].map((val) => (
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

          {/* <section>
            <SectionLabel number="04" label="자격증" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#1C1814",
                    }}
                  >
                    {cert.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "8px",
                      color: "#7A7268",
                      marginTop: "2px",
                    }}
                  >
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </section> */}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* <section>
            <SectionLabel number="04" label="경력" />
            {EXPERIENCE.map((exp, i) => (
              <div key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "15px",
                        color: "#1C1814",
                        fontWeight: 600,
                      }}
                    >
                      {exp.company}
                    </h3>
                    <p
                      style={{
                        fontSize: "11.5px",
                        color: "#8B2020",
                        fontWeight: 500,
                        marginTop: "2px",
                      }}
                    >
                      {exp.role}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "9px",
                        color: "#7A7268",
                      }}
                    >
                      {exp.period}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "8px",
                        color: "#7A7268",
                        marginTop: "2px",
                      }}
                    >
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: "8px",
                        fontSize: "11.5px",
                        color: "#1C1814",
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: "#8B2020", flexShrink: 0 }}>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section> */}

          <section>
            <SectionLabel number="04" label="프로젝트" />
            <ProjectCard proj={PROJECTS[0]} />
            <ProjectCard proj={PROJECTS[1]} />
          </section>
        </div>
      </div>
    </div>
  );
}

function Page2({ print }: { print?: boolean }) {
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

      <SectionLabel number="06" label="프로젝트 상세 (계속)" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "36px",
        }}
      >
        {/* <ProjectCard proj={PROJECTS[1]} /> */}
        <ProjectCard proj={PROJECTS[2]} />
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
            "코드 한 줄이 수백만 명의 경험을 바꿀 수 있다는 것, 그게
            프론트엔드가 재미있는 이유입니다."
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p
            style={{ fontSize: "10px", color: "#7A7268", marginBottom: "4px" }}
          ></p>
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

function ProjectCard({ proj }: { proj: (typeof PROJECTS)[0] }) {
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
                  {(items as string[]).map((s) => (
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
                  {url as string}
                </span>
              ))
            )}
            {proj.live ? (
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#7A7268",
                }}
              >
                ↗ {proj.live}
              </span>
            ) : (
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#7A7268",
                  fontStyle: "italic",
                }}
              ></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
