const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 uppercase tracking-[0.25em] text-blue-400">
        Portfolio
      </p>

      <h2
        className="
          font-['Space_Grotesk']
          text-4xl
          md:text-5xl
          font-bold
        "
      >
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-400">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
