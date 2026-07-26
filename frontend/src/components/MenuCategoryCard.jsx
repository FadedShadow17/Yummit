import ImagePlaceholder from './ImagePlaceholder';

const MenuCategoryCard = ({ title, description, icon }) => {
  return (
    <div className="menu-card">
      <div className="menu-icon">
        <ImagePlaceholder name={icon} className="small-icon rounded" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="link">Explore Menu</a>
    </div>
  );
};

export default MenuCategoryCard;
