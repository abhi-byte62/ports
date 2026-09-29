const SectionTitle = ({ title, subtitle, tag, align = "center" }) => {
  const isLeft = align === "left";

  return (
    <div className={`max-w-3xl ${isLeft ? "" : "mx-auto text-center"}`}>
      {tag && (
        <p className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-[#5CE6A8]">
          {tag}
        </p>
      )}

      <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F5F7]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#8B96A3] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
