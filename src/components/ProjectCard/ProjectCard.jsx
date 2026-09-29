import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#1C2942] bg-[#0D1424] transition-all duration-300 hover:-translate-y-1 hover:border-[#4D7CFF]/40 hover:bg-[#10182A] hover:shadow-lg hover:shadow-[#183A91]/15">
      <div className="overflow-hidden bg-[#050914] border-b border-[#1C2942]">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        {project.metrics && (
          <div className="mb-3">
            <span className="inline-flex rounded bg-[#0D1B3A] px-2.5 py-1 text-[11px] font-mono font-semibold text-[#6D96FF] border border-[#4D7CFF]/20">
              {project.metrics}
            </span>
          </div>
        )}

        <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F5F7FF] group-hover:text-[#6D96FF] transition-colors">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mt-1 text-xs font-mono text-[#8D99B5]/80">
            {project.subtitle}
          </p>
        )}

        <p className="mt-4 text-[#8D99B5] text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#142036] bg-[#0D1B3A] px-2.5 py-1 text-xs font-medium text-[#6D96FF]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#1C2942]">
          <Link
            to={project.route}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4D7CFF] hover:text-[#6D96FF] transition-colors"
          >
            Read Case Study
            <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#8D99B5] hover:text-[#F5F7FF] transition-colors"
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