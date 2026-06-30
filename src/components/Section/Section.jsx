const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
