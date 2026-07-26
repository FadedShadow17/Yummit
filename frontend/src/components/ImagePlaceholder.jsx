import images from '../data/images';

const ImagePlaceholder = ({ name = 'image', className = '' }) => {
  const src = images[name];

  if (src) {
    return (
      <img
        src={src}
        alt={name.replace(/-/g, ' ')}
        className={`image-placeholder ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div className={`image-placeholder ${className}`} aria-hidden="true">
      <span>{name}</span>
    </div>
  );
};

export default ImagePlaceholder;
