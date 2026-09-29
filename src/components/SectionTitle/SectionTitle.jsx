const SectionTitle = ({ title, subtitle, tag, align = "center" }) => {
  const isLeft = align === "left";

  return (
    <div className={`max-w-3xl ${isLeft ? "" : "mx-auto text-center"}`}>
      {tag && (
        <p className="mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
          {tag}
        </p>
      )}

      <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FF]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#8D99B5] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
