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
        rounded-lg
        px-5
        py-2.5
        text-sm
        font-semibold
        transition-all
        duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#4D7CFF]
        ${
          isPrimary
            ? "bg-[#4D7CFF] text-[#050914] hover:bg-[#6D96FF] hover:shadow-sm"
            : "border border-[#1C2942] bg-transparent text-[#F5F7FF] hover:border-[#4D7CFF] hover:text-[#6D96FF]"
        }
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default Button;
