import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src="/images/yummit.png" alt="Yummit" className="footer-logo-img" />
            <span className="footer-logo-text">Yummit</span>
          </div>
          <div className="footer-stars">★★★★☆</div>
          <p className="footer-tagline">Delicious food & memorable dining experiences since 1995.</p>
        </div>
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Utility Pages</h4>
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact-bar">
        <div className="page-container footer-contact-inner">
          <span>+977-9800000000</span>
          <span>food@yummit.com</span>
          <span>Follow us on social media</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="page-container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Yummit. All rights reserved.</span>
          <span className="footer-bottom-right">Thamel, Kathmandu, Nepal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
