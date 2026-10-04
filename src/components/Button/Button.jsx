const Button = ({
  children,
  href = "#",
  target,
  download,
  variant = "primary",
  className = "",
}) => {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target={target}
      {...(download ? { download: true } : {})}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-5
        py-2.5
        text-xs
        font-semibold
        transition-colors
        duration-150
        focus-visible:outline-none
        focus-visible:ring-1
        focus-visible:ring-white/40
        ${
          isPrimary
            ? "bg-white text-black hover:bg-neutral-200"
            : "border border-white/[0.12] bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/[0.24] hover:bg-white/[0.06]"
        }
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default Button;
