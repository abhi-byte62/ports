import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#222A32] bg-[#101419] transition-all duration-300 hover:-translate-y-1 hover:border-[#5CE6A8]/40 hover:shadow-lg hover:shadow-[#5CE6A8]/5">
      <div className="overflow-hidden bg-[#080A0C] border-b border-[#222A32]">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        {project.metrics && (
          <div className="mb-3">
            <span className="inline-flex rounded bg-[#10261C] px-2.5 py-1 text-[11px] font-mono font-semibold text-[#5CE6A8] border border-[#5CE6A8]/20">
              {project.metrics}
            </span>
          </div>
        )}

        <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F2F5F7] group-hover:text-[#72F0B5] transition-colors">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mt-1 text-xs font-mono text-[#8B96A3]/80">
            {project.subtitle}
          </p>
        )}

        <p className="mt-4 text-[#8B96A3] text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#222A32] bg-[#080A0C] px-2.5 py-1 text-xs font-medium text-[#8B96A3]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#222A32]">
          <Link
            to={project.route}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5CE6A8] hover:text-[#72F0B5] transition-colors"
          >
            Read Case Study
            <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#8B96A3] hover:text-[#F2F5F7] transition-colors"
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