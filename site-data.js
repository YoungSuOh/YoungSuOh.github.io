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
      "id": "post-026",
      "title": "Array",
      "category": "Algorithm",
      "summary": "배열의 핵심 성질과 시간 복잡도(O(1) 접근, 끝 삽입/삭제, 중간 삽입/삭제 O(N))를 정리합니다.",
      "date": "2023-06-25",
      "tags": [
        "Array",
        "Data Structure",
        "Time Complexity"
      ],
      "link": "posts/Algorithm/array.html"
    },
    {
      "id": "post-027",
      "title": "Queue",
      "category": "Algorithm",
      "summary": "큐(Queue)의 FIFO 구조와 배열 기반 구현 시 head/tail 동작, 시간 복잡도를 정리합니다.",
      "date": "2023-06-30",
      "tags": [
        "Queue",
        "Data Structure",
        "FIFO"
      ],
      "link": "posts/Algorithm/queue.html"
    },
    {
      "id": "post-028",
      "title": "Deque",
      "category": "Algorithm",
      "summary": "Deque(덱)의 양방향 삽입/삭제 특성과 시간 복잡도, STL deque 사용 포인트를 정리합니다.",
      "date": "2023-07-01",
      "tags": [
        "Deque",
        "Data Structure",
        "STL"
      ],
      "link": "posts/Algorithm/deque.html"
    },
    {
      "id": "post-029",
      "title": "Greedy",
      "category": "Algorithm",
      "summary": "Greedy 알고리즘의 핵심 아이디어와 문제 접근 흐름(관찰, 증명, 구현)을 정리합니다.",
      "date": "2023-07-07",
      "tags": [
        "Greedy",
        "Algorithm",
        "Optimization"
      ],
      "link": "posts/Algorithm/greedy.html"
    },
    {
      "id": "post-030",
      "title": "Stack",
      "category": "Algorithm",
      "summary": "Stack의 LIFO 구조와 push/pop/isEmpty/isFull 동작, 스택 포인터 개념을 정리합니다.",
      "date": "2023-06-28",
      "tags": [
        "Stack",
        "Data Structure",
        "LIFO"
      ],
      "link": "posts/Algorithm/stack.html"
    },
    {
      "id": "post-031",
      "title": "Sort",
      "category": "Algorithm",
      "summary": "대표 정렬 알고리즘(Bubble, Selection, Insertion, Merge, Heap, Quick, Radix)의 특징과 복잡도를 정리합니다.",
      "date": "2023-07-10",
      "tags": [
        "Sort",
        "Algorithm",
        "Complexity"
      ],
      "link": "posts/Algorithm/sort.html"
    },
    {
      "id": "post-032",
      "title": "Binary Search",
      "category": "Algorithm",
      "summary": "정렬된 배열에서 탐색 범위를 절반씩 줄여가는 이분 탐색의 조건과 구현(반복/재귀)을 정리합니다.",
      "date": "2023-07-15",
      "tags": [
        "Binary Search",
        "Algorithm",
        "Search"
      ],
      "link": "posts/Algorithm/binary-search.html"
    },
    {
      "id": "post-033",
      "title": "Dynamic Programming (DP)",
      "category": "Algorithm",
      "summary": "DP의 핵심 개념(최적 부분 구조, 중복 부분 문제), Top-Down/Bottom-Up 접근과 대표 예제를 정리합니다.",
      "date": "2023-08-01",
      "tags": [
        "Dynamic Programming",
        "Algorithm",
        "DP"
      ],
      "link": "posts/Algorithm/dynamic-programming.html"
    },
    {
      "id": "post-034",
      "title": "DFS (Depth-First Search)",
      "category": "Algorithm",
      "summary": "DFS의 핵심 개념, 동작 방식(재귀/스택), 시간 복잡도와 사용 예시를 정리합니다.",
      "date": "2023-07-20",
      "tags": [
        "DFS",
        "Graph",
        "Traversal"
      ],
      "link": "posts/Algorithm/dfs.html"
    },
    {
      "id": "post-035",
      "title": "BFS (Breadth-First Search)",
      "category": "Algorithm",
      "summary": "BFS의 핵심 개념, 큐 기반 탐색, 최단 거리 문제에 적용하는 방법을 정리합니다.",
      "date": "2023-07-22",
      "tags": [
        "BFS",
        "Graph",
        "Shortest Path"
      ],
      "link": "posts/Algorithm/bfs.html"
    },
    {
      "id": "post-036",
      "title": "Floyd-Warshall",
      "category": "Algorithm",
      "summary": "모든 노드 쌍 최단 경로를 구하는 Floyd-Warshall 알고리즘의 핵심 원리와 점화식을 정리합니다.",
      "date": "2023-08-09",
      "tags": [
        "Floyd-Warshall",
        "Graph",
        "Dynamic Programming"
      ],
      "link": "posts/Algorithm/floyd-warshall.html"
    },
    {
      "id": "post-037",
      "title": "Two Pointer",
      "category": "Algorithm",
      "summary": "Two Pointer 기법의 핵심 아이디어, 자주 쓰는 패턴(양끝/슬라이딩 윈도우), 예제 코드를 정리합니다.",
      "date": "2023-08-15",
      "tags": [
        "Two Pointer",
        "Algorithm",
        "Sliding Window"
      ],
      "link": "posts/Algorithm/two-pointer.html"
    },
    {
      "id": "post-038",
      "title": "Disjoint Set & Union Find",
      "category": "Algorithm",
      "summary": "Disjoint Set과 Union-Find의 개념, 연산(make-set/union/find), 경로 압축과 union-by-rank 최적화를 정리합니다.",
      "date": "2023-08-30",
      "tags": [
        "Disjoint Set",
        "Union-Find",
        "Data Structure"
      ],
      "link": "posts/Algorithm/disjoint-set-union-find.html"
    },
    {
      "id": "post-039",
      "title": "Minimal Spanning Tree(최소 신장 트리)",
      "category": "Algorithm",
      "summary": "신장 트리/최소 신장 트리 개념과 Kruskal, Prim 알고리즘의 동작 방식 및 복잡도를 정리합니다.",
      "date": "2023-09-07",
      "tags": [
        "MST",
        "Kruskal",
        "Prim"
      ],
      "link": "posts/Algorithm/minimal-spanning-tree.html"
    },
    {
      "id": "post-040",
      "title": "Dijkstra",
      "category": "Algorithm",
      "summary": "하나의 시작점에서 모든 정점까지의 최단 거리를 구하는 Dijkstra 알고리즘과 DP 관점을 정리합니다.",
      "date": "2023-09-12",
      "tags": [
        "Dijkstra",
        "Shortest Path",
        "Graph"
      ],
      "link": "posts/Algorithm/dijkstra.html"
    },
    {
      "id": "post-041",
      "title": "Hash",
      "category": "Algorithm",
      "summary": "해시 자료구조의 개념, 충돌 처리(Chaining/Open Addressing), probing 전략과 구현 예제를 정리합니다.",
      "date": "2023-09-18",
      "tags": [
        "Hash",
        "Data Structure",
        "Hash Table"
      ],
      "link": "posts/Algorithm/hash.html"
    },
    {
      "id": "post-042",
      "title": "Bit Masking",
      "category": "Algorithm",
      "summary": "비트 연산으로 상태를 압축/관리하는 Bit Masking의 핵심 연산과 활용 패턴을 정리합니다.",
      "date": "2023-09-24",
      "tags": [
        "Bit Masking",
        "Bitwise",
        "Optimization"
      ],
      "link": "posts/Algorithm/bit-masking.html"
    },
    {
      "id": "post-043",
      "title": "슬라이딩 윈도우",
      "category": "Algorithm",
      "summary": "연속 구간 문제를 O(N)으로 푸는 Sliding Window 패턴과 구현 포인트를 정리합니다.",
      "date": "2023-09-30",
      "tags": [
        "Sliding Window",
        "Two Pointer",
        "Array"
      ],
      "link": "posts/Algorithm/sliding-window.html"
    },
    {
      "id": "post-044",
      "title": "SCC (Strongly Connected Component)",
      "category": "Algorithm",
      "summary": "방향 그래프에서 강한 연결 요소(SCC)의 개념과 Kosaraju/Tarjan 접근을 정리합니다.",
      "date": "2023-10-07",
      "tags": [
        "SCC",
        "Graph",
        "DFS"
      ],
      "link": "posts/Algorithm/scc.html"
    },
    {
      "id": "post-045",
      "title": "Ad Hoc",
      "category": "Algorithm",
      "summary": "정형화된 알고리즘보다 문제 관찰/구현력이 중요한 Ad Hoc 문제 접근법을 정리합니다.",
      "date": "2023-10-13",
      "tags": [
        "Ad Hoc",
        "Implementation",
        "Problem Solving"
      ],
      "link": "posts/Algorithm/ad-hoc.html"
    },
    {
      "id": "post-046",
      "title": "Back-Tracking",
      "category": "Algorithm",
      "summary": "탐색 중간에 조건을 위반하는 경로를 가지치기하는 Back-Tracking의 구조를 정리합니다.",
      "date": "2023-10-20",
      "tags": [
        "Backtracking",
        "DFS",
        "Recursion"
      ],
      "link": "posts/Algorithm/back-tracking.html"
    },
    {
      "id": "post-047",
      "title": "에라토스테네스의 체",
      "category": "Algorithm",
      "summary": "N 이하의 소수를 빠르게 구하는 에라토스테네스의 체 원리와 구현 방법을 정리합니다.",
      "date": "2023-10-26",
      "tags": [
        "Prime",
        "Sieve of Eratosthenes",
        "Math"
      ],
      "link": "posts/Algorithm/sieve-of-eratosthenes.html"
    },
    {
      "id": "post-048",
      "title": "위상 정렬(Topological Sort)",
      "category": "Algorithm",
      "summary": "방향 그래프의 선후 관계를 지키는 위상 정렬 개념과 indegree+queue 기반 구현을 정리합니다.",
      "date": "2023-11-04",
      "tags": [
        "Topological Sort",
        "Graph",
        "DAG"
      ],
      "link": "posts/Algorithm/topological-sort.html"
    },
    {
      "id": "post-049",
      "title": "Segment Tree",
      "category": "Algorithm",
      "summary": "구간 질의와 점 업데이트를 빠르게 처리하는 Segment Tree의 개념, 구성, 쿼리/업데이트 방식을 정리합니다.",
      "date": "2023-11-18",
      "tags": [
        "Segment Tree",
        "Range Query",
        "Data Structure"
      ],
      "link": "posts/Algorithm/segment-tree.html"
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
