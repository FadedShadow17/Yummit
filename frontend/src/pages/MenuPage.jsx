import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImagePlaceholder from '../components/ImagePlaceholder';
import '../styles/menu.css';

const menuItems = [
  // Nepali
  { id: 1, name: 'Chicken Momo', price: 'Rs. 250', category: 'Nepali', image: 'menu-momo' },
  { id: 2, name: 'Buff Chowmein', price: 'Rs. 200', category: 'Nepali', image: 'menu-chowmein' },
  { id: 3, name: 'Chicken Sekuwa', price: 'Rs. 450', category: 'Nepali', image: 'menu-sekuwa' },
  { id: 4, name: 'Thukpa', price: 'Rs. 220', category: 'Nepali', image: 'menu-thukpa' },
  { id: 5, name: 'Dal Bhat Set', price: 'Rs. 350', category: 'Nepali', image: 'menu-dalbhat' },
  { id: 6, name: 'Samosa', price: 'Rs. 80', category: 'Nepali', image: 'menu-samosa' },
  { id: 7, name: 'Chatamari', price: 'Rs. 180', category: 'Nepali', image: 'menu-chatamari' },
  { id: 8, name: 'Sel Roti', price: 'Rs. 60', category: 'Nepali', image: 'menu-selroti' },

  // Fast Food
  { id: 9, name: 'Classic Burger', price: 'Rs. 350', category: 'Fast Food', image: 'menu-burger' },
  { id: 10, name: 'Pepperoni Pizza', price: 'Rs. 550', category: 'Fast Food', image: 'menu-pizza' },
  { id: 11, name: 'Chicken Chilly', price: 'Rs. 380', category: 'Fast Food', image: 'menu-chickenchilly' },
  { id: 12, name: 'Loaded Fries', price: 'Rs. 220', category: 'Fast Food', image: 'menu-fries' },
  { id: 13, name: 'Buffalo Wings', price: 'Rs. 420', category: 'Fast Food', image: 'menu-wings' },
  { id: 14, name: 'Club Sandwich', price: 'Rs. 280', category: 'Fast Food', image: 'menu-sandwich' },
  { id: 15, name: 'Chicken Nuggets', price: 'Rs. 300', category: 'Fast Food', image: 'menu-nuggets' },
  { id: 16, name: 'Hot Dog', price: 'Rs. 180', category: 'Fast Food', image: 'menu-hotdog' },

  // Chinese
  { id: 17, name: 'Fried Rice', price: 'Rs. 280', category: 'Chinese', image: 'menu-friedrice' },
  { id: 18, name: 'Manchurian', price: 'Rs. 320', category: 'Chinese', image: 'menu-manchurian' },
  { id: 19, name: 'Hot & Sour Soup', price: 'Rs. 180', category: 'Chinese', image: 'menu-soup' },
  { id: 20, name: 'Chop Suey', price: 'Rs. 300', category: 'Chinese', image: 'menu-chopsuey' },
  { id: 21, name: 'Dim Sum', price: 'Rs. 350', category: 'Chinese', image: 'menu-dimsum' },
  { id: 22, name: 'Spring Rolls', price: 'Rs. 200', category: 'Chinese', image: 'menu-springroll' },
  { id: 23, name: 'Hakka Noodles', price: 'Rs. 260', category: 'Chinese', image: 'menu-noodles' },
  { id: 24, name: 'Wontons', price: 'Rs. 240', category: 'Chinese', image: 'menu-wontons' },

  // Korean
  { id: 25, name: 'Korean Fried Chicken', price: 'Rs. 520', category: 'Korean', image: 'menu-kfc' },
  { id: 26, name: 'Bibimbap', price: 'Rs. 480', category: 'Korean', image: 'menu-bibimbap' },
  { id: 27, name: 'Tteokbokki', price: 'Rs. 350', category: 'Korean', image: 'menu-tteokbokki' },
  { id: 28, name: 'Japchae', price: 'Rs. 400', category: 'Korean', image: 'menu-japchae' },
  { id: 29, name: 'Kimchi Stew', price: 'Rs. 380', category: 'Korean', image: 'menu-kimchi' },
  { id: 30, name: 'Bulgogi', price: 'Rs. 550', category: 'Korean', image: 'menu-bulgogi' },
  { id: 31, name: 'Ramyeon', price: 'Rs. 280', category: 'Korean', image: 'menu-ramyeon' },
  { id: 32, name: 'Kimbap', price: 'Rs. 320', category: 'Korean', image: 'menu-kimbap' },
];

const categories = ['All', 'Nepali', 'Fast Food', 'Chinese', 'Korean'];

const MenuPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <div className="menu-search-wrapper">
              <div className="menu-search-box">
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="menu-search-input"
                />
                {searchQuery && (
                  <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

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

            {filteredItems.length > 0 ? (
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
            ) : (
              <div className="menu-no-results">
                <p>No dishes found for "{searchQuery}"</p>
                <span>Try a different search term or browse by category</span>
              </div>
            )}
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
