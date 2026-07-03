import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

const BlogCard = ({ id, date, title, excerpt, image, large = false }) => {
  const content = (
    <article className={`blog-card ${large ? 'large' : ''}`}>
      <ImagePlaceholder name={image} className="blog-img" />
      <div className="blog-body">
        <div className="meta">{date}</div>
        <h4>{title}</h4>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </article>
  );

  if (id) {
    return <Link to={`/blog/${id}`} className="blog-card-link">{content}</Link>;
  }
  return content;
};

export default BlogCard;
