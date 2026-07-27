import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { AuthContext } from '../context/AuthContext';
import '../styles/book.css';

const restaurants = [
  { id: 1, name: 'Himalayan Dine', location: 'Thamel, Kathmandu', cuisine: 'Nepali & Continental', rating: 4.8, image: 'rest-1', mapQuery: 'Thamel,Kathmandu,Nepal' },
  { id: 2, name: 'Bhojan Griha', location: 'Dillibazar, Kathmandu', cuisine: 'Traditional Newari', rating: 4.7, image: 'rest-2', mapQuery: 'Dillibazar,Kathmandu,Nepal' },
  { id: 3, name: 'Momo House Nepal', location: 'Lazimpat, Kathmandu', cuisine: 'Nepali Street Food', rating: 4.6, image: 'rest-3', mapQuery: 'Lazimpat,Kathmandu,Nepal' },
  { id: 4, name: 'Gurung Kitchen', location: 'Jhamsikhel, Lalitpur', cuisine: 'Nepali & Tibetan', rating: 4.5, image: 'rest-4', mapQuery: 'Jhamsikhel,Lalitpur,Nepal' },
  { id: 5, name: 'Thakali Bhanchha', location: 'New Baneshwor', cuisine: 'Thakali Cuisine', rating: 4.9, image: 'rest-5', mapQuery: 'New+Baneshwor,Kathmandu,Nepal' },
  { id: 6, name: 'Patan Sekuwa Corner', location: 'Patan Durbar Square', cuisine: 'Grill & BBQ', rating: 4.4, image: 'rest-6', mapQuery: 'Patan+Durbar+Square,Lalitpur,Nepal' },
  { id: 7, name: 'Seoul Kitchen KTM', location: 'Jhamsikhel, Lalitpur', cuisine: 'Korean BBQ & Soju Bar', rating: 4.7, image: 'rest-7', mapQuery: 'Jhamsikhel,Lalitpur,Nepal' },
  { id: 8, name: 'Dragon Wok House', location: 'Durbar Marg, Kathmandu', cuisine: 'Authentic Chinese & Dim Sum', rating: 4.6, image: 'rest-8', mapQuery: 'Durbar+Marg,Kathmandu,Nepal' },
];

const timeLabels = {
  '10:00': '10:00 AM',
  '11:00': '11:00 AM',
  '12:00': '12:00 PM',
  '13:00': '1:00 PM',
  '14:00': '2:00 PM',
  '15:00': '3:00 PM',
  '16:00': '4:00 PM',
  '17:00': '5:00 PM',
  '18:00': '6:00 PM',
  '19:00': '7:00 PM',
  '20:00': '8:00 PM',
  '21:00': '9:00 PM',
};

const BookTablePage = () => {
  const { user } = useContext(AuthContext);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: user ? `${user.firstName} ${user.lastName}` : '',
    phone: user?.phone || '',
    email: user?.email || '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const confirmBooking = () => {
    setShowSummary(false);
    setSubmitted(true);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  if (submitted) {
    return (
      <div className="page-wrapper">
        <div className="booking-success-overlay">
          <div className="success-confetti">
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
            <span className="confetti-piece"></span>
          </div>
          <div className="success-card">
            <div className="success-restaurant-header">
              <ImagePlaceholder name={selectedRestaurant?.image} className="success-rest-img" />
              <div>
                <h3 className="success-rest-name">{selectedRestaurant?.name}</h3>
                <p className="success-rest-location">{selectedRestaurant?.cuisine} — {selectedRestaurant?.location}</p>
              </div>
            </div>
            <h1 className="success-title">Table Booked!</h1>
            <p className="success-subtitle">We're excited to serve you, {formData.name.split(' ')[0]}!</p>
            <div className="success-details">
              <div className="success-detail-item">
                <span className="detail-icon">📅</span>
                <div>
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{formatDate(formData.date)}</span>
                </div>
              </div>
              <div className="success-detail-item">
                <span className="detail-icon">⏰</span>
                <div>
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{timeLabels[formData.time] || formData.time}</span>
                </div>
              </div>
              <div className="success-detail-item">
                <span className="detail-icon">👥</span>
                <div>
                  <span className="detail-label">Guests</span>
                  <span className="detail-value">{formData.guests} {Number(formData.guests) === 1 ? 'Person' : 'People'}</span>
                </div>
              </div>
            </div>
            <p className="success-note">A confirmation will be sent to <strong>{formData.email || `+977 ${formData.phone}`}</strong></p>
            <div className="success-actions">
              <Link to="/" className="success-btn success-btn-primary">Back to Home</Link>
              <Link to="/menu" className="success-btn success-btn-outline">Explore Menu</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="book-page">
        <section className="book-header">
          <div className="page-container">
            <h1>Book A Table</h1>
            <p>Choose from our partner restaurants and reserve your perfect dining spot in just a few clicks.</p>
          </div>
        </section>

        <section className="restaurant-listings">
          <div className="page-container">
            <h2 className="listings-title">Choose a Restaurant</h2>
            <p className="listings-subtitle">Pick your favourite spot and reserve a table instantly</p>
            <div className="restaurant-grid">
              {restaurants.map(rest => (
                <div
                  key={rest.id}
                  className={`restaurant-card ${selectedRestaurant?.id === rest.id ? 'selected' : ''}`}
                  onClick={() => setSelectedRestaurant(rest)}
                >
                  <div className="restaurant-card-img">
                    <ImagePlaceholder name={rest.image} className="rest-image" />
                    <span className="restaurant-rating">★ {rest.rating}</span>
                  </div>
                  <div className="restaurant-card-body">
                    <h3>{rest.name}</h3>
                    <p className="restaurant-cuisine">{rest.cuisine}</p>
                    <p className="restaurant-location">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {rest.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedRestaurant && (
          <>
            <section className="book-form-section" id="booking-form">
              <div className="page-container">
                <div className="selected-restaurant-banner">
                  <h2>Booking at <span>{selectedRestaurant.name}</span></h2>
                  <p>{selectedRestaurant.cuisine} — {selectedRestaurant.location}</p>
                  <button className="change-restaurant-btn" onClick={() => setSelectedRestaurant(null)}>Change Restaurant</button>
                </div>
                <form className="book-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Date</label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Time</label>
                      <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                        <option value="">Select time</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="guests">Number of Guests</label>
                      <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="7">7 People</option>
                        <option value="8">8+ People</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <div className="book-phone-wrapper">
                        <span className="book-phone-prefix">+977</span>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value.replace(/[^0-9]/g, '') }))} placeholder="98XXXXXXXX" maxLength={10} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                  </div>
                  <button type="submit" className="book-submit-btn">Book A Table</button>
                </form>
              </div>
            </section>

            <section className="map-section">
              <iframe
                title={`${selectedRestaurant.name} Location`}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${selectedRestaurant.mapQuery}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </section>
          </>
        )}

        {showSummary && (
          <div className="booking-summary-overlay">
            <div className="booking-summary-card">
              <h2 className="summary-title">Booking Summary</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span className="summary-label">Restaurant</span>
                  <span className="summary-value">{selectedRestaurant?.name}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Location</span>
                  <span className="summary-value">{selectedRestaurant?.location}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Date</span>
                  <span className="summary-value">{formatDate(formData.date)}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Time</span>
                  <span className="summary-value">{timeLabels[formData.time] || formData.time}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Guests</span>
                  <span className="summary-value">{formData.guests} {Number(formData.guests) === 1 ? 'Person' : 'People'}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Name</span>
                  <span className="summary-value">{formData.name}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Phone</span>
                  <span className="summary-value">+977 {formData.phone}</span>
                </div>
                {formData.email && (
                  <div className="summary-row">
                    <span className="summary-label">Email</span>
                    <span className="summary-value">{formData.email}</span>
                  </div>
                )}
              </div>
              <div className="summary-actions">
                <button className="summary-btn summary-btn-back" onClick={() => setShowSummary(false)}>Go Back & Edit</button>
                <button className="summary-btn summary-btn-confirm" onClick={confirmBooking}>Confirm Booking</button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BookTablePage;
