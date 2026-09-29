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
        focus-visible:ring-[#5CE6A8]
        ${
          isPrimary
            ? "bg-[#5CE6A8] text-[#080A0C] hover:bg-[#72F0B5] hover:shadow-sm"
            : "border border-[#222A32] bg-[#101419] text-[#F2F5F7] hover:border-[#5CE6A8] hover:text-[#5CE6A8]"
        }
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default Button;
