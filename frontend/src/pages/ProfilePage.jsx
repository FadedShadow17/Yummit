import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import '../styles/profile.css';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
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
          </div>
          <div className="profile-actions">
            <button type="button" className="profile-btn profile-btn-outline" onClick={() => navigate('/edit-profile')}>
              Edit Profile
            </button>
            <button type="button" className="profile-btn profile-btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
