import ImagePlaceholder from './ImagePlaceholder';

const TestimonialCard = ({ quoteTitle, text, name, location, image }) => {
  return (
    <div className="testimonial-card">
      <h3 className="quote-title">{quoteTitle}</h3>
      <p className="review">{text}</p>
      <hr />
      <div className="meta">
        <ImagePlaceholder name={image} className="avatar" rounded />
        <div>
          <div className="person-name">{name}</div>
          <div className="person-location">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
