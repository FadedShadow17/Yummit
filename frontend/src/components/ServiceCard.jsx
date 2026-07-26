import ImagePlaceholder from './ImagePlaceholder';

const ServiceCard = ({ title, description, name }) => {
  return (
    <div className="service-card">
      <ImagePlaceholder name={name} className="service-img" rounded />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
