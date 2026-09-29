import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#1C2942] bg-[#0D1424] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4D7CFF]/35 hover:bg-[#10182A]">
      <div className="overflow-hidden bg-[#050914] border-b border-[#1C2942]">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 sm:h-60 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {project.metrics && (
          <div className="mb-3">
            <span className="inline-flex rounded bg-[#0D1B3A] px-2.5 py-0.5 text-[11px] font-mono font-medium text-[#6D96FF] border border-[#4D7CFF]/20">
              {project.metrics}
            </span>
          </div>
        )}

        <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#F5F7FF] group-hover:text-[#6D96FF] transition-colors">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mt-1 text-xs font-mono text-[#8D99B5]/80">
            {project.subtitle}
          </p>
        )}

        <p className="mt-3.5 text-[#8D99B5] text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#142036] bg-[#080E1B] px-2 py-0.5 text-[11px] font-mono text-[#8D99B5]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between pt-5 border-t border-[#1C2942]">
          <Link
            to={project.route}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4D7CFF] hover:text-[#6D96FF] transition-colors"
          >
            Engineering Case Study
            <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#8D99B5] hover:text-[#F5F7FF] transition-colors"
          >
            <FaGithub className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;