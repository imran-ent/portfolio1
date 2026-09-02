"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Menu,
  X,
  Send,
  Sparkles,
  Database,
  Code2,
  Layers,
  Palette,
  Terminal,
  Check,
} from "lucide-react";

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.36 6.84 9.72.5.09.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05.8-.23 1.65-.34 2.5-.34.85 0 1.7.11 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.6c0-1.34-.48-2.26-1.68-2.26-.92 0-1.46.62-1.7 1.22-.09.21-.11.5-.11.79v5.85H9.84s.05-9.5 0-10.48h3.56v1.48c.47-.73 1.32-1.77 3.22-1.77 2.35 0 4.11 1.54 4.11 4.84v5.93ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9.97h3.56v10.48Z" />
    </svg>
  );
}

// ──────────────────────────────────────────────────────────────
//  DATA
// ──────────────────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    title: "AI PDF Chat Assistant",
    href: "https://ai-pdf-chat-assistant-ashen.vercel.app",
    github: "https://github.com/imran-ent",
    description:
      "Chat with any PDF using AI. Upload, ask questions, get contextual answers with citation-backed responses.",
    stack: ["Next.js", "OpenAI", "Vector DB", "Tailwind"],
    year: "2025",
    category: "AI / SaaS",
  },
  {
    id: "02",
    title: "AI Resume Analyzer",
    href: "https://ai-resume-analyzer-d56v.vercel.app",
    github: "https://github.com/imran-ent",
    description:
      "ATS-aware resume intelligence. Analyzes, scores and rewrites resumes for better shortlisting.",
    stack: ["React", "AI", "Node.js", "MongoDB"],
    year: "2025",
    category: "AI / Career Tech",
  },
  {
    id: "03",
    title: "The Way of Islam",
    href: "https://the-way-of-islam.vercel.app",
    github: "https://github.com/imran-ent",
    description:
      "A refined digital experience for Islamic knowledge — clean typography, daily insights and timeless design.",
    stack: ["Next.js", "Content", "UI/UX"],
    year: "2025",
    category: "Web / Culture",
  },
  {
    id: "04",
    title: "Resume Generator",
    href: "https://resume-generator-pi-seven.vercel.app",
    github: "https://github.com/imran-ent",
    description:
      "Luxury resume builder. Minimal templates, instant PDF export and live preview.",
    stack: ["React", "PDF", "Figma Logic"],
    year: "2024",
    category: "Tool / Product",
  },
  {
    id: "05",
    title: "Format Changer",
    href: "https://format-changer.vercel.app",
    github: "https://github.com/imran-ent",
    description:
      "Fast, private file format conversion — images, documents and media without quality loss.",
    stack: ["Next.js", "File API", "Cloud"],
    year: "2024",
    category: "Utility",
  },
  {
    id: "06",
    title: "TailorPro Lite",
    href: "https://tailorpro-lite.vercel.app",
    github: "https://github.com/imran-ent",
    description:
      "SaaS for tailoring businesses — orders, measurements, billing and customer management in one place.",
    stack: ["MERN", "SaaS", "Payments"],
    year: "2025",
    category: "SaaS / Business",
  },
];

const experiences = [
  {
    company: "Oasis Infobyte",
    role: "Full Stack AI Web Developer — Intern",
    period: "Aug 2026 — Sep 2026",
    location: "Remote",
    points: [
      "Building AI-integrated web applications with MERN and modern LLM tooling.",
      "Owned end-to-end features from prompt design to deployment on Vercel.",
      "Collaborated in agile sprints, code reviews and system design discussions.",
    ],
  },
  {
    company: "Colan Infotech Pvt Ltd",
    role: "Full Stack AI Web Developer — Intern",
    period: "Jun 2026 — Aug 2026",
    location: "Chennai",
    points: [
      "Developed production-grade full-stack applications with React, Node.js and Spring Boot.",
      "Integrated Claude Code, OpenCode, ChatGPT and Gemini into developer workflows.",
      "Worked with MongoDB Atlas and pgAdmin for database design and optimization.",
    ],
  },
  {
    company: "Aladdin Academy",
    role: "Full Stack AI Web Developer — Intern",
    period: "Dec 2025 — Jan 2026",
    location: "Remote",
    points: [
      "Initiated career in AI web development — shipping responsive, accessible web experiences.",
      "Strengthened fundamentals in MERN, database design and agile methodology.",
      "Explored design thinking and prompt engineering for real user problems.",
    ],
  },
];

const stackData = {
  stack: ["MERN Stack", "Spring Boot", "Claude Code", "OpenCode", "ChatGPT", "Gemini"],
  tools: ["VS Code", "GitHub", "Figma", "Canva", "MongoDB Atlas", "pgAdmin", "Vercel", "Render", "Windows"],
  skills: [
    "Design Thinking",
    "Prompt Engineering",
    "System Design",
    "Database Design",
    "Agile Model",
    "Problem Solving",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "MongoDB",
    "Node.js",
  ],
  languages: ["C", "C++", "Java", "Python"],
  frameworks: ["React", "Next.js"],
};

// ──────────────────────────────────────────────────────────────
//  PAGE
// ──────────────────────────────────────────────────────────────
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    callTime: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }
    setStatus("loading");

    // Try API route first, fallback to mailto
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("api failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", callTime: "", message: "" });
    } catch {
      // Fallback: open mail client
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nPreferred call: ${form.callTime || "—"}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:imran.dev.contact@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="bg-[#080808] text-[#f5f5f3] overflow-x-hidden">
      {/* ── NAV ─────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#080808]/70 backdrop-blur-xl">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 flex h-[64px] items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-white text-black grid place-items-center font-serif font-bold text-[13px] tracking-widest">
              MI
            </div>
            <span className="text-[11px] tracking-[0.28em] font-medium text-white/90">MOHAMED IMRAN</span>
            <span className="hidden sm:inline text-[11px] tracking-widest text-white/40">— PORTFOLIO 2026</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.18em] text-white/60">
            <a href="#work" className="hover:text-white transition">
              WORK
            </a>
            <a href="#experience" className="hover:text-white transition">
              EXPERIENCE
            </a>
            <a href="#stack" className="hover:text-white transition">
              STACK
            </a>
            <a href="#github" className="hover:text-white transition">
              GITHUB
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/imran-ent"
              target="_blank"
              className="h-9 w-9 grid place-items-center rounded-full border border-white/10 hover:bg-white hover:text-black transition"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-imran-a-b18aaa375/"
              target="_blank"
              className="h-9 w-9 grid place-items-center rounded-full border border-white/10 hover:bg-white hover:text-black transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex h-9 items-center rounded-full bg-white px-5 text-[12px] font-semibold tracking-wide text-black hover:bg-white/90 transition"
            >
              LET&apos;S TALK
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-white/10"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden border-t border-white/10 bg-[#0f0f0f] px-6 py-6 space-y-5"
            >
              <a onClick={() => setMobileOpen(false)} href="#work" className="block text-sm tracking-widest text-white/70">
                WORK
              </a>
              <a onClick={() => setMobileOpen(false)} href="#experience" className="block text-sm tracking-widest text-white/70">
                EXPERIENCE
              </a>
              <a onClick={() => setMobileOpen(false)} href="#stack" className="block text-sm tracking-widest text-white/70">
                STACK
              </a>
              <a onClick={() => setMobileOpen(false)} href="#github" className="block text-sm tracking-widest text-white/70">
                GITHUB
              </a>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/imran-ent" target="_blank" className="flex-1 py-3 rounded-full border border-white/15 text-center text-sm">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/mohamed-imran-a-b18aaa375/" target="_blank" className="flex-1 py-3 rounded-full bg-white text-black text-center text-sm font-semibold">
                  LinkedIn
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-[64px]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          {/* eyebrow */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-6 border-b border-white/[0.07]">
            <p className="text-[11px] tracking-[0.2em] text-white/50 font-mono flex items-center gap-3">
              <span className="h-px w-8 bg-white/20 hidden sm:block" />
              MOHAMED IMRAN — FULL STACK AI WEB DEVELOPER • CHENNAI, INDIA
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] tracking-widest text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR COLLAB
              </span>
            </p>
            <p className="text-[11px] tracking-[0.18em] text-white/35">©2026 — CRAFTING INTELLIGENT WEB EXPERIENCES</p>
          </div>

          {/* huge title - Sawad style */}
          <div className="py-10 lg:py-14">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
              {/* left */}
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif font-[300] leading-[0.85] tracking-[-0.04em]"
                >
                  <span className="block text-[13vw] lg:text-[92px] xl:text-[108px] text-white">FULL STACK</span>
                  <span className="block text-[13vw] lg:text-[92px] xl:text-[108px] text-white/10" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.9)" }}>
                    AI WEB
                  </span>
                  <span className="block text-[13vw] lg:text-[92px] xl:text-[108px] text-white">DEVELOPER</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 max-w-[560px]"
                >
                  <p className="text-[16px] lg:text-[17px] leading-7 text-white/60 text-balance">
                    I design and build luxury-grade, AI-powered web products —{" "}
                    <span className="text-white">MERN, Spring Boot</span> and modern LLM tooling — focused on performance,
                    clarity and real user impact.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#work"
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-[13px] font-semibold tracking-wide text-black hover:bg-white/90 transition"
                    >
                      VIEW SELECTED WORK <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-6 text-[13px] font-medium tracking-wide text-white hover:bg-white hover:text-black transition"
                    >
                      LET&apos;S CONNECT
                    </a>
                  </div>
                </motion.div>

                {/* stats bar - Sawad style */}
                <div className="mt-10 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#111111] overflow-hidden max-w-[560px]">
                  <div className="px-4 py-5 lg:px-6">
                    <div className="font-serif text-3xl font-light leading-none text-white">03</div>
                    <div className="mt-1 text-[10px] tracking-[0.18em] text-white/40 leading-tight">INTERNSHIPS COMPLETED</div>
                  </div>
                  <div className="px-4 py-5 lg:px-6">
                    <div className="font-serif text-3xl font-light leading-none text-white">06+</div>
                    <div className="mt-1 text-[10px] tracking-[0.18em] text-white/40 leading-tight">LIVE PROJECTS</div>
                  </div>
                  <div className="px-4 py-5 lg:px-6">
                    <div className="font-serif text-3xl font-light leading-none text-white">100%</div>
                    <div className="mt-1 text-[10px] tracking-[0.18em] text-white/40 leading-tight">COMMITMENT & CRAFT</div>
                  </div>
                </div>
              </div>

              {/* right - portrait card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:w-[420px] xl:w-[460px] shrink-0"
              >
                <div className="relative rounded-[24px] border border-white/10 bg-[#111111] p-2">
                  <div className="relative overflow-hidden rounded-[18px] bg-[#0a0a0a] aspect-[4/4.7]">
                    {/* profile image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/profile.jpg"
                      alt="Mohamed Imran"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    {/* fallback initials if image missing */}
                    <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-[#1a1a1a] to-[#080808] -z-10">
                      <span className="font-serif text-[84px] font-light tracking-[-0.06em] text-white/15">MI</span>
                    </div>

                    {/* subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />

                    {/* bottom info */}
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <div className="rounded-2xl border border-white/10 bg-[#111111]/85 backdrop-blur-xl p-4 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] tracking-[0.2em] text-white/50">BASED IN</div>
                          <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white">
                            <MapPin className="h-3.5 w-3.5 text-white/60" /> Chennai, India
                          </div>
                        </div>
                        <div className="h-9 w-9 rounded-full bg-white grid place-items-center">
                          <ArrowUpRight className="h-4 w-4 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* top badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-semibold tracking-wide text-black">OPEN TO WORK</span>
                    </div>
                  </div>

                  {/* mini cards */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="rounded-2xl border border-white/10 bg-[#161616] px-4 py-3.5">
                      <div className="text-[10px] tracking-[0.2em] text-white/40">FOCUS</div>
                      <div className="mt-1 text-sm font-medium text-white leading-tight">AI • MERN • Spring Boot</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#161616] px-4 py-3.5">
                      <div className="text-[10px] tracking-[0.2em] text-white/40">CURRENTLY</div>
                      <div className="mt-1 text-sm font-medium text-white leading-tight">Shipping AI products</div>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-center text-[10px] tracking-[0.18em] text-white/30">PLACE YOUR PHOTO AT /public/profile.jpg — 800×950 RECOMMENDED</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-y border-white/10 bg-[#0f0f0f] py-3 overflow-hidden">
          <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap gap-10 text-[11px] tracking-[0.28em] text-white/55">
            <span>MERN STACK • SPRING BOOT • CLAUDE CODE • OPENCODE • CHATGPT • GEMINI • NEXT.JS • REACT • NODE.JS • MONGODB • SYSTEM DESIGN • PROMPT ENGINEERING •</span>
            <span>MERN STACK • SPRING BOOT • CLAUDE CODE • OPENCODE • CHATGPT • GEMINI • NEXT.JS • REACT • NODE.JS • MONGODB • SYSTEM DESIGN • PROMPT ENGINEERING •</span>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <section id="work" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-white/40 font-mono">SELECTED WORK — 2024 → 2026</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-[52px] font-light tracking-[-0.03em] leading-none text-white">Recent Projects</h2>
          </div>
          <p className="max-w-[420px] text-sm leading-6 text-white/50">
            Six live products crafted with a luxury mindset — minimal, fast and AI-augmented. Each one shipped end-to-end.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              target="_blank"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative flex flex-col rounded-[20px] border border-white/10 bg-[#111111] p-5 hover:border-white/15 hover:bg-[#161616] transition"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] tracking-[0.2em] text-white/30 font-mono">— {p.id}</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] tracking-widest text-white/50">{p.year}</span>
              </div>

              <div className="mt-6 flex-1">
                <div className="inline-flex rounded-full bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] tracking-[0.16em] text-white/60">{p.category}</div>
                <h3 className="mt-3 font-serif text-[22px] font-[400] leading-tight tracking-[-0.02em] text-white group-hover:text-white transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50 line-clamp-2">{p.description}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-black">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="inline-flex items-center gap-1.5 text-[12px] tracking-wide font-medium text-white">
                  LIVE PREVIEW <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition" />
                </span>
                <span className="h-8 w-8 grid place-items-center rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white text-black p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/70">
            Want the code? Everything is open on GitHub — stars and feedback are appreciated.
          </p>
          <a
            href="https://github.com/imran-ent"
            target="_blank"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white hover:bg-black/85 transition shrink-0"
          >
            <Github className="h-4 w-4" /> github.com/imran-ent <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────── */}
      <section id="experience" className="bg-[#0f0f0f] border-y border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-[420px] shrink-0 lg:sticky lg:top-24 self-start">
              <p className="text-[11px] tracking-[0.28em] text-white/40 font-mono">EXPERIENCE — 2025 → 2026</p>
              <h2 className="mt-3 font-serif text-4xl lg:text-[48px] font-light leading-none tracking-[-0.03em] text-white">Building in the arena</h2>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Three intensive internships — from foundations to shipping AI-driven production products. Each role sharpened a different edge: fundamentals, scale and AI craft.
              </p>
              <div className="mt-8 hidden lg:block rounded-2xl border border-white/10 bg-[#111111] p-5">
                <div className="flex items-center gap-2 text-white">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">Philosophy</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/50">“Luxury is not excess — it&apos;s precision, restraint and respect for the user&apos;s time.”</p>
                <p className="mt-3 text-xs tracking-widest text-white/30">— DESIGN PRINCIPLE</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[20px] border border-white/10 bg-[#111111] p-6 lg:p-7"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-[22px] font-medium tracking-[-0.02em] text-white">{exp.company}</h3>
                      <p className="mt-1 text-sm text-white/60">{exp.role}</p>
                    </div>
                    <div className="shrink-0 rounded-full border border-white/10 bg-white px-3 py-1.5 text-[11px] tracking-wide font-medium text-black">
                      {exp.period}
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-wide text-white/40">
                    <MapPin className="h-3.5 w-3.5" /> {exp.location}
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-6 text-white/60">
                        <span className="mt-2.5 h-px w-6 bg-white/15 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK / PREMIUM TOOLS (Sawad inspired) ──────── */}
      <section id="stack" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <p className="text-[11px] tracking-[0.28em] text-white/40 font-mono">PREMIUM STACK — TOOLS THAT SHIP</p>
          <h2 className="font-serif text-4xl lg:text-[52px] font-light tracking-[-0.03em] leading-none text-white">Stack &amp; Craft</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Core stack */}
          <div className="lg:col-span-7 rounded-[20px] border border-white/10 bg-[#111111] p-6 lg:p-7">
            <div className="flex items-center gap-2 text-white">
              <Layers className="h-4 w-4 text-white/70" />
              <span className="text-xs tracking-[0.2em] text-white/60">CORE STACK</span>
            </div>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stackData.stack.map((s) => (
                <div key={s} className="rounded-2xl border border-white/10 bg-[#161616] px-4 py-4">
                  <div className="text-sm font-medium text-white">{s}</div>
                  <div className="mt-1 text-xs text-white/40">Production ready</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <div className="flex items-center gap-2 text-white/70">
                  <Code2 className="h-4 w-4" />
                  <span className="text-xs tracking-[0.18em]">LANGUAGES</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stackData.languages.map((l) => (
                    <span key={l} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/70">
                  <Layers className="h-4 w-4" />
                  <span className="text-xs tracking-[0.18em]">FRAMEWORKS</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stackData.frameworks.map((f) => (
                    <span key={f} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Skills */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-[20px] border border-white/10 bg-[#111111] p-6">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-white/70" />
                <span className="text-xs tracking-[0.2em] text-white/60">TOOLS</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stackData.tools.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white p-6 text-black">
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="text-xs tracking-[0.2em] text-black/60">SKILLS</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stackData.skills.map((s) => (
                  <span key={s} className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-black/80 bg-black/[0.02]">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-black/50">
                <Database className="h-3.5 w-3.5" /> System &amp; Database Design • Agile • Problem Solving
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GITHUB ──────────────────────────────────────── */}
      <section id="github" className="bg-[#0f0f0f] border-y border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-white/40 font-mono">GITHUB — BUILDING IN PUBLIC</p>
              <h2 className="mt-3 font-serif text-4xl lg:text-[48px] font-light tracking-[-0.03em] leading-none text-white">Contribution Graph</h2>
            </div>
            <a
              href="https://github.com/imran-ent"
              target="_blank"
              className="inline-flex h-9 items-center gap-2 rounded-full border border-white/15 px-5 text-xs tracking-wide text-white hover:bg-white hover:text-black transition shrink-0"
            >
              <Github className="h-4 w-4" /> OPEN GITHUB — imran-ent
            </a>
          </div>

          <div className="mt-8 rounded-[20px] border border-white/10 bg-[#111111] p-6 lg:p-7 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white grid place-items-center text-black font-bold">I</div>
                <div>
                  <div className="text-sm font-medium text-white">imran-ent</div>
                  <div className="text-xs text-white/40">github.com/imran-ent • Daily commits • Luxury code</div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black">MERN • AI • Next.js</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60">Vercel • Render</span>
              </div>
            </div>

            {/* Contribution chart - uses ghchart.rshah.org (free, no auth) */}
            <div className="mt-7 rounded-xl border border-white/10 bg-[#0a0a0a] p-4 overflow-x-auto no-scrollbar">
              <div className="min-w-[720px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/111111/imran-ent"
                  alt="GitHub contribution chart for imran-ent"
                  className="w-full h-auto invert opacity-90"
                  loading="lazy"
                />
                <div className="mt-3 flex justify-between text-[10px] tracking-widest text-white/30 font-mono">
                  <span>LESS</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="h-3 w-3 rounded-sm bg-white/10" />
                    <span className="h-3 w-3 rounded-sm bg-white/30" />
                    <span className="h-3 w-3 rounded-sm bg-white/60" />
                    <span className="h-3 w-3 rounded-sm bg-white" />
                  </div>
                  <span>MORE</span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#161616] p-4">
                <div className="text-xs tracking-[0.18em] text-white/40">GITHUB STATS</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats.vercel.app/api?username=imran-ent&show_icons=true&theme=dark&hide_border=true&bg_color=161616&title_color=ffffff&text_color=a1a1a1&icon_color=ffffff"
                  alt="GitHub stats"
                  className="mt-3 w-full"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#161616] p-4">
                <div className="text-xs tracking-[0.18em] text-white/40">STREAK</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=imran-ent&theme=dark&hide_border=true&background=161616&ring=ffffff&fire=ffffff&currStreakLabel=ffffff"
                  alt="GitHub streak"
                  className="mt-3 w-full"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#161616] p-4">
                <div className="text-xs tracking-[0.18em] text-white/40">TOP LANGUAGES</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=imran-ent&layout=compact&theme=dark&hide_border=true&bg_color=161616&title_color=ffffff&text_color=a1a1a1"
                  alt="Top languages"
                  className="mt-3 w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="mt-4 text-center text-[10px] tracking-wide text-white/30">
              Charts are live from GitHub — if empty, push a few commits and they will populate automatically.
            </p>
          </div>
        </div>
      </section>

      {/* ── LET'S CONNECT ───────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* left */}
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.28em] text-white/40 font-mono">LET&apos;S CONNECT</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-[52px] font-light leading-[0.9] tracking-[-0.03em] text-white">
              Let&apos;s build
              <br />
              <span className="text-white/30">something refined.</span>
            </h2>
            <p className="mt-5 text-sm leading-6 text-white/50">
              Have an idea, an internship opportunity or a product to ship? Send a message — I reply within 24 hours. You can also book a call slot.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="https://github.com/imran-ent"
                target="_blank"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 hover:bg-[#161616] transition"
              >
                <span className="flex items-center gap-3 text-sm text-white">
                  <span className="h-8 w-8 grid place-items-center rounded-full bg-white text-black">
                    <Github className="h-4 w-4" />
                  </span>
                  github.com/imran-ent
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-imran-a-b18aaa375/"
                target="_blank"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 hover:bg-[#161616] transition"
              >
                <span className="flex items-center gap-3 text-sm text-white">
                  <span className="h-8 w-8 grid place-items-center rounded-full bg-[#0A66C2] text-white">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  linkedin.com/in/mohamed-imran
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-5 py-4">
                <span className="h-8 w-8 grid place-items-center rounded-full bg-white text-black">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm text-white">Email replies within 24h</div>
                  <div className="text-xs text-white/40">All form submissions go directly to your inbox</div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white p-5 text-black">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4" /> Prefer a call?
              </div>
              <p className="mt-2 text-sm leading-6 text-black/60">Pick a date &amp; time in the form — I&apos;ll confirm by email. Available IST 10:00 — 20:00.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-black/10 px-3 py-1.5">Quick intro — 15 min</span>
                <span className="rounded-full border border-black/10 px-3 py-1.5">Deep dive — 30 min</span>
              </div>
            </div>
          </div>

          {/* right - form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-[24px] border border-white/10 bg-[#111111] p-6 lg:p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-sm tracking-[0.16em] text-white/70">SEND A MESSAGE</h3>
                <span className="text-[10px] tracking-widest text-white/30">ALL FIELDS SECURE • DIRECT TO MAIL</span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="space-y-2">
                  <span className="text-xs tracking-wide text-white/60">Full name *</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Mohamed Imran"
                    className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs tracking-wide text-white/60">Email address *</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs tracking-wide text-white/60">Phone (optional)</span>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 90000 00000"
                      className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
                    />
                  </div>
                </label>
                <label className="space-y-2">
                  <span className="text-xs tracking-wide text-white/60">Preferred call time</span>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input
                      type="datetime-local"
                      value={form.callTime}
                      onChange={(e) => setForm({ ...form, callTime: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] pl-10 pr-4 py-3 text-sm text-white focus:border-white/20 focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="text-xs tracking-wide text-white/60">Message *</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, timeline and goals..."
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none resize-none"
                  required
                />
              </label>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-white/90 transition disabled:opacity-60"
                >
                  {status === "loading" ? (
                    "SENDING..."
                  ) : status === "success" ? (
                    <>
                      <Check className="h-4 w-4" /> SENT — CHECK YOUR INBOX
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <a
                  href="mailto:imran.dev.contact@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-black transition"
                >
                  <Mail className="h-4 w-4" /> EMAIL DIRECTLY
                </a>
              </div>

              {status === "success" && (
                <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm text-emerald-300">
                  Message received — I&apos;ll reply within 24 hours. If you set a call time, I&apos;ll confirm by email.
                </motion.p>
              )}
              {status === "error" && (
                <p className="mt-4 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-300">
                  Please fill name, email and message.
                </p>
              )}

              <p className="mt-4 text-center text-[11px] leading-4 text-white/30">
                By sending, you agree to be contacted about this inquiry. No spam — direct reply only.
                <br />
                To make this form send to <b className="text-white/50">your actual email</b>, set <code className="px-1 py-0.5 rounded bg-white/10 text-white">WEB3FORMS_ACCESS_KEY</code> or{" "}
                <code className="px-1 py-0.5 rounded bg-white/10 text-white">CONTACT_TO_EMAIL</code> in environment variables. Works instantly with Web3Forms (free).
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-white text-black grid place-items-center font-serif font-bold text-xs">MI</div>
                <span className="text-xs tracking-[0.2em] text-white/70">MOHAMED IMRAN</span>
                <span className="text-xs text-white/30">© 2026</span>
              </div>
              <p className="mt-3 max-w-[420px] text-xs leading-5 text-white/35">
                Full Stack AI Web Developer. MERN • Spring Boot • AI tooling. Crafted with precision in Chennai, India. Luxury is restraint.
              </p>
            </div>

            <div className="flex gap-10 text-xs">
              <div className="space-y-2">
                <div className="tracking-[0.18em] text-white/40">NAVIGATE</div>
                <a href="#work" className="block text-white/60 hover:text-white">
                  Work
                </a>
                <a href="#experience" className="block text-white/60 hover:text-white">
                  Experience
                </a>
                <a href="#stack" className="block text-white/60 hover:text-white">
                  Stack
                </a>
                <a href="#github" className="block text-white/60 hover:text-white">
                  GitHub
                </a>
              </div>
              <div className="space-y-2">
                <div className="tracking-[0.18em] text-white/40">CONNECT</div>
                <a href="https://github.com/imran-ent" target="_blank" className="block text-white/60 hover:text-white">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/mohamed-imran-a-b18aaa375/" target="_blank" className="block text-white/60 hover:text-white">
                  LinkedIn
                </a>
                <a href="mailto:imran.dev.contact@gmail.com" className="block text-white/60 hover:text-white">
                  Email
                </a>
                <a href="#contact" className="block text-white/60 hover:text-white">
                  Book a call
                </a>
              </div>
              <div className="space-y-2 hidden sm:block">
                <div className="tracking-[0.18em] text-white/40">PROJECTS</div>
                <a href="https://ai-pdf-chat-assistant-ashen.vercel.app" target="_blank" className="block text-white/60 hover:text-white">
                  AI PDF Chat
                </a>
                <a href="https://ai-resume-analyzer-d56v.vercel.app" target="_blank" className="block text-white/60 hover:text-white">
                  AI Resume Analyzer
                </a>
                <a href="https://tailorpro-lite.vercel.app" target="_blank" className="block text-white/60 hover:text-white">
                  TailorPro Lite
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] tracking-wide text-white/30">
            <span>Built with Next.js • Tailwind • Framer Motion — Luxury black / grey / white only. No waste color.</span>
            <span>Chennai, India • IST • Available worldwide remotely</span>
          </div>
        </div>
      </footer>

      <style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
