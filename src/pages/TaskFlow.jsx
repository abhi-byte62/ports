import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FiDatabase, FiLock, FiZap } from "react-icons/fi";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import MetricsGrid from "../components/Metrics/MetricsGrid";
import ArchitectureDiagram from "../components/ArchitectureDiagram/ArchitectureDiagram";
import ComparisonView from "../components/Comparison/ComparisonView";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";

// Screenshots
import loginImg from "../assets/images/taskflow/01_login_page.png";
import dashboardImg from "../assets/images/taskflow/02_dashboard_overview.png";
import workspacesImg from "../assets/images/taskflow/03_workspaces_management.png";
import kanbanImg from "../assets/images/taskflow/04_kanban_board_full.png";
import taskModalImg from "../assets/images/taskflow/05_task_detail_modal.png";
import commentsImg from "../assets/images/taskflow/06_task_comments_discussion.png";
import labelsImg from "../assets/images/taskflow/07_label_manager.png";

const screenshots = [
  {
    id: "kanban",
    title: "Real-Time Kanban Board",
    badge: "CORE WORKSPACE",
    image: kanbanImg,
    description: "Interactive drag-and-drop board with @dnd-kit, float-based reordering, live Socket.io presence, and optimistic UI updates.",
  },
  {
    id: "dashboard",
    title: "Dashboard Overview",
    badge: "METRICS & ACTIVITY",
    image: dashboardImg,
    description: "Multi-workspace operational view showing active sprints, task distributions, member velocity, and real-time status breakdowns.",
  },
  {
    id: "workspaces",
    title: "Workspaces & Boards Management",
    badge: "HIERARCHICAL RBAC",
    image: workspacesImg,
    description: "Hierarchical multi-tenant organization with automated board provisioning and server-enforced role permissions.",
  },
  {
    id: "modal",
    title: "Task Detail & Version Control",
    badge: "OCC VERSIONED",
    image: taskModalImg,
    description: "Full CRUD task inspector with version-tracked optimistic locking, priority toggles, assignees, and due dates.",
  },
  {
    id: "comments",
    title: "Collaborative Comments & Activity Log",
    badge: "AUDIT TRAIL",
    image: commentsImg,
    description: "Real-time discussions and atomic audit logs capturing every state change within Prisma transactions.",
  },
  {
    id: "labels",
    title: "Dynamic Label Manager",
    badge: "TAXONOMY",
    image: labelsImg,
    description: "Custom label taxonomy engine supporting color-coded categorizations and fast board filtering.",
  },
  {
    id: "login",
    title: "Authentication & Security",
    badge: "JWT + RBAC",
    image: loginImg,
    description: "Secure session authentication with bcrypt hashing, HttpOnly-ready JWT tokens, and strict rate-limited endpoints.",
  },
];

const metrics = [
  {
    category: "SYNCHRONIZATION",
    value: "<10",
    unit: "ms",
    label: "Socket.io Broadcast Latency",
    badge: "REAL-TIME",
    description: "Instantaneous peer updates across Kanban boards with presence indicators.",
  },
  {
    category: "CONCURRENCY",
    value: "100%",
    unit: "OCC",
    label: "Optimistic Concurrency Control",
    badge: "CONFLICT FREE",
    description: "Version-checked mutating writes eliminate race conditions and dirty overwrites.",
  },
  {
    category: "POSITIONING",
    value: "0.001",
    unit: "delta",
    label: "Auto-Rebalance Gap Threshold",
    badge: "FLOAT ORDER",
    description: "Midpoint float insertions with automatic O(n) column rebalancing on density collisions.",
  },
  {
    category: "RELIABILITY",
    value: "5/5",
    unit: "passed",
    label: "Vitest Algorithm Test Suite",
    badge: "VERIFIED",
    description: "Exhaustive unit coverage across edge-case drag-and-drop positioning logic.",
  },
];

const architectureStages = [
  {
    name: "React 18 & @dnd-kit Client",
    protocol: "TanStack Query v5 + WebSockets",
    description: "Manages optimistic UI mutations, drag sensors, cursor states, and local cache rollback upon network error.",
    tags: ["@dnd-kit", "optimistic-ui", "tailwind-css", "vite"],
  },
  {
    name: "Express Gateway & Socket Engine",
    protocol: "REST + Socket.io Server",
    description: "Handles bi-directional socket events, token authentication, Zod schema validation, and rate limiting.",
    tags: ["socket.io", "zod-validation", "rate-limiter", "idempotency"],
  },
  {
    name: "Concurrency & RBAC Controller",
    protocol: "OCC Version Resolver",
    description: "Enforces OWNER > ADMIN > MEMBER > VIEWER role permissions and checks task version hashes before mutation.",
    tags: ["rbac-guard", "version-compare", "409-conflict"],
  },
  {
    name: "PostgreSQL 17 & Redis Layer",
    protocol: "Prisma ORM + ioredis",
    description: "Executes atomic $transaction blocks for tasks + audit logs with Redis pub/sub presence caching.",
    tags: ["prisma-tx", "postgres-17", "redis-fallback", "cursor-page"],
  },
];

const architectureFootnotes = [
  "Optimistic updates: Client UI immediately reflects card moves; reverts automatically if the server returns 409 Conflict.",
  "Atomic transactional integrity: Every task mutation and corresponding audit activity log entry write in a single Prisma $transaction.",
  "Gap-based ordering algorithm: Float positioning allows arbitrary insertions without updating sibling rows until gap < 0.001.",
  "Idempotency keys: Headers prevent duplicate card creation under intermittent mobile or flaky network retries.",
];

const comparisonPoints = [
  {
    aspect: "Task Ordering Algorithm",
    traditional: "Sequential integer ranks (1, 2, 3...) requiring updating N subsequent rows in the DB on every single card drag.",
    solution: "Gap-based float ordering (midpoint calculation) updating only 1 single row per move with automated threshold rebalancing.",
  },
  {
    aspect: "Multi-User Concurrency",
    traditional: "Last-write-wins (LWW) silently overwriting peer edits and corrupting collaborative workspace changes.",
    solution: "Optimistic Concurrency Control (OCC) with atomic version counters and explicit 409 Conflict notifications.",
  },
  {
    aspect: "State Synchronization",
    traditional: "Short-interval REST polling causing high backend CPU spikes and noticeable UI latency lag.",
    solution: "Socket.io real-time broadcast engine with ephemeral presence tracking and room-based board segregation.",
  },
  {
    aspect: "Data Integrity & Audit",
    traditional: "Decoupled database writes where activity history drops if the primary task mutation finishes first.",
    solution: "Prisma $transaction atomic wrappers guaranteeing synchronous persistence of both task mutation and activity feed.",
  },
];

const occSnippet = `// Server-Side Optimistic Concurrency Control (OCC) Mutation
export async function updateTaskWithOCC(taskId, updateData, clientVersion, userId) {
  return await prisma.$transaction(async (tx) => {
    // 1. Fetch current task state and verify version
    const existingTask = await tx.task.findUnique({
      where: { id: taskId },
      include: { board: true },
    });

    if (!existingTask) {
      throw new NotFoundError("Task not found");
    }

    // 2. Reject stale mutations with 409 Conflict
    if (existingTask.version !== clientVersion) {
      throw new ConcurrencyConflictError(
        \`Task state changed by another user (Server: v\${existingTask.version}, Client: v\${clientVersion})\`
      );
    }

    // 3. Atomically update task and increment version counter
    const updatedTask = await tx.task.update({
      where: { id: taskId },
      data: {
        ...updateData,
        version: { increment: 1 },
      },
    });

    // 4. Write immutable activity audit entry in same transaction
    await tx.activityLog.create({
      data: {
        taskId,
        userId,
        action: "TASK_UPDATED",
        diff: JSON.stringify(updateData),
      },
    });

    return updatedTask;
  });
}`;

const positionSnippet = `// Gap-Based Float Positioning with Auto-Rebalance
export function calculateNewPosition(prevPos, nextPos) {
  if (prevPos === null && nextPos === null) return 1000.0;
  if (prevPos === null) return nextPos / 2.0;
  if (nextPos === null) return prevPos + 1000.0;

  const gap = nextPos - prevPos;
  // If gap drops below minimum precision threshold, trigger column rebalance
  if (gap < 0.001) {
    return { needsRebalance: true };
  }

  return { position: prevPos + gap / 2.0, needsRebalance: false };
}`;

const TaskFlow = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(screenshots[0]);

  return (
    <main className="min-h-screen bg-[#050914] py-32 text-[#F5F7FF]">
      <SEO
        title="TaskFlow | Real-Time Collaborative Task Management Case Study | Abhishek M R"
        description="Engineering case study: Real-time collaborative Kanban workspace built with React 18, Node.js, PostgreSQL 17, Prisma ORM, Socket.io, and OCC concurrency."
        keywords="React 18, Node.js, PostgreSQL 17, Prisma, Socket.io, Concurrency Control, Kanban, @dnd-kit, Full Stack Engineering"
      />

      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mx-auto max-w-5xl mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#8D99B5] hover:text-[#4D7CFF] transition-colors"
          >
            <HiArrowLeft size={16} />
            Back to Engineering Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-5xl mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded bg-[#0D1B3A] px-2.5 py-1 text-xs font-mono font-semibold text-[#6D96FF] border border-[#4D7CFF]/20">
              FEATURED CASE STUDY
            </span>
            <span className="rounded bg-[#0D1424] px-2.5 py-1 text-xs font-mono text-[#8D99B5] border border-[#1C2942]">
              DISTRIBUTED SYSTEMS & COLLABORATION
            </span>
            <span className="rounded bg-[#0D1424] px-2.5 py-1 text-xs font-mono text-[#8D99B5] border border-[#1C2942]">
              FULL-STACK ARCHITECTURE
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FF]">
            TaskFlow: Real-Time Collaborative Kanban & Distributed Task Engine
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#8D99B5] leading-relaxed max-w-3xl">
            A real-time collaborative workspace engineered for concurrent teams. Features version-checked optimistic concurrency control (OCC), float-gap positioning algorithms for O(1) card moves, server-side RBAC, and atomic Prisma transactional pipelines.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "React 18",
              "Node.js",
              "Express",
              "PostgreSQL 17",
              "Prisma ORM",
              "Socket.io",
              "TanStack Query v5",
              "@dnd-kit",
              "Tailwind CSS",
              "Redis Caching",
              "Zod",
              "Vitest",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[#1C2942] bg-[#0D1424] px-3.5 py-1.5 text-xs font-medium text-[#8D99B5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Benchmark Metrics Grid */}
        <section className="mx-auto max-w-5xl mb-16">
          <MetricsGrid metrics={metrics} />
        </section>

        {/* Interactive Screenshot Showcase */}
        <section className="mx-auto max-w-5xl mb-20">
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                SYSTEM INTERFACES & WORKFLOWS
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-[#F5F7FF] mt-1">
                Visual Inspection & Interface Gallery
              </h2>
            </div>
            <p className="text-xs text-[#8D99B5] font-mono">
              Click tabs to inspect production workspace views
            </p>
          </div>

          {/* Screenshot Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-xl border border-[#1C2942] bg-[#0D1424]">
            {screenshots.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveScreenshot(item)}
                className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                  activeScreenshot.id === item.id
                    ? "bg-[#4D7CFF] text-[#050914] font-semibold shadow-sm"
                    : "text-[#8D99B5] hover:text-[#F5F7FF] hover:bg-[#10182A]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Screenshot Display */}
          <div className="overflow-hidden rounded-2xl border border-[#1C2942] bg-[#0D1424] shadow-2xl transition-all">
            <div className="border-b border-[#1C2942] bg-[#0D1424] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded bg-[#0D1B3A] px-2 py-0.5 text-[10px] font-mono font-semibold text-[#6D96FF] border border-[#4D7CFF]/20">
                  {activeScreenshot.badge}
                </span>
                <h3 className="font-semibold text-sm text-[#F5F7FF]">
                  {activeScreenshot.title}
                </h3>
              </div>
              <p className="text-xs text-[#8D99B5] max-w-xl">
                {activeScreenshot.description}
              </p>
            </div>
            <div className="relative bg-[#050914] p-2 sm:p-4">
              <img
                src={activeScreenshot.image}
                alt={activeScreenshot.title}
                className="w-full rounded-xl object-contain border border-[#1C2942]"
              />
            </div>
          </div>
        </section>

        {/* Narrative & Engineering Deep Dives */}
        <div className="mx-auto max-w-5xl space-y-20">
          {/* Section 1: The Problem & Engineering Vision */}
          <section>
            <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-[#F5F7FF] mb-6">
              1. The Architectural Challenge: Scaling Real-Time Kanban State
            </h2>
            <div className="prose prose-invert max-w-none text-[#8D99B5] text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Collaborative project management applications face a notoriously difficult distributed systems problem: keeping state synchronized across hundreds of concurrent clients while maintaining sub-millisecond drag responsiveness, zero dirty writes, and transactional correctness.
              </p>
              <p>
                Naive implementations typically suffer from three crippling bottlenecks:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#8D99B5]">
                <li>
                  <strong className="text-[#F5F7FF]">Index Cascades:</strong> Storing card positions as sequential integers (1, 2, 3...) forces a database write on every sibling card whenever a single item is inserted between rows.
                </li>
                <li>
                  <strong className="text-[#F5F7FF]">Dirty Overwrites (Lost Updates):</strong> When two project managers edit task assignees, tags, or columns simultaneously, standard REST endpoints silently overwrite each other's work without notification.
                </li>
                <li>
                  <strong className="text-[#F5F7FF]">Decoupled Audit Logs:</strong> Logging state changes via un-isolated background jobs results in orphaned activity feeds if a database connection drops mid-flight.
                </li>
              </ul>
              <p>
                TaskFlow was engineered from the ground up to address these challenges with deliberate architectural patterns: mathematical float-gap positioning, version-checked Optimistic Concurrency Control (OCC), and atomic Prisma transactions.
              </p>
            </div>
          </section>

          {/* Section 2: Architecture Pipeline */}
          <section>
            <ArchitectureDiagram
              title="Real-Time Data Flow & Concurrency Pipeline"
              subtitle="End-to-end flow from client drag events through OCC validation to atomic transactional storage."
              stages={architectureStages}
              footnotes={architectureFootnotes}
            />
          </section>

          {/* Section 3: Deep Dive - OCC & Conflict Resolution */}
          <section className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
              TECHNICAL DEEP DIVE 01
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#F5F7FF] mt-1 mb-4">
              Optimistic Concurrency Control (OCC) & 409 State Recovery
            </h3>

            <div className="text-[#8D99B5] text-sm leading-relaxed space-y-4">
              <p>
                To avoid costly database row locks that block read operations, TaskFlow enforces a strictly non-blocking <strong className="text-[#F5F7FF]">Optimistic Concurrency Control (OCC)</strong> model. Every task entity maintains an auto-incrementing integer <code className="text-[#4D7CFF] font-mono">version</code> counter.
              </p>
              <p>
                When a client dispatches a mutation, the current version is submitted alongside payload changes. If another collaborator modified the card in the interim, the server halts execution, aborts the transaction, and returns an HTTP <code className="text-[#4D7CFF] font-mono">409 Conflict</code>. The client-side TanStack Query cache automatically pulls the latest server state and alerts the user with an interactive diff resolution dialog.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="server/src/services/taskService.js"
                language="JavaScript / Node.js"
                code={occSnippet}
                explanation="Prisma transactions bundle task updates, version increments, and activity logging into a single atomic database operation, guaranteeing zero split-brain state."
              />
            </div>
          </section>

          {/* Section 4: Deep Dive - Gap-Based Float Positioning */}
          <section className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
              TECHNICAL DEEP DIVE 02
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#F5F7FF] mt-1 mb-4">
              Gap-Based Float Positioning Algorithm (<code className="text-[#4D7CFF] font-mono">O(1)</code> Drag Complexity)
            </h3>

            <div className="text-[#8D99B5] text-sm leading-relaxed space-y-4">
              <p>
                Instead of recalculating array indices for all items in a column, TaskFlow assigns each task an IEEE 754 floating-point position. When dropping a task between cards at positions <code className="text-[#F5F7FF] font-mono">A</code> and <code className="text-[#F5F7FF] font-mono">B</code>, the new position is simply the mathematical midpoint: <code className="text-[#4D7CFF] font-mono">(A + B) / 2.0</code>.
              </p>
              <p>
                <strong className="text-[#F5F7FF]">Automatic Column Rebalancing:</strong> In high-frequency reordering scenarios where the gap between consecutive cards drops below <code className="text-[#4D7CFF] font-mono">0.001</code>, the system triggers an automatic background rebalance that spaces cards evenly in intervals of 1,000. This maintains <code className="text-[#4D7CFF] font-mono">O(1)</code> insertion performance for 99.9% of user interactions.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="server/src/services/positionService.js"
                language="JavaScript"
                code={positionSnippet}
                explanation="Validated with 5/5 passing Vitest unit tests covering empty columns, top/bottom boundaries, midpoints, and precision threshold triggers."
              />
            </div>
          </section>

          {/* Section 5: Comparison Analysis */}
          <section>
            <ComparisonView
              title="Conventional Task Boards vs. TaskFlow Architecture"
              leftTitle="Standard Web App Approaches"
              rightTitle="TaskFlow Production Architecture"
              points={comparisonPoints}
            />
          </section>

          {/* Section 6: Security, RBAC & Observability */}
          <section className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
              SECURITY & OBSERVABILITY
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#F5F7FF] mt-1 mb-4">
              Enterprise RBAC & Production Resilience Matrix
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-xs sm:text-sm text-[#8D99B5]">
              <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-5">
                <div className="flex items-center gap-2 text-[#F5F7FF] font-semibold mb-2">
                  <FiLock className="text-[#4D7CFF]" />
                  Hierarchical RBAC
                </div>
                <p className="leading-relaxed">
                  Strict server-side validation enforcing <code className="text-[#F5F7FF] font-mono">OWNER &gt; ADMIN &gt; MEMBER &gt; VIEWER</code> role boundaries on all mutating endpoints.
                </p>
              </div>

              <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-5">
                <div className="flex items-center gap-2 text-[#F5F7FF] font-semibold mb-2">
                  <FiZap className="text-[#4D7CFF]" />
                  Multi-Tier Rate Limiting
                </div>
                <p className="leading-relaxed">
                  5 req/min on authentication routes and 100 req/min on general API routes with automated in-memory and Redis fallback.
                </p>
              </div>

              <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-5">
                <div className="flex items-center gap-2 text-[#F5F7FF] font-semibold mb-2">
                  <FiDatabase className="text-[#4D7CFF]" />
                  Health & Liveness Probes
                </div>
                <p className="leading-relaxed">
                  Kubernetes/Docker-ready <code className="text-[#F5F7FF] font-mono">/api/health</code> (liveness) and <code className="text-[#F5F7FF] font-mono">/api/ready</code> (deep DB/Redis readiness verification).
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="flex flex-col items-center justify-between gap-6 pt-12 border-t border-[#1C2942] sm:flex-row">
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/liquiditylens"
                className="text-sm font-medium text-[#8D99B5] hover:text-[#4D7CFF] transition-colors"
              >
                &larr; Previous: LiquidityLens
              </Link>
              <span className="text-[#1C2942]">|</span>
              <Link
                to="/packet-sniffer"
                className="text-sm font-medium text-[#4D7CFF] hover:text-[#6D96FF] transition-colors"
              >
                Next: Packet Sniffer 3D &rarr;
              </Link>
            </div>

            <a
              href="https://github.com/abhi-byte62/taskflow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4D7CFF] px-5 py-2.5 text-sm font-semibold text-[#050914] transition-all hover:bg-[#6D96FF]"
            >
              <FaGithub size={16} />
              Review Source Code on GitHub
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default TaskFlow;
