import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{
        y: -6,
        boxShadow: "0 0 30px rgba(0, 240, 255, 0.15)",
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-[#2e2e3a]
        bg-[#121216]/80
        backdrop-blur-md
        glow-border
      "
    >
      {/* Image with CRT scanline */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-72 w-full object-cover transition-transform duration-700
            group-hover:scale-105
          "
        />
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-white">
          <span className="text-[#00ff9d] font-terminal text-base">▸</span>{" "}
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-[#8f8f9a]">{project.description}</p>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                font-terminal text-xs
                rounded border border-[#00f0ff]/40 bg-[#00f0ff]/5
                px-3 py-1.5 text-[#00f0ff]
                transition-colors hover:bg-[#00f0ff]/10
              "
            >
              {tech.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-between font-terminal text-sm">
          <Link
            to={project.route}
            className="
              flex items-center gap-2 text-[#a855f7] transition
              hover:text-[#00f0ff]
            "
          >
            <span className="cursor-blink">{">"}</span>
            [OBJ-DUMP]
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2 text-[#8f8f9a] transition
              hover:text-white
            "
          >
            <FaGithub />
            [SRC]
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;