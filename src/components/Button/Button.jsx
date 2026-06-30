const Button = ({ children, href = "#", target, download, className = "" }) => {
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

  rounded-xl

  bg-gradient-to-r
  from-blue-600
  via-blue-500
  to-cyan-500

  px-6
  py-3

  font-medium
  text-white

  shadow-lg
  shadow-blue-500/20

  transition-all
  duration-300

  hover:-translate-y-1
  hover:scale-105
  hover:shadow-2xl
  hover:shadow-blue-500/40

  active:scale-95

  ${className}
`}
    >
      {children}
    </a>
  );
};

export default Button;
