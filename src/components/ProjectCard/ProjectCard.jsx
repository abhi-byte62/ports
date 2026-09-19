import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:bg-zinc-900/50">
      <div className="overflow-hidden bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-zinc-100">
          {project.title}
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between pt-6 border-t border-zinc-800/50">
          <Link
            to={project.route}
            className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            Case Study
            <HiArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-200"
          >
            <FaGithub className="h-4 w-4" />
            Source
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;