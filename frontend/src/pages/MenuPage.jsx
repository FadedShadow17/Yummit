import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImagePlaceholder from '../components/ImagePlaceholder';
import '../styles/menu.css';

const menuItems = [
  { id: 1, name: 'Chicken Momo', price: 'Rs. 250', category: 'Nepali', image: 'menu-momo' },
  { id: 2, name: 'Buff Chowmein', price: 'Rs. 200', category: 'Nepali', image: 'menu-chowmein' },
  { id: 3, name: 'Chicken Sekuwa', price: 'Rs. 450', category: 'Nepali', image: 'menu-sekuwa' },
  { id: 4, name: 'Classic Burger', price: 'Rs. 350', category: 'Fast Food', image: 'menu-burger' },
  { id: 5, name: 'Pepperoni Pizza', price: 'Rs. 550', category: 'Fast Food', image: 'menu-pizza' },
  { id: 6, name: 'Chicken Chilly', price: 'Rs. 380', category: 'Fast Food', image: 'menu-chickenchilly' },
  { id: 7, name: 'Fried Rice', price: 'Rs. 280', category: 'Chinese', image: 'menu-friedrice' },
  { id: 8, name: 'Manchurian', price: 'Rs. 320', category: 'Chinese', image: 'menu-manchurian' },
  { id: 9, name: 'Hot & Sour Soup', price: 'Rs. 180', category: 'Chinese', image: 'menu-soup' },
  { id: 10, name: 'Korean Fried Chicken', price: 'Rs. 520', category: 'Korean', image: 'menu-kfc' },
  { id: 11, name: 'Bibimbap', price: 'Rs. 480', category: 'Korean', image: 'menu-bibimbap' },
  { id: 12, name: 'Tteokbokki', price: 'Rs. 350', category: 'Korean', image: 'menu-tteokbokki' },
];

const categories = ['All', 'Nepali', 'Fast Food', 'Chinese', 'Korean'];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="menu-page">
        <section className="menu-page-header">
          <div className="page-container">
            <h1>Our Menu</h1>
            <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container">
            <div className="menu-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={activeCategory === cat ? 'active' : ''}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="menu-items-grid">
              {filteredItems.map(item => (
                <div key={item.id} className="menu-item-card">
                  <ImagePlaceholder name={item.image} className="item-image" />
                  <div className="menu-item-body">
                    <h4>{item.name}</h4>
                    <span className="item-price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="order-apps">
          <div className="page-container">
            <h2>You can order through apps</h2>
            <p className="order-apps-subtitle">Click on any app below to place your order</p>
            <div className="apps-grid">
              <a href="https://www.pathaofoods.com" target="_blank" rel="noopener noreferrer" className="app-logo-link">
                <img src="/images/pathao-foods.png" alt="Pathao Foods" className="app-logo-img" />
                <span>Pathao Foods</span>
              </a>
              <a href="https://www.foodmandu.com" target="_blank" rel="noopener noreferrer" className="app-logo-link">
                <img src="/images/foodmandu.png" alt="Foodmandu" className="app-logo-img" />
                <span>Foodmandu</span>
              </a>
              <a href="https://www.bhojdeals.com" target="_blank" rel="noopener noreferrer" className="app-logo-link">
                <img src="/images/bhojdeals.png" alt="BhojDeals" className="app-logo-img" />
                <span>BhojDeals</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
