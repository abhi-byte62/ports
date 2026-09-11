const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 font-terminal text-xs md:text-sm tracking-wider text-[#00f0ff]">
        <span className="text-[#00ff9d]">$</span> ./load --section
        <span className="text-[#8f8f9a]">=</span>
        <span className="text-[#a855f7]">{title.toUpperCase().replace(/ /g, "_")}</span>
      </p>

      <h2
        className="
          font-['Space_Grotesk']
          text-4xl
          md:text-5xl
          font-bold
          text-white
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-[#8f8f9a]">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;