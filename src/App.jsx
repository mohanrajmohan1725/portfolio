import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaJs,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-72 w-72 bg-gradient-to-br from-violet-500/40 via-fuchsia-500/30 to-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 bg-gradient-to-tr from-indigo-500/30 via-emerald-400/30 to-sky-400/30 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToId("hero")}
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-400 flex items-center justify-center text-xl font-bold">
              M
            </div>
            <span className="text-lg font-semibold tracking-wide">
              Mohanraj
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="text-slate-300 hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:your-email@example.com"
              className="px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950 shadow-lg shadow-violet-500/30"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen((p) => !p)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/95">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className="text-left py-2 text-slate-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {/* Hero */}
        <section
          id="hero"
          className="py-16 md:py-24 grid md:grid-cols-[1.3fr,1fr] gap-10 items-center"
        >
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs text-violet-200 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Front-End Developer • React • Next.js • Tailwind
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              I build{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                clean, animated
              </span>{" "}
              web experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-slate-300 text-sm md:text-base max-w-xl"
            >
              7+ months of hands-on experience designing and developing dashboards,
              e-commerce UIs, landing pages, and interactive components using React,
              Next.js, and Tailwind CSS with a strong focus on pixel-perfect UI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollToId("projects")}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950 text-sm font-semibold shadow-lg shadow-violet-500/30 hover:scale-[1.03] active:scale-95 transition-transform"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollToId("contact")}
                className="px-6 py-3 rounded-full border border-slate-600 text-slate-200 text-sm hover:border-cyan-400/70 hover:text-cyan-200 transition"
              >
                Contact Me
              </button>

              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-slate-600 hover:border-white/80 transition"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-slate-600 hover:border-sky-400 transition"
                >
                  <FaLinkedin className="text-xl text-sky-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 opacity-70 blur-xl" />
              {/* Card */}
              <div className="relative h-full w-full rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-6 flex flex-col items-center justify-center shadow-2xl shadow-violet-500/20">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-violet-500 to-cyan-400 flex items-center justify-center text-4xl font-bold mb-4">
                  M
                </div>
                <p className="text-sm text-slate-300 text-center">
                  React / Next.js Front-End Developer with a love for beautiful
                  interfaces and smooth micro-interactions.
                </p>
                <div className="mt-4 flex gap-3 text-xs text-slate-300">
                  <span className="px-3 py-1 rounded-full border border-violet-400/60 bg-violet-500/10">
                    Dashboards
                  </span>
                  <span className="px-3 py-1 rounded-full border border-cyan-400/60 bg-cyan-500/10">
                    E-Commerce
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-20">
          <SectionTitle label="About Me" accent="About" />
          <div className="mt-6 grid md:grid-cols-[1.6fr,1fr] gap-8">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 md:p-7 backdrop-blur-xl">
              <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                I’m a front-end developer focused on building high-quality,
                production-ready interfaces. I’ve worked on{" "}
                <span className="text-cyan-300">
                  school management dashboards, retail dashboards, restaurant
                  admin panels, and e-commerce layouts
                </span>
                , converting Figma / Webflow / HTML designs into reusable React
                components with Tailwind CSS.
              </p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4">
                My strengths are responsive layouts, component architecture,
                clean code, and attention to design details like spacing,
                hierarchy, and animations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "7+ months" },
                { label: "Projects", value: "4+ dashboards" },
                { label: "Primary Stack", value: "React + Tailwind" },
                { label: "Location", value: "India" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4"
                >
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-sm md:text-base font-semibold mt-1 text-slate-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 md:py-20">
          <SectionTitle label="Skills" accent="Tech Stack" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { name: "React.js", icon: <FaReact className="text-sky-400" /> },
              { name: "Next.js", icon: <SiNextdotjs /> },
              {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-cyan-400" />,
              },
              {
                name: "JavaScript (ES6+)",
                icon: <FaJs className="text-yellow-300" />,
              },
              {
                name: "HTML5",
                icon: <FaHtml5 className="text-orange-400" />,
              },
              { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
              { name: "Git & GitHub", icon: <FaGithub /> },
              {
                name: "REST APIs",
                icon: <FaPhoneAlt className="text-emerald-300" />,
              },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-4 py-4 flex flex-col items-center shadow-sm hover:shadow-violet-500/30 hover:-translate-y-1 transition"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition">
                  {skill.icon}
                </div>
                <p className="text-xs md:text-sm text-center text-slate-100">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 md:py-20">
          <SectionTitle label="Projects" accent="Selected Work" />
          <div className="mt-8 grid md:grid-cols-2 gap-7">
            {[
              {
                title: "School Management Dashboard",
                desc: "Dashboard with student, attendance, and report analytics. Responsive cards, table views, and filter components.",
                stack: ["React", "Tailwind", "Charts"],
              },
              {
                title: "Retail Inventory Dashboard",
                desc: "Sales performance, stock levels, and filters with search, category chips, and clean KPI cards.",
                stack: ["React", "Tailwind", "REST API"],
              },
              {
                title: "Restaurant Admin Panel",
                desc: "Menu CRUD, order tracking, feedback views and dynamic layouts for mobile & desktop.",
                stack: ["React", "Tailwind"],
              },
              {
                title: "E-Commerce UI",
                desc: "Product listing, category filters, cart, wishlist badge, and modern responsive navbar.",
                stack: ["React Router", "Context", "Tailwind"],
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative rounded-3xl border border-white/10 bg-slate-900/75 backdrop-blur-xl p-6 md:p-7 shadow-lg hover:shadow-violet-500/30 hover:-translate-y-1 transition"
              >
                <div className="absolute inset-x-6 -top-[1px] h-px bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400" />
                <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-600/70 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience (timeline style) */}
        <section id="experience" className="py-16 md:py-20">
          <SectionTitle label="Experience" accent="Timeline" />
          <div className="mt-8 relative border-l border-slate-700/70 pl-5 space-y-8">
            {[
              {
                role: "Front-End Developer (Intern / Trainee)",
                time: "7+ months",
                detail:
                  "Worked on multiple dashboards and admin interfaces, implemented responsive layouts, mega menus, sliders, and forms.",
              },
              {
                role: "Freelance / Practice Projects",
                time: "Ongoing",
                detail:
                  "Building personal projects like loyalty platforms, multi-page layouts, and reusable design systems in React.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[11px] top-1 h-3 w-3 rounded-full border border-cyan-300 bg-slate-950" />
                <h4 className="text-sm md:text-base font-semibold text-slate-50">
                  {item.role}
                </h4>
                <p className="text-xs text-cyan-300 mt-1">{item.time}</p>
                <p className="text-sm text-slate-300 mt-2 max-w-xl">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-20">
          <SectionTitle label="Contact" accent="Let’s Talk" center />
          <div className="mt-8 grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
            <div className="rounded-3xl border border-white/10 bg-slate-900/75 backdrop-blur-xl p-6 md:p-7">
              <p className="text-sm md:text-base text-slate-200 mb-4">
                Looking for a React / Next.js developer for your team or project?
                I’m open to full-time, internship, and freelance opportunities.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">
                    Email
                  </p>
                  <a
                    href="mailto:your-email@example.com"
                    className="text-cyan-300 hover:underline break-all"
                  >
                  mohanrajmohan1725@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/mohanrajmohan1725"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:underline"
                  >
                    https://github.com/mohanrajmohan1725
                  </a>
                </div>
                <div>
  <p className="text-slate-400 text-xs uppercase tracking-wide">
    LinkedIn
  </p>
  <a
    href="https://www.linkedin.com/in/mohanraj-arumugam-870a47356"
    target="_blank"
    rel="noreferrer"
    className="text-cyan-300 hover:underline"
  >
    www.linkedin.com/in/mohanraj-arumugam-870a47356
  </a>
</div>

              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-violet-500/40 bg-gradient-to-br from-violet-600/40 via-fuchsia-600/40 to-cyan-500/40 p-[1px]"
            >
              <div className="h-full w-full rounded-3xl bg-slate-950/90 p-6 flex flex-col justify-center">
                <p className="text-sm text-slate-200 mb-3">
                  Quick message:
                </p>
                <p className="text-xs text-slate-300">
                  👉 You can customize this section to embed a real contact form
                  later (React Hook Form / simple HTML form). For now, it works
                  as a beautiful CTA block.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-4 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Mohanraj • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

/* Small helper component */
function SectionTitle({ label, accent, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {accent}
      </p>
      <h2 className="mt-1 text-xl md:text-2xl font-semibold text-slate-50">
        {label}
      </h2>
    </div>
  );
}
