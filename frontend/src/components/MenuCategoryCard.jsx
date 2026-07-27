import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

const MenuCategoryCard = ({ title, description, icon }) => {
  return (
    <Link to={`/menu?category=${encodeURIComponent(title)}`} className="menu-card" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="menu-icon">
        <ImagePlaceholder name={icon} className="small-icon rounded" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="link">Explore Menu</span>
    </Link>
  );
};

export default MenuCategoryCard;
