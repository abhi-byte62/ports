import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-blue-500/5">
      <div className="overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        {project.metrics && (
          <div className="mb-3">
            <span className="inline-flex rounded bg-blue-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-blue-400 border border-blue-500/20">
              {project.metrics}
            </span>
          </div>
        )}

        <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mt-1 text-xs font-mono text-zinc-500">
            {project.subtitle}
          </p>
        )}

        <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between pt-6 border-t border-zinc-800/60">
          <Link
            to={project.route}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read Case Study
            <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <FaGithub className="h-4 w-4" />
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;