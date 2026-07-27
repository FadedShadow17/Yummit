import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { AuthContext } from '../context/AuthContext';
import { BookingContext } from '../context/BookingContext';
import '../styles/profile.css';

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

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const { favourites, bookingHistory, toggleFavourite } = useContext(BookingContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const initials = `${user?.firstName?.[0] || ''}${user?.lastName?.[0] || ''}`.toUpperCase() || 'U';

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="profile-page">
        <div className="profile-banner" />
        <div className="profile-content">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">{initials}</div>
          </div>
          <h1 className="profile-name">{user?.firstName} {user?.lastName}</h1>
          <p className="profile-email">{user?.email}</p>
          {user?.createdAt && (
            <span className="profile-badge">Member since {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          )}

          <div className="profile-tabs">
            <button className={`profile-tab ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
            <button className={`profile-tab ${activeTab === 'bookings' ? 'active' : ''}`} onClick={() => setActiveTab('bookings')}>Booking History</button>
            <button className={`profile-tab ${activeTab === 'favourites' ? 'active' : ''}`} onClick={() => setActiveTab('favourites')}>Favourites</button>
          </div>

          {activeTab === 'profile' && (
            <>
              <div className="profile-info-card">
                <div className="profile-info-row">
                  <span className="profile-info-label">First Name</span>
                  <span className="profile-info-value">{user?.firstName}</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-label">Last Name</span>
                  <span className="profile-info-value">{user?.lastName}</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-label">Email</span>
                  <span className="profile-info-value">{user?.email}</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-label">Phone</span>
                  <span className="profile-info-value">{user?.phone || 'Not added'}</span>
                </div>
              </div>
              <div className="profile-actions">
                <button type="button" className="profile-btn profile-btn-outline" onClick={() => navigate('/edit-profile')}>
                  Edit Profile
                </button>
                <button type="button" className="profile-btn profile-btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </>
          )}

          {activeTab === 'bookings' && (
            <div className="profile-section">
              {bookingHistory.length === 0 ? (
                <div className="profile-empty-state">
                  <p>No bookings yet</p>
                  <span>Once you book a table, it will appear here.</span>
                  <Link to="/book" className="profile-btn profile-btn-outline" style={{ marginTop: '16px', display: 'inline-block' }}>Book A Table</Link>
                </div>
              ) : (
                <div className="booking-history-list">
                  {bookingHistory.map((booking, index) => (
                    <div key={index} className="booking-history-card">
                      <div className="booking-history-img">
                        <ImagePlaceholder name={booking.image} className="history-img" />
                      </div>
                      <div className="booking-history-details">
                        <h4>{booking.restaurant}</h4>
                        <p className="history-location">{booking.location}</p>
                        <div className="history-meta">
                          <span>{formatDate(booking.date)}</span>
                          <span>{timeLabels[booking.time] || booking.time}</span>
                          <span>{booking.guests} {Number(booking.guests) === 1 ? 'Guest' : 'Guests'}</span>
                        </div>
                      </div>
                      <div className="booking-history-status">
                        <span className="status-badge">Confirmed</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'favourites' && (
            <div className="profile-section">
              {favourites.length === 0 ? (
                <div className="profile-empty-state">
                  <p>No favourites yet</p>
                  <span>Tap the heart on a restaurant to save it here.</span>
                  <Link to="/book" className="profile-btn profile-btn-outline" style={{ marginTop: '16px', display: 'inline-block' }}>Browse Restaurants</Link>
                </div>
              ) : (
                <div className="favourites-grid">
                  {favourites.map(rest => (
                    <div key={rest.id} className="favourite-card">
                      <div className="favourite-card-img">
                        <ImagePlaceholder name={rest.image} className="fav-img" />
                        <button
                          className="favourite-remove-btn"
                          onClick={() => toggleFavourite(rest)}
                          title="Remove from favourites"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>
                      <div className="favourite-card-body">
                        <h4>{rest.name}</h4>
                        <p>{rest.cuisine}</p>
                        <span>{rest.location}</span>
                      </div>
                      <Link to="/book" className="favourite-book-btn">Book Table</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
