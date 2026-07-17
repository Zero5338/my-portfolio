import type {
  Project,
  TechSkillGroup,
  EducationItem,
} from "../types/portfolio";

export const PROFILE = {
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

export const TECH_SKILLS: TechSkillGroup[] = [
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

export const PROJECTS: Project[] = [
  {
    name: "무빙(Moving24)",
    subtitle: "이사중개 O2O 플랫폼",
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
    role: "프론트엔드 개발 (단독 진행)",
    stack: {
      Frontend: ["React", "Storybook", "CSS Modules"],
      Infra: ["Chromatic"],
    },
    desc: "핀테크 스타트업 인턴으로 참여해 공통 컴포넌트 라이브러리 개발. Button·Input·Modal 등 12종 컴포넌트를 ARIA 기준에 맞게 구현.",
    metrics: [
      { label: "컴포넌트", value: "12종" },
      { label: "번들 사이즈 감소", value: "30%" },
      { label: "Accessibility", value: "100점" },
    ],
    problemSolving: [
      {
        problem: "컴포넌트마다 스타일 중복 작성으로 유지보수 비용 증가",
        solution:
          "CSS Modules 기반 공통 토큰(색상·간격) 시스템 설계, 재사용 가능한 스타일 유틸 추출",
        result: "신규 컴포넌트 개발 시간 약 40% 단축",
      },
      {
        problem: "키보드/스크린리더 사용자에 대한 접근성 미흡",
        solution:
          "WAI-ARIA 패턴 문서를 기준으로 포커스 트랩, role 속성 전면 재검토 및 적용",
        result: "Lighthouse Accessibility 점수 100점 달성",
      },
    ],
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

export const EDUCATION: EducationItem[] = [
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
