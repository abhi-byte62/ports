import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ project, isFeatured = false }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
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
        className="group relative flex flex-col lg:flex-row cursor-pointer overflow-hidden rounded-xl border border-white/[0.08] bg-[#0C0C12] transition-colors duration-200 hover:border-white/[0.18]"
      >
        {/* Screenshot preview container */}
        <div className="lg:w-1/2 overflow-hidden bg-[#08080C] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex items-center justify-center p-3 sm:p-5">
          <div className="w-full h-full min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] overflow-hidden rounded-lg border border-white/[0.06] relative bg-[#050508]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Content container */}
        <div className="lg:w-1/2 flex flex-col justify-between p-6 sm:p-8">
          <div>
            {/* Header: Category & Metrics */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-mono text-neutral-400 font-medium tracking-tight">
                {project.category}
              </span>
              {project.metrics && (
                <span className="inline-flex rounded bg-white/[0.04] px-2 py-0.5 text-[11px] font-mono text-neutral-300 border border-white/[0.06]">
                  {project.metrics}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {project.title}
            </h3>

            <p className="mt-1 text-xs font-mono text-neutral-300">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="mt-3.5 text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Concise Technical Highlights */}
            {project.keyDecisions && project.keyDecisions.length > 0 && (
              <div className="mt-5 space-y-1.5 pt-3.5 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                  Architectural Highlights
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                  {project.keyDecisions.slice(0, 3).map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-neutral-500 font-mono shrink-0">·</span>
                      <span className="leading-relaxed">{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[11px] font-mono text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.08]">
            <Link
              to={project.route}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              Case Study & Blueprint
              <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <FaGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </article>
    );
  }

  // Secondary Specialized Systems Card
  return (
    <article
      onClick={handleCardClick}
      className="group flex flex-col justify-between cursor-pointer overflow-hidden rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 transition-colors duration-200 hover:border-white/[0.18]"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span className="text-[10px] font-mono text-neutral-400 font-medium">
            {project.category}
          </span>
          {project.metrics && (
            <span className="inline-flex rounded bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-neutral-300 border border-white/[0.06]">
              {project.metrics}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-white tracking-tight">
          {project.title}
        </h3>

        <p className="mt-0.5 text-xs font-mono text-neutral-300">
          {project.subtitle}
        </p>

        <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
          {project.description}
        </p>

        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <div className="mt-3.5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
              Implementation Notes
            </span>
            <ul className="space-y-1 text-xs text-neutral-300 font-sans">
              {project.keyDecisions.slice(0, 2).map((decision, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neutral-500 font-mono shrink-0">·</span>
                  <span className="leading-relaxed">{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[11px] font-mono text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.08]">
        <Link
          to={project.route}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-neutral-300 transition-colors"
        >
          Case Study
          <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <FaGithub className="h-3.5 w-3.5" />
          GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;