import { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="logo">
            <img src="/images/yummit.png" alt="Yummit" className="logo-img" />
            <span className="logo-text">Yummit</span>
          </Link>
          <div className={`nav-links ${open ? 'open' : ''}`}>
            <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
            <NavLink to="/menu" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Menu</NavLink>
            <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          </div>
          <div className="nav-actions">
            {user ? (
              <Link to="/profile" className="nav-avatar" title="Profile">
                {user.firstName?.[0]?.toUpperCase() || 'U'}
              </Link>
            ) : (
              <Link to="/login" className="nav-auth-link">Login</Link>
            )}
            <Link to="/book" className="book-btn">Book A Table</Link>
            <button className="hamburger" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">☰</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
