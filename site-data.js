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
    "Java",
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
      "link": "posts/Backend/pessimistic-optimistic-lock.html"
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
      "link": "posts/Database/atomic-update.html"
    },
    {
      "id": "post-005",
      "title": "자바 기본 — 특징·단점·실행 과정·JVM",
      "category": "Java",
      "summary": "OOP·JVM·GC·멀티스레드, 단점, 실행 4단계, JVM 구조·클래스 로딩(로딩·링킹·초기화)·실행 엔진·GC까지 정리합니다.",
      "date": "2023-09-14",
      "tags": [
        "Java",
        "JVM",
        "OOP"
      ],
      "link": "posts/Java/java-fundamentals-jvm.html"
    },
    {
      "id": "post-006",
      "title": "Java ByteCode와 Interpreter vs JIT",
      "category": "Java",
      "summary": "바이트코드(.class) 생성·실행 예시, 인터프리터와 JIT 컴파일러의 역할과 트레이드오프를 정리합니다.",
      "date": "2023-11-27",
      "tags": [
        "Java",
        "JVM",
        "Bytecode"
      ],
      "link": "posts/Java/java-bytecode-interpreter-jit.html"
    },
    {
      "id": "post-007",
      "title": "Java 8·11·17과 JDK / JRE",
      "category": "Java",
      "summary": "실사용 Java 11·17, 버전별 핵심 기능(람다·HTTP Client·sealed 등), JDK와 JRE 구성 비교표입니다.",
      "date": "2024-02-08",
      "tags": [
        "Java",
        "JDK",
        "LTS"
      ],
      "link": "posts/Java/java-versions-jdk-jre.html"
    },
    {
      "id": "post-008",
      "title": "동일성·동등성·타입·Call by Value",
      "category": "Java",
      "summary": "==와 equals, hashCode, toString, static main, 리터럴/상수, 기본형·참조형, 오토박싱 성능, 값 전달 semantics.",
      "date": "2024-05-19",
      "tags": [
        "Java",
        "Object",
        "Memory"
      ],
      "link": "posts/Java/java-equality-types-call-by-value.html"
    },
    {
      "id": "post-009",
      "title": "Java Serialization",
      "category": "Java",
      "summary": "직렬화·역직렬화 개념, 필요 이유, ObjectOutputStream/ObjectInputStream 예제와 실무 주의사항을 정리합니다.",
      "date": "2024-09-03",
      "tags": [
        "Java",
        "IO",
        "Serialization"
      ],
      "link": "posts/Java/java-serialization.html"
    },
    {
      "id": "post-010",
      "title": "자바 객체 지향 — 오버로딩·상속·인터페이스·final",
      "category": "Java",
      "summary": "오버로딩/오버라이딩, 다형성, 상속 vs 조합, instanceof, 인터페이스 vs 추상 클래스, final 키워드까지 정리합니다.",
      "date": "2024-12-11",
      "tags": [
        "Java",
        "OOP",
        "Design"
      ],
      "link": "posts/Java/java-oop-polymorphism-interface.html"
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
      "link": "projects/opay/index.html",
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
      "link": "projects/dr-rate/index.html",
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
      "link": "projects/hi-buddy/index.html",
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
      "link": "projects/chuldong-petmen/index.html",
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
