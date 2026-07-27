import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImagePlaceholder from '../components/ImagePlaceholder';
import blogPosts from '../data/blogData';
import '../styles/blog.css';

const BlogDetailPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const post = blogPosts.find(p => p.id === Number(id));
  const relatedPosts = blogPosts.filter(p => p.id !== Number(id)).slice(0, 4);

  if (!post) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <main style={{ padding: '100px 0', textAlign: 'center' }}>
          <h2>Article not found</h2>
          <Link to="/blog" style={{ color: 'var(--red)' }}>Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="blog-detail-page">
        <section className="blog-detail-hero">
          <ImagePlaceholder name="blog-detail-hero" className="hero-bg" />
          <div className="hero-overlay">
            <span className="blog-detail-category">{post.category}</span>
            <h1>{post.title}</h1>
            <span className="blog-detail-date">{post.date}</span>
          </div>
        </section>

        <section className="blog-detail-content">
          <div className="page-container">
            {post.content ? post.content.map((block, i) => {
              if (block.type === 'heading') return <h2 key={i}>{block.text}</h2>;
              if (block.type === 'paragraph') return <p key={i}>{block.text}</p>;
              if (block.type === 'list') return (
                <ul key={i}>
                  {block.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              );
              return null;
            }) : (
              <>
                <p>{post.excerpt}</p>
              </>
            )}
          </div>
        </section>

        <section className="related-articles">
          <div className="page-container">
            <h2>Read More Articles</h2>
            <p>Discover more food tips, recipes and restaurant news.</p>
            <div className="related-grid">
              {relatedPosts.map(rp => (
                <Link to={`/blog/${rp.id}`} key={rp.id} className="related-card">
                  <ImagePlaceholder name={rp.image} />
                  <h4>{rp.title}</h4>
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

export default BlogDetailPage;
