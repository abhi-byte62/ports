import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        backdrop-blur-lg
      "
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-72
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="p-8">
        <h3 className="text-3xl font-bold">{project.title}</h3>

        <p className="mt-4 leading-8 text-zinc-400">{project.description}</p>

        {/* Tech */}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-zinc-700
                px-4
                py-2
                text-sm
                text-zinc-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex items-center justify-between">
          <Link
            to={project.route}
            className="
              flex
              items-center
              gap-2
              font-medium
              text-blue-400
              transition
              hover:text-blue-300
            "
          >
            Case Study
            <HiArrowRight />
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              text-zinc-300
              transition
              hover:text-white
            "
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
