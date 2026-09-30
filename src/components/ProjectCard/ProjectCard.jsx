import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ project, isFeatured = false }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // If the click originated from an interactive element (e.g. GitHub link), let it handle itself
    if (e.target.closest("a") || e.target.closest("button")) {
      return;
    }
    if (project.route) {
      navigate(project.route);
    }
  };

  if (isFeatured) {
    return (
      <article
        onClick={handleCardClick}
        className="group relative flex flex-col lg:flex-row cursor-pointer overflow-hidden rounded-2xl border border-[#1C2942] bg-[#0D1424] transition-all duration-200 hover:border-[#4D7CFF]/50 hover:bg-[#10182A] hover:shadow-xl hover:shadow-[#4D7CFF]/5"
      >
        {/* Screenshot preview container */}
        <div className="lg:w-1/2 overflow-hidden bg-[#050914] border-b lg:border-b-0 lg:border-r border-[#1C2942] flex items-center justify-center p-2 sm:p-4">
          <div className="w-full h-full min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] overflow-hidden rounded-lg border border-[#1C2942]/60 relative bg-[#080E1B]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content container */}
        <div className="lg:w-1/2 flex flex-col justify-between p-6 sm:p-8">
          <div>
            {/* Header: Category & Metrics */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#4D7CFF] font-semibold">
                {project.category}
              </span>
              {project.metrics && (
                <span className="inline-flex rounded bg-[#080E1B] px-2.5 py-0.5 text-[11px] font-mono text-[#8D99B5] border border-[#1C2942]">
                  {project.metrics}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F5F7FF] group-hover:text-[#6D96FF] transition-colors">
              {project.title}
            </h3>

            <p className="mt-1 text-xs font-mono text-[#8D99B5]">
              {project.subtitle}
            </p>

            {/* Problem / Solution Summary */}
            <p className="mt-4 text-[#8D99B5] text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Key Architectural Decisions */}
            {project.keyDecisions && project.keyDecisions.length > 0 && (
              <div className="mt-4 space-y-1.5 pt-3 border-t border-[#1C2942]/60">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#5F6B83]">
                  Key Engineering Decisions
                </span>
                <ul className="space-y-1 text-xs text-[#8D99B5]">
                  {project.keyDecisions.slice(0, 2).map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#4D7CFF] mt-0.5 shrink-0">▹</span>
                      <span className="leading-snug">{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
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
          </div>

          {/* Actions Footer */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#1C2942]">
            <Link
              to={project.route}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4D7CFF] group-hover:text-[#6D96FF] transition-colors"
            >
              Deep Architecture Case Study
              <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#8D99B5] hover:text-[#F5F7FF] transition-colors"
            >
              <FaGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </article>
    );
  }

  // Secondary Compact Project Card
  return (
    <article
      onClick={handleCardClick}
      className="group flex flex-col justify-between cursor-pointer overflow-hidden rounded-xl border border-[#1C2942] bg-[#0D1424] p-6 transition-all duration-200 hover:border-[#4D7CFF]/50 hover:bg-[#10182A] hover:shadow-lg"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#4D7CFF] font-semibold">
            {project.category}
          </span>
          {project.metrics && (
            <span className="inline-flex rounded bg-[#080E1B] px-2 py-0.5 text-[10px] font-mono text-[#8D99B5] border border-[#1C2942]">
              {project.metrics}
            </span>
          )}
        </div>

        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F7FF] group-hover:text-[#6D96FF] transition-colors">
          {project.title}
        </h3>

        <p className="mt-0.5 text-xs font-mono text-[#8D99B5]/80">
          {project.subtitle}
        </p>

        <p className="mt-3 text-[#8D99B5] text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>

        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <div className="mt-3.5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#5F6B83]">
              Implementation Notes
            </span>
            <ul className="space-y-1 text-xs text-[#8D99B5]">
              {project.keyDecisions.slice(0, 2).map((decision, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#4D7CFF] shrink-0">▹</span>
                  <span className="leading-snug">{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-[#142036] bg-[#080E1B] px-2 py-0.5 text-[11px] font-mono text-[#8D99B5]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#1C2942]">
        <Link
          to={project.route}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4D7CFF] group-hover:text-[#6D96FF] transition-colors"
        >
          Case Study
          <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#8D99B5] hover:text-[#F5F7FF] transition-colors"
        >
          <FaGithub className="h-3.5 w-3.5" />
          GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;