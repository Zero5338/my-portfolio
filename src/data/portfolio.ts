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
    period: "팀원 8명, 2025.02 — 2025.04 (10주)",
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
    name: "무빙",
    subtitle: "이사중개 O2O 플랫폼",
    period: "2025.02 — 2025.04, 2026.06 (11주)",
    role: "프론트엔드 개발 (팀원 8명)",
    stack: {},
    images: [
      "/moving/main.jpg",
      "/moving/userQuotes.jpg",
      "/moving/login.jpg",
      "/moving/findMover.jpg",
      "/moving/select-role.jpg",
      "/moving/moverQuotesRequested.jpg",
      "/moving/moverMyPage.jpg",
      "/moving/pendingReview.jpg",
    ],
    desc: "아토믹 디자인 패턴 · Storybook으로 컴포넌트를 체계화하고, ESLint · Prettier · Husky로 팀 컨벤션을 자동화하였으며, 리팩토링 과정의 버그 디버깅부터 Docker 기반 EC2 배포까지 전 과정을 경험하였습니다.",
    metrics: [
      { label: "캐싱 전략 검증", value: "5가지" },
      { label: "4G 기준 응답속도", value: "574ms" },
      { label: "작업 진행률 (기준 수립 후)", value: "10% → 90%" },
    ],
    contributions: [
      {
        title: "프론트엔드 초기 인프라 세팅",
        description: `프로젝트 초기, 가장 핵심으로 삼은 것은 프로젝트 전체를 관통하는 디자인 토큰 기반 설계였습니다. Tailwind Config에 CSS 변수 기반으로 black, grayscale, primary, secondary 등의 색상·간격 토큰을 정의해, 값을 하드코딩하지 않고 정해진 토큰 안에서 효율적으로 작업할 수 있는 기준을 마련했습니다.
        이 원칙은 인프라 설정 단계에서 끝나지 않았습니다. 이후 공통 컴포넌트를 개발할 때, 이미 정의된 토큰을 타입(BackgroundColorType 등)으로 매핑해 props를 설계함으로써, 팀원 누구나 정해진 값 안에서 편리하게 스타일을 적용하도록 이어졌습니다. 결국 하나의 설계 원칙이 인프라와 컴포넌트 개발을 하나로 이어준 것입니다.
        이 외에도 ESLint·Prettier·Husky로 코드 컨벤션을 통일하고, tsconfig paths(@/*)로 절대 경로를 지정해 파일 경로 가독성을 개선했습니다.`,
      },
      {
        title: "공통 컴포넌트 설계 및 개발",
        description: `공통 컴포넌트는 Atoms·Molecules·Organisms 단위로 계층을 나누어, 작은 요소부터 큰 단위까지 재사용성과 확장성을 확보하기 위해 Atomic Design 패턴을 도입해 개발했습니다.
        첫 번째 문제는 분류 기준의 부재였습니다. 팀원마다 Atoms·Molecules·Organisms의 경계를 다르게 판단해 어디까지를 공통 컴포넌트로 볼지 애매했고, 간단한 버튼까지 과도하게 컴포넌트화하면서 오히려 페이지 개발 단계에서 시간이 낭비되는 역효과가 발생했습니다. 결국 하루 치 작업을 전면 재작업해야 하는 상황까지 이어졌고, 이를 계기로 판단 기준을 플로우차트로 직접 정리해 팀에 공유했습니다. 이후 작업 진행률이 90%까지 상승했습니다.
        두 번째 문제는 타입 지정 범위였습니다. 너비는 full/half처럼 단순했지만, 색상처럼 경우의 수가 많은 속성은 어디까지 타입으로 지정해야 사용자가 편한지 기준이 없었습니다. 타입을 세분화할수록 개발 시간은 늘어나지만, 그만큼 사용 편의성이 비례해서 좋아지지는 않는다는 것을 확인했습니다. 결국 블루·그레이·화이트·블랙처럼 대표값 4가지로 제한하고, 나머지는 커스텀 타입으로 확장 가능하도록 절충안을 마련했습니다.
        이 과정에서, 완벽한 세분화보다 시간 대비 편의성의 균형점을 찾는 것이 더 합리적인 판단이라는 것을 배웠습니다.`,
      },
      {
        title: "API 설계 및 연동",
        description: `API 설계 및 연동에서 중점을 둔 것은, 프론트엔드 개발자이지만 백엔드 쿼리 결과를 이해하고 프론트에서 쓰기 좋은 형태로 직접 가공할 수 있어야 한다는 점이었습니다. 예를 들어 리뷰 조회 API는 mover, quoteMatch, moverQuote 등 여러 테이블에 걸쳐 중첩된 데이터베이스 조회 결과를, 화면에 바로 쓸 수 있도록 작성일자·기사님 이름·이사 종류 같은 필드로 깔끔하게 정리해 응답하도록 설계했습니다. 백엔드는 요청을 받아 처리하는 컨트롤러와 실제 데이터 로직을 담당하는 서비스 레이어로 역할을 나눴고, 프론트는 API 요청을 한곳에서 관리하는 axios 인스턴스를 만들어, 에러가 나면 axios 인스턴스에서 바로 해결할 수 있도록 하였습니다.
        이렇게 연동을 마친 뒤에는, API 호출이 곧 서버 비용이라는 점에 주목해 호출 횟수를 최소화할 수 있는 방법을 고민하기 시작했습니다. 이 고민은 이후 진행한 캐싱 전략 검증으로 이어졌습니다.`,
      },
      {
        title: "네트워크 데이터 속도 테스트 진행",
        description: `기사님 작성된 리뷰 페이지 작업 중, 리뷰가 1개일 때는 데이터가 즉시 반영됐지만 2개 이상 쌓이면 새로고침을 해도 데이터가 바로 넘어오지 않는 문제를 발견했습니다. 이를 개선하기 위해 데이터 호출 방식 다섯 가지를 직접 구현하며 비교 검증했습니다.
          이 문제에 접근하며 든 생각은, 유저가 리뷰를 작성할 때 이미 프론트가 그 데이터를 들고 서버로 전송한다는 점이었습니다. 그렇다면 작성된 리뷰 페이지에서 굳이 서버에 다시 요청해 데이터를 받아오지 않고, 방금 프론트가 보낸 데이터를 그대로 가로채 재사용하면 더 빠르게 화면에 반영할 수 있지 않을까 하는 가설을 세웠습니다. 여기에 더해 API 호출을 줄이면 서버 리소스와 네트워크 트래픽까지 아낄 수 있다는 점도 확인해보고 싶었습니다. 이 프로젝트에서 API를 설계하고 연동하는 목적은 이미 충분히 달성했다고 판단해, 이번 페이지는 캐시 기반 처리라는 기술적 시도에 집중해보기로 했습니다.
          먼저 setQueryData 단독 방식을 시도했지만, 로그아웃 후 재로그인하면 캐시가 초기화되며 리뷰 데이터가 사라지고, API를 호출하지 않은 탓에 기사님 마이페이지 이동에 필요한 값도 받아올 수 없었습니다. localStorage를 함께 써서 데이터를 남겨봤지만, 이는 로컬 PC에만 적용될 뿐 다른 기기에서 로그인하면 여전히 손실되는 근본적인 한계가 있었습니다.
          이어서 setQueryData에 invalidateQueries를 더해 API 호출을 병행해봤지만, 캐시와 최신 데이터가 두 번 반영되며 화면이 깜빡이는 리렌더링 문제가 생겼습니다. 여기에 staleTime을 함께 적용하자 중복 호출 없이 필요한 데이터를 한 번에 받아올 수 있었고, 반대로 setQueryData 없이 invalidateQueries만 사용해도 체감 속도와 정확도 모두 만족스러운 후보가 됐습니다.
          두 후보의 실제 응답 속도를 3G, 느린 4G 환경에서 측정한 결과, setQueryData를 함께 쓴 경우가 느린 4G 기준 574ms로 staleTime 단독(629ms)보다 근소하게 빨랐습니다. 하지만 이 페이지는 보안이나 결제처럼 데이터 정확성이 절대적으로 중요한 페이지는 아니었기에, 근소한 속도 차이보다 코드 복잡도를 낮추는 쪽을 택해 결국 setQueryData 없이 staleTime만 적용하는, 처음과 동일한 구조로 되돌아갔습니다.
          결과만 보면 원점으로 돌아온 셈이지만, "프론트가 이미 가진 데이터를 재사용하면 더 빠를 것"이라는 가설이 실제로는 재로그인·타 기기 접속 등 여러 변수 앞에서 성립하지 않는다는 걸 검증했다는 점, 그리고 다섯 가지 대안을 직접 비교한 근거를 바탕으로 결론을 냈다는 점에서 이전과는 다른 의미가 있었습니다.`,
      },
      {
        title: "기사님 마이페이지, 기사님 작성된 리뷰페이지 개발",
        description: `공통 컴포넌트와 API를 조합해 기사님 마이페이지, 완료된 리뷰 페이지를 구현했습니다. 특히 완료된 리뷰 페이지는 로딩이 끝난 뒤에만 빈 상태 여부를 판단하도록 설계해 화면이 깜빡이지 않도록 했고, 데이터가 없을 때도 "리뷰 작성하러 가기" 버튼을 배치해 사용자가 막다른 화면에서 멈추지 않고 다음 행동으로 이어지도록 UX를 신경 썼습니다.`,
      },
    ],
    problemSolving: [
      {
        problem:
          "Atomic Design 기반 공통 컴포넌트 설계 시, 분류 기준과 타입 지정 범위에 대한 팀 내 기준 부재로 재작업과 개발 지연 발생",
        action:
          "팀원마다 Atoms·Molecules·Organisms의 경계 판단이 달라 간단한 버튼까지 과도하게 컴포넌트화되며 하루 치 작업을 전면 재작업하는 상황이 발생. 이를 계기로 공통 컴포넌트 판단 기준을 플로우차트로 직접 정리해 팀에 공유. 이어서 색상 등 경우의 수가 많은 속성의 타입 지정 범위를 어디까지 세분화할지 고민, 블루·그레이·그린·옐로우처럼 대표값 4가지로 제한하고 나머지는 커스텀 타입으로 확장 가능하도록 절충안 마련.",
        analysis:
          "타입을 세분화할수록 개발 시간은 늘어나지만 사용 편의성이 비례해서 좋아지지 않는다는 점을 확인. 완벽한 세분화보다 시간 대비 편의성의 균형점을 찾는 것이 더 합리적인 판단이라는 결론에 도달.",
        result:
          "판단 기준 수립 후 작업 진행률 2일차 10% → 3일차 90% 상승, 타입 절충안으로 팀 전체 개발 생산성과 사용 편의성 동시 확보",
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
