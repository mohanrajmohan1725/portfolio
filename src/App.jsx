import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
{
  /* CONTACT */
}
import { FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="bg-[#020617] text-white font-[Poppins]">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="font-bold text-lg relative group cursor-pointer">
          <span className="group-hover:text-cyan-400 transition">Mohanraj</span>

          {/* underline animation */}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </h1>
        <div className="space-x-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-4 relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl bottom-0 right-0"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-cyan-400">Mohanraj</span> 👋 <br />
          Frontend Developer building{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            scalable web apps
          </span>
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Specialized in building dashboards, admin panels, and real-world web
          applications using React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold">
            View Projects
          </button>
          {/* <button className="px-6 py-2 border border-gray-600 rounded-full">
            Resume
          </button> */}
        </div>

        {/* <div className="flex justify-center gap-4 mt-6 text-xl">
          <FaGithub />
          <FaLinkedin />
        </div> */}
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <p className="text-gray-400 leading-7">
          I am a passionate <b>Frontend Developer with 1+ year of experience</b>
          building modern, scalable, and user-friendly web applications. I
          specialize in creating clean UI/UX and high-performance applications
          using React, Next.js, and Tailwind CSS.
        </p>

        <p className="text-gray-400 leading-7 mt-4">
          I have worked on real-world projects such as admin dashboards,
          e-commerce platforms, and task management systems, focusing on
          performance, responsiveness, and maintainable code architecture.
        </p>

        {/* HIGHLIGHTS */}
        <ul className="mt-6 space-y-2 text-gray-400">
          <li>✔ 1+ year hands-on experience in frontend development</li>
          <li>✔ Built 3+ real-world projects with modern UI</li>
          <li>✔ Strong knowledge in React, Next.js & Tailwind CSS</li>
          <li>✔ Firebase Authentication & Firestore (real-time apps)</li>
          <li>✔ Responsive design for mobile, tablet & desktop</li>
          <li>✔ CRUD operations with real-time data handling</li>
          <li>✔ Component-based architecture & reusable code</li>
          <li>✔ Performance optimization & clean UI design</li>
        </ul>

        {/* EXTRA SECTION */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-[#0f172a] border border-gray-800 rounded-xl">
            <h3 className="font-semibold text-cyan-400 mb-2">💡 What I Do</h3>
            <p className="text-gray-400 text-sm">
              I build responsive web applications, dashboards, and modern UI
              systems with a focus on performance and user experience.
            </p>
          </div>

          <div className="p-4 bg-[#0f172a] border border-gray-800 rounded-xl">
            <h3 className="font-semibold text-cyan-400 mb-2">🎯 Goal</h3>
            <p className="text-gray-400 text-sm">
              My goal is to become a top frontend engineer and contribute to
              building scalable products used by thousands of users.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
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
              className="p-4 bg-[#0f172a] rounded-xl border border-gray-800 shadow-lg"
            >
              <p>{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
        <section id="about" className="max-w-5xl mx-auto py-20 px-4">

        <h2 className="text-2xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "E-Commerce App",
              desc: "A full-featured e-commerce web application with product filtering, authentication, and cart management. Users can browse products, add to cart, and securely login using Firebase authentication.",
              points: [
                "✔ Implemented dynamic product filtering & category-based navigation",
                "✔ Integrated Firebase Authentication (Login/Signup)",
                "✔ Built cart system with real-time updates",
                "✔ Responsive UI optimized for all devices",
              ],
              tech: ["React", "Tailwind", "Firebase"],
              live: "https://ecommerce-project-phi-lac.vercel.app/login",
              code: "https://github.com/mohanrajmohan1725/Ecommerce-project",
            },
            {
              title: "Admin Dashboard",
              desc: "A modern admin dashboard for managing data, analytics, and user activities with interactive charts and real-time updates.",
              points: [
                "✔ Designed dashboard UI with charts & analytics",
                "✔ Integrated real-time data using Firebase",
                "✔ Built reusable components for scalability",
                "✔ Optimized performance for smooth user experience",
              ],
              tech: ["React", "Chart.js", "Firebase"],
              live: "https://your-admin-live-link.com",
              code: "https://github.com/mohanrajmohan1725/admin-dashboard",
            },
            {
              title: "Task Manager",
              desc: "A task management application with full CRUD functionality and real-time synchronization, helping users organize and track daily tasks efficiently.",
              points: [
                "✔ Implemented CRUD operations (Create, Read, Update, Delete)",
                "✔ Real-time task sync using Firebase Firestore",
                "✔ Clean UI with status tracking (completed/pending)",
                "✔ Mobile responsive design",
              ],
              tech: ["React", "Tailwind", "Firebase"],
              live: "https://admin-dashboard-iota-five-53.vercel.app/",
              code: "https://github.com/mohanrajmohan1725/task-manager",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-[#0f172a] border border-gray-800 rounded-xl hover:border-cyan-400 transition"
            >
              <h3 className="font-semibold text-lg">{project.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mt-2">{project.desc}</p>

              {/* POINTS */}
              <ul className="mt-3 text-sm text-gray-400 space-y-1">
                {project.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>

              {/* TECH TAGS */}
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

              {/* LINKS */}
              <div className="flex gap-4 mt-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  Live <HiOutlineExternalLink />
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-cyan-400"
                >
                  Code <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

        <div className="relative border-l border-gray-700 pl-8 space-y-12">
          {/* ITEM 1 */}
          <div className="relative">
            <span className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></span>

            <h3 className="text-xl font-semibold">
              Frontend Developer
              <span className="ml-2 text-sm text-cyan-400 font-medium">
                • 1+ Year Experience
              </span>
            </h3>

            {/* <p className="text-sm text-gray-400 mt-1">
        Self Projects • 2024 - Present
      </p> */}

            <p className="text-gray-400 mt-4 leading-7">
              Frontend Developer with <b>1+ year of hands-on experience</b>{" "}
              building scalable and responsive web applications including admin
              dashboards, e-commerce platforms, and task management systems.
            </p>

            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
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

      <section id="contact" className="text-center py-20 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Let's build something amazing 🚀
        </h2>

        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaborations or opportunities
        </p>

        {/* CONTACT LINKS */}
        <div className="flex justify-center gap-6 mt-6 text-lg">
          {/* EMAIL */}
          <a
            href="mailto:mohanrajmohan1725@gmail.com"
            className="flex items-center gap-2  text-gray-300 hover:text-cyan-400"
          >
            <FaEnvelope />
            Email
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/mohanrajmohan1725"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400"
          >
            <FaGithub />
            GitHub
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/mohanraj-arumugam-870a47356/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400"
          >
            <FaLinkedin />
            LinkedIn
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
