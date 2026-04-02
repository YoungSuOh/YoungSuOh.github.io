window.BLOG_DATA = {
  "site": {
    "title": "YoungSuOh Dev Log",
    "subtitle": "I LOVE WHAT I DO",
    "description": "백엔드와 시스템 설계를 중심으로, 문제를 해결하며 성장하는 개발 기록입니다."
  },
  "navigation": [
    {
      "label": "Home",
      "href": "#home"
    },
    {
      "label": "About",
      "href": "#about"
    },
    {
      "label": "History",
      "href": "#history"
    },
    {
      "label": "Blog",
      "href": "#blog"
    },
    {
      "label": "Projects",
      "href": "#projects"
    },
    {
      "label": "Archive",
      "href": "#archive"
    },
    {
      "label": "Contact",
      "href": "#contact"
    },
    {
      "label": "Template",
      "href": "template.html"
    }
  ],
  "blogCategories": [
    "Backend",
    "System Design",
    "Database",
    "DevOps / Infra",
    "Algorithm",
    "Troubleshooting"
  ],
  "posts": [
    {
      "id": "post-001",
      "title": "Node.js 이벤트 루프 정리",
      "category": "Backend",
      "summary": "이벤트 루프와 non-blocking I/O의 실제 동작 흐름을 예제로 정리합니다.",
      "date": "2026-04-01",
      "tags": [
        "Node.js",
        "JavaScript",
        "Runtime"
      ],
      "link": "posts/nodejs-event-loop.html"
    },
    {
      "id": "post-002",
      "title": "대규모 트래픽에서 캐시 전략",
      "category": "System Design",
      "summary": "읽기 부하를 줄이기 위한 캐시 패턴(Cache Aside, Write Through)을 비교합니다.",
      "date": "2026-04-01",
      "tags": [
        "Cache",
        "Scalability"
      ],
      "link": "posts/cache-strategies-at-scale.html"
    },
    {
      "id": "post-003",
      "title": "인덱스 설계 실수 5가지",
      "category": "Database",
      "summary": "쿼리 플랜을 기반으로 인덱스 설계 시 자주 발생하는 문제를 점검합니다.",
      "date": "2026-04-01",
      "tags": [
        "MySQL",
        "Index",
        "SQL"
      ],
      "link": "posts/index-design-mistakes.html"
    }
  ],
  "projects": [
    {
      "name": "OPay",
      "description": "이벤트 기반 이커머스 결제 시스템 — Idempotency·동시성 제어·재고 정합성",
      "stack": [
        "Java",
        "Spring Boot",
        "Kafka",
        "MySQL",
        "Redis",
        "Prometheus",
        "Grafana",
        "k6",
        "React"
      ],
      "link": "projects/opay.html",
      "thumbnail": "photo/project/opay/OPAY_thumbnail.png",
      "period": "2026.01.26 ~ 현재"
    },
    {
      "name": "Dr-Rate",
      "description": "네이버 클라우드 캠프 Final — 은행 예금·적금 상품 검색/비교 금융 플랫폼",
      "stack": [
        "React",
        "Java",
        "Spring Boot",
        "Kafka",
        "MySQL",
        "MongoDB",
        "Redis",
        "Jenkins",
        "Docker"
      ],
      "link": "projects/dr-rate.html",
      "thumbnail": "photo/project/dr-rate/thumbnail.png",
      "period": "2024.11.06 ~ 2024.01.06"
    },
    {
      "name": "Hi-Buddy",
      "description": "인하대 종합설계 — 국제학생 커뮤니티 및 한국어 발음 평가 (Spring Boot, JWT, CLOVA)",
      "stack": [
        "Java",
        "Spring Boot",
        "MySQL",
        "AWS"
      ],
      "link": "projects/hi-buddy.html",
      "thumbnail": "photo/project/hi-buddy/thumbnail.png",
      "period": "2024.03.10 ~ 2024.06.18"
    },
    {
      "name": "출동 펫멘",
      "description": "UMC · 조깅·몬스터 포획 AR 안드로이드 앱 (Kotlin, Retrofit2)",
      "stack": [
        "Kotlin",
        "Android Studio",
        "GitHub"
      ],
      "link": "projects/chuldong-petmen.html",
      "thumbnail": "photo/project/chuldong-petmen/thumbnail.png",
      "period": "2023.06.02 ~ 2023.08.15"
    }
  ],
  "contacts": [
    {
      "type": "Email",
      "value": "paul9119298@gmail.com",
      "href": "mailto:paul9119298@gmail.com"
    },
    {
      "type": "GitHub",
      "value": "github.com/YoungSuOh",
      "href": "https://github.com/YoungSuOh"
    }
  ]
};
