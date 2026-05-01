import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#020617] text-white font-[Poppins] scroll-smooth">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 border-b border-gray-800 sticky top-0 bg-[#020617]/80 backdrop-blur z-50">
        <h1 className="font-bold text-lg relative group cursor-pointer">
          <span className="group-hover:text-cyan-400 transition">Mohanraj</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-300">
          {["about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-cyan-400 transition capitalize"
              >
                {item}
              </a>
            ),
          )}
        </div>

        {/* MOBILE ICON */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#020617] border-b border-gray-800">
          {["about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 capitalize"
              >
                {item}
              </a>
            ),
          )}
        </div>
      )}

      {/* HERO */}
      <section className="text-center py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-purple-500/20 blur-3xl top-0 left-0"></div>
        <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-cyan-500/20 blur-3xl bottom-0 right-0"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-cyan-400">Mohanraj</span> 👋 <br />
          Frontend Developer building{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            scalable web apps
          </span>
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto text-sm md:text-base">
          Specialized in building dashboards, admin panels, and real-world web
          applications using React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <a href="#projects">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold w-full md:w-auto">
              View Projects
            </button>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 hover:text-cyan-400">About Me</h2>

        <p className="text-gray-400 leading-7">
          I am a passionate <b>Frontend Developer with 1+ year of experience</b>
          building modern, scalable, and user-friendly web applications.
        </p>

        <p className="text-gray-400 leading-7 mt-4">
          I have worked on real-world projects such as admin dashboards,
          e-commerce platforms, and task management systems, focusing on
          performance, responsiveness, and maintainable code architecture.
        </p>

        <ul className="mt-6 space-y-2 text-gray-400">
          <li>✔ 1+ year hands-on experience</li>
          <li>✔ Built 3+ real-world projects</li>
          <li>✔ React, Next.js & Tailwind</li>
          <li>✔ Firebase Authentication & Firestore</li>
          <li>✔ Responsive design</li>
          <li>✔ CRUD operations</li>
          <li>✔ Component-based architecture</li>
          <li>✔ Performance optimization</li>
        </ul>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-[#0f172a] border border-gray-800 rounded-xl">
            <h3 className="text-cyan-400 mb-2">💡 What I Do</h3>
            <p className="text-gray-400 text-sm">
              I build responsive web applications, dashboards, and modern UI
              systems.
            </p>
          </div>

          <div className="p-4 bg-[#0f172a] border border-gray-800 rounded-xl">
            <h3 className="text-cyan-400 mb-2">🎯 Goal</h3>
            <p className="text-gray-400 text-sm">
              Become a top frontend engineer and build scalable products.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-10 hover:text-cyan-400">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "React",
            "Next.js",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind",
            "Firebase",
            "Git",
            "REST APIs",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-[#0f172a] rounded-xl border border-gray-800 text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-10 hover:text-cyan-400">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "E-Commerce App",
              desc: "Full-featured ecommerce with auth & cart",
              points: [
                "✔ Product filtering",
                "✔ Firebase Auth",
                "✔ Cart system",
                "✔ Responsive UI",
              ],
              tech: ["React", "Tailwind", "Firebase"],
              live: "https://ecommerce-project-phi-lac.vercel.app/login",
              code: "https://github.com/mohanrajmohan1725/Ecommerce-project",
            },
            {
              title: "Admin Dashboard",
              desc: "Dashboard with analytics",
              points: [
                "✔ Charts",
                "✔ Realtime data",
                "✔ Reusable components",
                "✔ Performance optimized",
              ],
              tech: ["React", "Chart.js", "Firebase"],
              live: "#",
              code: "#",
            },
            {
              title: "Task Manager",
              desc: "Task app with CRUD",
              points: [
                "✔ CRUD",
                "✔ Realtime sync",
                "✔ Clean UI",
                "✔ Responsive",
              ],
              tech: ["React", "Tailwind", "Firebase"],
              live: "https://admin-dashboard-iota-five-53.vercel.app/",
              code: "https://github.com/mohanrajmohan1725/task-manager",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-[#0f172a] border border-gray-800 rounded-xl hover:border-cyan-400"
            >
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.desc}</p>

              <ul className="mt-3 text-sm text-gray-400 space-y-1">
                {project.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-[#020617] border border-gray-700 rounded-full text-cyan-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-cyan-400 flex items-center gap-1"
                >
                  Live <HiOutlineExternalLink />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  Code <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      {/* EXPERIENCE */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 hover:text-cyan-400">Experience</h2>

        <div className="relative border-l border-gray-700 pl-6 md:pl-8 space-y-12">
          {/* ITEM */}
          <div className="relative">
            {/* DOT */}
            <span className="absolute -left-3 md:-left-4 top-2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></span>

            <h3 className="text-xl font-semibold">
              Frontend Developer
              <span className="ml-2 text-sm text-cyan-400 font-medium">
                • 1+ Year Experience
              </span>
            </h3>

            <p className="text-gray-400 mt-4 leading-7 text-sm md:text-base">
              Frontend Developer with <b>1+ year of hands-on experience</b>{" "}
              building scalable and responsive web applications including admin
              dashboards, e-commerce platforms, and task management systems.
            </p>

            {/* POINTS */}
            <ul className="mt-4 space-y-2 text-gray-400 text-sm md:text-base">
              <li>✔ Built 3+ real-world projects with modern UI/UX</li>
              <li>
                ✔ Developed scalable UI using React, Next.js & Tailwind CSS
              </li>
              <li>
                ✔ Integrated Firebase Authentication & Firestore (real-time
                data)
              </li>
              <li>✔ Designed fully responsive layouts across all devices</li>
              <li>✔ Implemented CRUD operations & optimized performance</li>
              <li>
                ✔ Improved code reusability using component-based architecture
              </li>
            </ul>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["React", "Next.js", "Tailwind", "Firebase"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-[#0f172a] border border-gray-700 rounded-full text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-16 md:py-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let's build something amazing 🚀
        </h2>

        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Feel free to reach out for collaborations or opportunities
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          {/* EMAIL */}
          <a
            href="mailto:mohanrajmohan1725@gmail.com"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#0f172a] border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <FaEnvelope className="text-lg" />
            <span>Email</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/mohanrajmohan1725"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#0f172a] border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/mohanraj-arumugam-870a47356/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#0f172a] border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © 2026 Mohanraj
      </footer>
    </div>
  );
}
