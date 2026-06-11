const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="section-heading">
      {subtitle && <div className="subtitle">{subtitle}</div>}
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeading;
