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
    "Algorithm",
    "Computer Science",
    "Claude"
  ],
  "posts": [
    {
      "id": "post-077",
      "title": "Claude 실전 사용법",
      "category": "Claude",
      "summary": "Claude Code CLI 명령어, 슬래시 커맨드, CLAUDE.md, MCP 연결, Hooks 자동화, 권한 제어, 비용 최적화까지 — 개발자가 실무에서 바로 써먹을 수 있는 패턴을 정리합니다.",
      "date": "2026-04-16",
      "tags": [
        "Claude",
        "Claude Code",
        "CLI",
        "MCP",
        "Developer Tools"
      ],
      "link": "posts/Claude/claude-practical-guide.html"
    },
    {
      "id": "post-076",
      "title": "Claude & Claude Code 완벽 가이드",
      "category": "Claude",
      "summary": "Claude(대화형 AI)와 Claude Code(에이전트형 코딩 도구)의 모델 라인업·인터페이스·Tool Use부터 설치, 슬래시 명령, MCP, 보안·비용 통제까지 처음 도입하는 개발자를 위해 한 번에 정리합니다.",
      "date": "2026-04-15",
      "tags": [
        "Claude",
        "Claude Code",
        "MCP",
        "AI",
        "Developer Tools"
      ],
      "link": "posts/Claude/claude-and-claude-code-guide.html"
    },
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
      "id": "post-078",
      "title": "Ad Hoc",
      "category": "Algorithm",
      "summary": "정형화된 알고리즘보다 문제 해석/구현 디테일이 핵심인 유형",
      "date": "2023-10-13",
      "tags": [
        "Algorithm"
      ],
      "link": "posts/Algorithm/ad-hoc.html"
    },
    {
      "id": "post-079",
      "title": "Array",
      "category": "Algorithm",
      "summary": "메모리 상에 원소를 연속하게 배치한 자료구조",
      "date": "2023-06-25",
      "tags": [
        "Array",
        "Data Structure",
        "Time Complexity"
      ],
      "link": "posts/Algorithm/array.html"
    },
    {
      "id": "post-080",
      "title": "Back-Tracking",
      "category": "Algorithm",
      "summary": "가능성이 없는 경로를 조기에 중단하며 탐색하는 기법",
      "date": "2023-10-20",
      "tags": [
        "Algorithm"
      ],
      "link": "posts/Algorithm/back-tracking.html"
    },
    {
      "id": "post-081",
      "title": "BFS (Breadth-First Search)",
      "category": "Algorithm",
      "summary": "가까운 노드부터 차례대로 탐색하는 너비 우선 탐색 방식",
      "date": "2023-07-22",
      "tags": [
        "BFS",
        "Graph",
        "Shortest Path"
      ],
      "link": "posts/Algorithm/bfs.html"
    },
    {
      "id": "post-082",
      "title": "Binary Search",
      "category": "Algorithm",
      "summary": "정렬된 리스트에서 탐색 범위를 절반씩 좁혀가는 탐색 방법",
      "date": "2023-07-15",
      "tags": [
        "Binary Search",
        "Algorithm",
        "Search"
      ],
      "link": "posts/Algorithm/binary-search.html"
    },
    {
      "id": "post-083",
      "title": "Bit Masking",
      "category": "Algorithm",
      "summary": "정수의 비트를 이용해 여러 상태를 한 번에 표현하는 기법",
      "date": "2023-09-24",
      "tags": [
        "Algorithm"
      ],
      "link": "posts/Algorithm/bit-masking.html"
    },
    {
      "id": "post-084",
      "title": "Deque",
      "category": "Algorithm",
      "summary": "디큐, 혹은 덱이라고 불리는 이 자료구조는 선출후입 구조였던 queue에서 전단 삽입, 후단 삭제 기능을 추가한 자료구조이다.",
      "date": "2023-07-01",
      "tags": [
        "Deque",
        "Data Structure",
        "STL"
      ],
      "link": "posts/Algorithm/deque.html"
    },
    {
      "id": "post-085",
      "title": "DFS (Depth-First Search)",
      "category": "Algorithm",
      "summary": "한 경로를 끝까지 탐색한 뒤, 막히면 되돌아와 다른 경로를 탐색하는 방식",
      "date": "2023-07-20",
      "tags": [
        "DFS",
        "Graph",
        "Traversal"
      ],
      "link": "posts/Algorithm/dfs.html"
    },
    {
      "id": "post-086",
      "title": "Dijkstra",
      "category": "Algorithm",
      "summary": "하나의 시작점으로부터 다른 모든 정점까지의 최단거리를 구하는 알고리즘",
      "date": "2023-09-12",
      "tags": [
        "Dijkstra",
        "Shortest Path",
        "Graph"
      ],
      "link": "posts/Algorithm/dijkstra.html"
    },
    {
      "id": "post-087",
      "title": "Disjoint Set &amp; Union Find",
      "category": "Algorithm",
      "summary": "서로소 집합 자료구조와 Union-Find 연산/최적화 정리",
      "date": "2023-08-30",
      "tags": [
        "Disjoint Set",
        "Union-Find",
        "Data Structure"
      ],
      "link": "posts/Algorithm/disjoint-set-union-find.html"
    },
    {
      "id": "post-088",
      "title": "Dynamic Programming (DP)",
      "category": "Algorithm",
      "summary": "최적화 문제를 작은 문제로 나눠 해결하고, 계산 결과를 재사용하는 전략",
      "date": "2023-08-01",
      "tags": [
        "Dynamic Programming",
        "Algorithm",
        "DP"
      ],
      "link": "posts/Algorithm/dynamic-programming.html"
    },
    {
      "id": "post-089",
      "title": "Floyd-Warshall",
      "category": "Algorithm",
      "summary": "그래프에서 모든 노드 간 최단 거리를 구하는 알고리즘",
      "date": "2023-08-09",
      "tags": [
        "Floyd-Warshall",
        "Graph",
        "Dynamic Programming"
      ],
      "link": "posts/Algorithm/floyd-warshall.html"
    },
    {
      "id": "post-090",
      "title": "Greedy",
      "category": "Algorithm",
      "summary": "매번 선택에서 지금 가장 최적인 답을 근시안적으로 택하는 알고리즘",
      "date": "2023-07-07",
      "tags": [
        "Greedy",
        "Algorithm",
        "Optimization"
      ],
      "link": "posts/Algorithm/greedy.html"
    },
    {
      "id": "post-091",
      "title": "Hash",
      "category": "Algorithm",
      "summary": "키를 해시 함수로 인덱싱해 빠르게 조회/수정/삭제하는 자료구조",
      "date": "2023-09-18",
      "tags": [
        "Hash",
        "Data Structure",
        "Hash Table"
      ],
      "link": "posts/Algorithm/hash.html"
    },
    {
      "id": "post-092",
      "title": "Minimal Spanning Tree(최소 신장 트리)",
      "category": "Algorithm",
      "summary": "신장 트리의 개념과 MST를 구하는 Kruskal/Prim 알고리즘 정리",
      "date": "2023-09-07",
      "tags": [
        "MST",
        "Kruskal",
        "Prim"
      ],
      "link": "posts/Algorithm/minimal-spanning-tree.html"
    },
    {
      "id": "post-093",
      "title": "Queue",
      "category": "Algorithm",
      "summary": "큐는 먼저 들어온 것이 먼저 나가는 구조이다. (FIFO)",
      "date": "2023-06-30",
      "tags": [
        "Queue",
        "Data Structure",
        "FIFO"
      ],
      "link": "posts/Algorithm/queue.html"
    },
    {
      "id": "post-094",
      "title": "SCC (Strongly Connected Component)",
      "category": "Algorithm",
      "summary": "방향 그래프에서 서로 왕복 가능한 정점 집합",
      "date": "2023-10-07",
      "tags": [
        "Algorithm"
      ],
      "link": "posts/Algorithm/scc.html"
    },
    {
      "id": "post-095",
      "title": "Segment Tree",
      "category": "Algorithm",
      "summary": "구간 합/최대/최소 질의와 점 업데이트를 빠르게 수행하기 위한 자료구조",
      "date": "2023-11-18",
      "tags": [
        "Segment Tree",
        "Range Query",
        "Data Structure"
      ],
      "link": "posts/Algorithm/segment-tree.html"
    },
    {
      "id": "post-096",
      "title": "에라토스테네스의 체",
      "category": "Algorithm",
      "summary": "N 이하 소수를 빠르게 구하는 대표적인 전처리 알고리즘",
      "date": "2023-10-26",
      "tags": [
        "Algorithm"
      ],
      "link": "posts/Algorithm/sieve-of-eratosthenes.html"
    },
    {
      "id": "post-097",
      "title": "슬라이딩 윈도우",
      "category": "Algorithm",
      "summary": "연속 구간의 조건을 유지하며 좌우 포인터를 이동하는 패턴",
      "date": "2023-09-30",
      "tags": [
        "Algorithm"
      ],
      "link": "posts/Algorithm/sliding-window.html"
    },
    {
      "id": "post-098",
      "title": "Sort",
      "category": "Algorithm",
      "summary": "대표 정렬 알고리즘의 동작 방식과 복잡도 비교",
      "date": "2023-07-10",
      "tags": [
        "Sort",
        "Algorithm",
        "Complexity"
      ],
      "link": "posts/Algorithm/sort.html"
    },
    {
      "id": "post-099",
      "title": "Stack",
      "category": "Algorithm",
      "summary": "입력과 출력이 한 곳(방향)으로 제한되는 LIFO 자료구조",
      "date": "2023-06-28",
      "tags": [
        "Stack",
        "Data Structure",
        "LIFO"
      ],
      "link": "posts/Algorithm/stack.html"
    },
    {
      "id": "post-100",
      "title": "위상 정렬(Topological Sort)",
      "category": "Algorithm",
      "summary": "방향 그래프에서 선후 관계를 위배하지 않게 정점을 나열하는 정렬",
      "date": "2023-11-04",
      "tags": [
        "Topological Sort",
        "Graph",
        "DAG"
      ],
      "link": "posts/Algorithm/topological-sort.html"
    },
    {
      "id": "post-101",
      "title": "Two Pointer",
      "category": "Algorithm",
      "summary": "배열/문자열에서 두 개의 인덱스를 움직이며 조건을 만족시키는 탐색 기법",
      "date": "2023-08-15",
      "tags": [
        "Two Pointer",
        "Algorithm",
        "Sliding Window"
      ],
      "link": "posts/Algorithm/two-pointer.html"
    },
    {
      "id": "post-102",
      "title": "즉시 로딩(EAGER) vs 지연로딩(LAZY)",
      "category": "Backend",
      "summary": "EAGER는 조회할 때 바로, LAZY는 실제 사용할 때 가져온다.",
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
      "id": "post-103",
      "title": "[Spring] AOP(Aspect Oriented Programming)",
      "category": "Backend",
      "summary": "핵심 로직과 공통 관심사를 분리해, 중복 코드를 줄이고 유지보수를 쉽게 만드는 AOP를 정리합니다.",
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
      "id": "post-104",
      "title": "[Spring] Spring Bean",
      "category": "Backend",
      "summary": "Spring Bean은 Spring 컨테이너가 관리하는 객체를 의미한다.",
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
      "id": "post-105",
      "title": "[Spring] Spring Container",
      "category": "Backend",
      "summary": "스프링 컨테이너는 객체(Bean)의 생성, 관리, 생명주기를 책임지는 핵심입니다.",
      "date": "2023-09-20",
      "tags": [
        "Spring",
        "DI",
        "ApplicationContext"
      ],
      "link": "posts/Backend/spring-container.html"
    },
    {
      "id": "post-106",
      "title": "[Spring] DI (Dependency Injection)",
      "category": "Backend",
      "summary": "객체 생성 책임을 컨테이너로 분리해 결합도를 낮추고, 테스트/확장성을 높이는 의존성 주입(DI)을 정리합니다.",
      "date": "2023-09-23",
      "tags": [
        "Spring",
        "DI",
        "OOP",
        "Testability"
      ],
      "link": "posts/Backend/spring-di.html"
    },
    {
      "id": "post-107",
      "title": "[Spring] Maven &amp; Gradle",
      "category": "Backend",
      "summary": "Maven과 Gradle은 Java 프로젝트에서 빌드 및 의존성 관리를 위해 사용하는 도구이다.",
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
      "id": "post-108",
      "title": "[Spring] Spring MVC (DispatcherServlet)",
      "category": "Backend",
      "summary": "Spring MVC의 핵심인 DispatcherServlet이 요청을 받아 컨트롤러 실행, 뷰 선택, 응답 반환까지 이어지는 흐름을 정리합니다.",
      "date": "2023-09-20",
      "tags": [
        "Spring",
        "MVC",
        "DispatcherServlet"
      ],
      "link": "posts/Backend/spring-mvc-dispatcherservlet.html"
    },
    {
      "id": "post-109",
      "title": "[Spring] SOLID",
      "category": "Backend",
      "summary": "Spring에서 SOLID 원칙을 어떻게 자연스럽게 적용할 수 있는지, DI·다형성·역할 분리 관점에서 정리합니다.",
      "date": "2023-09-18",
      "tags": [
        "Spring",
        "SOLID",
        "OOPDesign"
      ],
      "link": "posts/Backend/spring-solid.html"
    },
    {
      "id": "post-110",
      "title": "캐시(Cache)",
      "category": "Database",
      "summary": "캐시(Cache) 정리",
      "date": "2024-08-01",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/cache.html"
    },
    {
      "id": "post-111",
      "title": "커넥션 풀(Connection Pool)",
      "category": "Database",
      "summary": "커넥션 풀(Connection Pool) 정리",
      "date": "2024-05-29",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/connection-pool.html"
    },
    {
      "id": "post-112",
      "title": "실행 계획(Execution Plan)",
      "category": "Database",
      "summary": "실행 계획(Execution Plan) 정리",
      "date": "2024-04-04",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/execution-plan.html"
    },
    {
      "id": "post-113",
      "title": "인덱스(Index)",
      "category": "Database",
      "summary": "인덱스(Index) 정리",
      "date": "2024-01-19",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/index-basics.html"
    },
    {
      "id": "post-114",
      "title": "락(Lock)",
      "category": "Database",
      "summary": "락(Lock) 정리",
      "date": "2024-02-26",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/lock-basics.html"
    },
    {
      "id": "post-115",
      "title": "MVCC",
      "category": "Database",
      "summary": "MVCC 정리",
      "date": "2024-05-02",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/mvcc.html"
    },
    {
      "id": "post-116",
      "title": "리플리케이션(Replication)",
      "category": "Database",
      "summary": "리플리케이션(Replication) 정리",
      "date": "2024-07-11",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/replication.html"
    },
    {
      "id": "post-117",
      "title": "샤딩(Sharding)",
      "category": "Database",
      "summary": "샤딩(Sharding) 정리",
      "date": "2024-06-21",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/sharding.html"
    },
    {
      "id": "post-118",
      "title": "SQL 튜닝(SQL Tuning)",
      "category": "Database",
      "summary": "SQL 튜닝(SQL Tuning) 정리",
      "date": "2024-03-14",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/sql-tuning.html"
    },
    {
      "id": "post-119",
      "title": "트랜잭션(Transaction)",
      "category": "Database",
      "summary": "트랜잭션(Transaction) 정리",
      "date": "2024-02-07",
      "tags": [
        "Database"
      ],
      "link": "posts/Database/transaction-basics.html"
    },
    {
      "id": "post-120",
      "title": "PinterSemi 프로젝트 대댓글 기능",
      "category": "Dev",
      "summary": "게시글 댓글을 전부 가져와 프론트에서만 DFS로 묶으면 댓글이 많아질수록 비용이 커진다는 문제를, DB 계층 조회·정렬과\r\n          parentCommentSeq로 나누어 해결한 기록입니다.",
      "date": "2024-10-03",
      "tags": [
        "PinterSemi",
        "MySQL",
        "SpringjQuery"
      ],
      "link": "posts/Dev/pintersemi-nested-comments.html"
    },
    {
      "id": "post-121",
      "title": "Abstract Factory 패턴",
      "category": "System Design",
      "summary": "Abstract Factory 패턴 정리",
      "date": "2024-02-28",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/abstract-factory-pattern.html"
    },
    {
      "id": "post-122",
      "title": "Adapter 패턴",
      "category": "System Design",
      "summary": "Adapter 패턴 정리",
      "date": "2024-04-03",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/adapter-pattern.html"
    },
    {
      "id": "post-123",
      "title": "Bridge 패턴",
      "category": "System Design",
      "summary": "Bridge 패턴 정리",
      "date": "2024-07-18",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/bridge-pattern.html"
    },
    {
      "id": "post-124",
      "title": "Builder 패턴",
      "category": "System Design",
      "summary": "⭐ 필수 속성과 선택적 속성을 분리하여 객체를 유연하게 생성할 수 있도록 하는 패턴입니다.",
      "date": "2024-05-12",
      "tags": [
        "Design Pattern",
        "Builder",
        "Java"
      ],
      "link": "posts/System-Design/builder-pattern.html"
    },
    {
      "id": "post-125",
      "title": "Chain of Responsibility 패턴",
      "category": "System Design",
      "summary": "Chain of Responsibility 패턴 정리",
      "date": "2024-11-21",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/chain-of-responsibility-pattern.html"
    },
    {
      "id": "post-126",
      "title": "Command 패턴",
      "category": "System Design",
      "summary": "Command 패턴 정리",
      "date": "2024-09-19",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/command-pattern.html"
    },
    {
      "id": "post-127",
      "title": "Composite 패턴",
      "category": "System Design",
      "summary": "Composite 패턴 정리",
      "date": "2024-06-27",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/composite-pattern.html"
    },
    {
      "id": "post-128",
      "title": "Decorator 패턴",
      "category": "System Design",
      "summary": "Decorator 패턴 정리",
      "date": "2024-04-24",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/decorator-pattern.html"
    },
    {
      "id": "post-129",
      "title": "Facade 패턴",
      "category": "System Design",
      "summary": "Facade 패턴 정리",
      "date": "2024-06-05",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/facade-pattern.html"
    },
    {
      "id": "post-130",
      "title": "Factory Method 패턴",
      "category": "System Design",
      "summary": "Factory Method 패턴 정리",
      "date": "2024-02-06",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/factory-method-pattern.html"
    },
    {
      "id": "post-131",
      "title": "Observer 패턴",
      "category": "System Design",
      "summary": "Observer 패턴 정리",
      "date": "2024-08-29",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/observer-pattern.html"
    },
    {
      "id": "post-132",
      "title": "Prototype 패턴",
      "category": "System Design",
      "summary": "Prototype 패턴 정리",
      "date": "2024-03-15",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/prototype-pattern.html"
    },
    {
      "id": "post-133",
      "title": "Proxy 패턴",
      "category": "System Design",
      "summary": "Proxy 패턴 정리",
      "date": "2024-05-16",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/proxy-pattern.html"
    },
    {
      "id": "post-134",
      "title": "Singleton 패턴",
      "category": "System Design",
      "summary": "Singleton 패턴 정리",
      "date": "2024-01-17",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/singleton-pattern.html"
    },
    {
      "id": "post-135",
      "title": "State 패턴",
      "category": "System Design",
      "summary": "State 패턴 정리",
      "date": "2024-10-10",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/state-pattern.html"
    },
    {
      "id": "post-136",
      "title": "Strategy 패턴",
      "category": "System Design",
      "summary": "Strategy 패턴 정리",
      "date": "2024-08-08",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/strategy-pattern.html"
    },
    {
      "id": "post-137",
      "title": "Template Method 패턴",
      "category": "System Design",
      "summary": "Template Method 패턴 정리",
      "date": "2024-10-31",
      "tags": [
        "System Design"
      ],
      "link": "posts/System-Design/template-method-pattern.html"
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
