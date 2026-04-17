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
    "Dev",
    "Troubleshooting",
    "Database",
    "DevOps / Infra",
    "System Design",
    "Algorithm"
  ],
  "posts": [
    {
      "id": "post-001",
      "title": "비관적 락 & 낙관적 락",
      "category": "Backend",
      "summary": "동시 수정 문제와 비관적 락·낙관적 락의 차이, SQL·JPA에서의 적용을 정리합니다.",
      "date": "2025-01-09",
      "tags": [
        "Concurrency",
        "JPA",
        "Database"
      ],
      "link": "posts/Backend/pessimistic-optimistic-lock.html"
    },
    {
      "id": "post-016",
      "title": "[Spring] SOLID",
      "category": "Backend",
      "summary": "Spring 관점에서 SOLID(단일 책임, 개방-폐쇄, 리스코프 치환, 인터페이스 분리, 의존관계 역전) 원칙을 예시 코드로 정리합니다.",
      "date": "2023-09-18",
      "tags": [
        "Spring",
        "SOLID",
        "OOP",
        "Design"
      ],
      "link": "posts/Backend/spring-solid.html"
    },
    {
      "id": "post-019",
      "title": "[Spring] Spring Container",
      "category": "Backend",
      "summary": "스프링 컨테이너의 역할, ApplicationContext, 생성자/Setter 주입, Bean 생명주기와 스코프를 정리합니다.",
      "date": "2023-09-20",
      "tags": [
        "Spring",
        "Container",
        "DI",
        "Bean"
      ],
      "link": "posts/Backend/spring-container.html"
    },
    {
      "id": "post-020",
      "title": "[Spring] Spring MVC (DispatcherServlet)",
      "category": "Backend",
      "summary": "DispatcherServlet이 요청을 받아 HandlerMapping/HandlerAdapter/ViewResolver를 거쳐 응답을 반환하는 Spring MVC 흐름을 정리합니다.",
      "date": "2023-09-20",
      "tags": [
        "Spring",
        "MVC",
        "DispatcherServlet",
        "Web"
      ],
      "link": "posts/Backend/spring-mvc-dispatcherservlet.html"
    },
    {
      "id": "post-021",
      "title": "[Spring] Spring Bean",
      "category": "Backend",
      "summary": "Spring Bean의 개념, 등록 방식(@Component/@Bean/XML), 사용 방법, 라이프사이클, Scope를 정리합니다.",
      "date": "2023-09-19",
      "tags": [
        "Spring",
        "Bean",
        "DI",
        "Scope"
      ],
      "link": "posts/Backend/spring-bean.html"
    },
    {
      "id": "post-022",
      "title": "[Spring] AOP(Aspect Oriented Programming)",
      "category": "Backend",
      "summary": "AOP의 핵심 개념(Aspect, Advice, Pointcut, JoinPoint, Weaving)과 Spring 프록시 기반 동작을 정리합니다.",
      "date": "2023-10-18",
      "tags": [
        "Spring",
        "AOP",
        "Aspect",
        "Proxy"
      ],
      "link": "posts/Backend/spring-aop.html"
    },
    {
      "id": "post-023",
      "title": "[Spring] DI (Dependency Injection)",
      "category": "Backend",
      "summary": "DI의 필요성과 효과, 생성자/필드/세터 주입 방식의 특징과 장단점을 코드 예시로 정리합니다.",
      "date": "2023-09-23",
      "tags": [
        "Spring",
        "DI",
        "OOP",
        "Testing"
      ],
      "link": "posts/Backend/spring-di.html"
    },
    {
      "id": "post-024",
      "title": "[Spring] Maven & Gradle",
      "category": "Backend",
      "summary": "Java/Spring 프로젝트에서 사용하는 Maven과 Gradle의 차이와 기본 의존성 선언 방법을 정리합니다.",
      "date": "2023-09-23",
      "tags": [
        "Spring",
        "Maven",
        "Gradle",
        "Build"
      ],
      "link": "posts/Backend/spring-maven-gradle.html"
    },
    {
      "id": "post-025",
      "title": "즉시 로딩(EAGER) vs 지연로딩(LAZY)",
      "category": "Backend",
      "summary": "JPA EAGER/LAZY 차이, N+1 문제와 LazyInitializationException, 실무에서의 LAZY 기본 전략과 Fetch Join 활용을 정리합니다.",
      "date": "2023-09-30",
      "tags": [
        "JPA",
        "Hibernate",
        "EAGER",
        "LAZY"
      ],
      "link": "posts/Backend/eager-vs-lazy-loading.html"
    },
    {
      "id": "post-004",
      "title": "Atomic Update",
      "category": "Database",
      "summary": "Read-modify-write 경쟁 조건(Lost Update)과, 검증·갱신을 한 번의 UPDATE로 묶는 Atomic Update 및 지갑·버전 조건까지 정리합니다.",
      "date": "2025-01-08",
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
    },
    {
      "id": "post-011",
      "title": "Java 정리 ① — 문자열·예외·제네릭",
      "category": "Java",
      "summary": "String 리터럴 vs new String, StringBuilder·StringBuffer, Exception·Error, throw·throws, finally, Throwable, 제네릭까지 정리합니다.",
      "date": "2024-03-27",
      "tags": [
        "Java",
        "String",
        "Exception",
        "Generics"
      ],
      "link": "posts/Java/java-notes-strings-exceptions-generics.html"
    },
    {
      "id": "post-012",
      "title": "Java 정리 ② — 람다·스트림·어노테이션·리플렉션",
      "category": "Java",
      "summary": "람다·함수형 인터페이스, Stream 중간·최종 연산, 어노테이션·메타 어노테이션, 리플렉션과 프레임워크 연결을 정리합니다.",
      "date": "2024-07-14",
      "tags": [
        "Java",
        "Lambda",
        "Stream",
        "Reflection"
      ],
      "link": "posts/Java/java-notes-lambda-stream-annotations.html"
    },
    {
      "id": "post-013",
      "title": "Java 정리 ③ — System.out.println과 성능",
      "category": "Java",
      "summary": "표준 출력의 I/O 비용, flush·synchronized, BufferedWriter·로깅 프레임워크 대안을 정리합니다.",
      "date": "2024-10-03",
      "tags": [
        "Java",
        "I/O",
        "Performance",
        "Logging"
      ],
      "link": "posts/Java/java-notes-system-out-depth.html"
    },
    {
      "id": "post-014",
      "title": "Outbox 패턴",
      "category": "System Design",
      "summary": "DB와 메시지 브로커 간 정합성 — 이벤트 유실·불일치 문제와 Outbox 테이블, 폴링·CDC 기반 전송 흐름을 정리합니다.",
      "date": "2026-03-14",
      "tags": [
        "Kafka",
        "Consistency",
        "Event-Driven"
      ],
      "link": "posts/System-Design/transactional-outbox-pattern.html"
    },
    {
      "id": "post-017",
      "title": "Builder 패턴",
      "category": "System Design",
      "summary": "생성 과정과 표현을 분리해 복잡한 객체를 단계적으로 만드는 Builder 패턴 — 필수·선택 속성, 장단점, Java 예시 코드.",
      "date": "2024-05-12",
      "tags": [
        "Design Pattern",
        "Builder",
        "Java"
      ],
      "link": "posts/System-Design/builder-pattern.html"
    },
    {
      "id": "post-018",
      "title": "PinterSemi 프로젝트 대댓글 기능",
      "category": "Dev",
      "summary": "댓글·대댓글을 프론트 DFS로만 묶으면 O(N²)에 가까운 렌더링 비용이 든다는 문제를, parentCommentSeq·WITH RECURSIVE·정렬로 DB에서 정리한 뒤 JS에서 트리로 만드는 과정을 정리합니다.",
      "date": "2024-10-03",
      "tags": [
        "PinterSemi",
        "MySQL",
        "Spring",
        "jQuery",
        "Comment"
      ],
      "link": "posts/Dev/pintersemi-nested-comments.html"
    },
    {
      "id": "post-015",
      "title": "OPay 동시성 테스트 & Trouble Shooting",
      "category": "Troubleshooting",
      "summary": "k6로 단일 상품 Hot Spot 부하 테스트, MySQL 데드락·커넥션 풀, 벌크 재고·Kafka·Transactional Outbox로 재고 확정을 분리한 과정을 정리합니다.",
      "date": "2026-03-18",
      "tags": [
        "OPay",
        "k6",
        "Concurrency",
        "Kafka",
        "MySQL"
      ],
      "link": "projects/opay/concurrency-testing.html"
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
