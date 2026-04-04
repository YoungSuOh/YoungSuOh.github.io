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
      "title": "비관적 락 & 낙관적 락",
      "category": "Backend",
      "summary": "동시 수정 문제와 비관적 락·낙관적 락의 차이, SQL·JPA에서의 적용을 정리합니다.",
      "date": "2026-04-03",
      "tags": [
        "Concurrency",
        "JPA",
        "Database"
      ],
      "link": "posts/pessimistic-optimistic-lock.html"
    },
    {
      "id": "post-004",
      "title": "Atomic Update",
      "category": "Database",
      "summary": "Read-modify-write 경쟁 조건(Lost Update)과, 검증·갱신을 한 번의 UPDATE로 묶는 Atomic Update 및 지갑·버전 조건까지 정리합니다.",
      "date": "2026-04-03",
      "tags": [
        "SQL",
        "Concurrency",
        "Transaction"
      ],
      "link": "posts/atomic-update.html"
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
      "period": "2024.11.06 ~ 2025.01.06"
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
