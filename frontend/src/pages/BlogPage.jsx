import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImagePlaceholder from '../components/ImagePlaceholder';
import blogPosts from '../data/blogData';
import '../styles/blog.css';

const BlogPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="blog-page-main">
        <section className="blog-page-header">
          <div className="page-container">
            <h1>Our Blog & Articles</h1>
            <p>Discover food tips, recipes, restaurant news and dining inspiration from our chefs and food lovers.</p>
          </div>
        </section>

        <section className="blog-listing">
          <div className="page-container">
            <div className="blog-listing-grid">
              {blogPosts.map(post => (
                <Link to={`/blog/${post.id}`} key={post.id} className="blog-listing-card">
                  <ImagePlaceholder name={post.image} className="blog-listing-img" />
                  <div className="blog-listing-body">
                    <span className="blog-listing-date">{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
