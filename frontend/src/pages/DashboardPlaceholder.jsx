import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const DashboardPlaceholder = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <main className="dashboard-page container">
        <div className="dashboard-card">
          <h1>Welcome back, {user?.firstName}!</h1>
          <p>This is your protected Yummit dashboard placeholder.</p>
          <div className="dashboard-actions">
            <Link to="/" className="outline-btn small">
              Back to Home
            </Link>
            <button className="primary-btn" type="button" onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPlaceholder;
