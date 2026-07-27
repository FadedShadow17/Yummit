import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import '../styles/book.css';

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
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: user ? `${user.firstName} ${user.lastName}` : '',
    phone: user?.phone || '',
    email: user?.email || '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <div className="success-checkmark">
              <svg viewBox="0 0 52 52" className="checkmark-svg">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
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
            <p className="success-note">A confirmation will be sent to <strong>{formData.email || formData.phone}</strong></p>
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
            <h1>Book A Table at Yummit</h1>
            <p>Yummit is a multi-cuisine restaurant in the heart of Thamel, Kathmandu — serving Nepali momos, burgers, Chinese, Korean, and more. Reserve your spot and enjoy a cozy dining experience with family and friends.</p>
          </div>
        </section>

        <section className="book-form-section">
          <div className="page-container">
            <form className="book-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
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
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+977 9800000000" required />
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
            title="Yummit Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.29111!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookTablePage;
