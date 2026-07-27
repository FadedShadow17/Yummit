import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import '../styles/profile.css';

const EditProfilePage = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    setStatus(null);
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required';
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSaving(true);
    setStatus(null);

    try {
      await updateProfile(formData);
      setStatus({ type: 'success', message: 'Profile updated successfully.' });
    } catch (error) {
      const message = error.response?.data?.message || 'Unable to update profile';
      setStatus({ type: 'error', message });
    } finally {
      setIsSaving(false);
    }
  };

  const initials = `${user?.firstName?.[0] || ''}${user?.lastName?.[0] || ''}`.toUpperCase() || 'U';

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="edit-profile-page">
        <div className="profile-banner" />
        <div className="edit-profile-content">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">{initials}</div>
          </div>
          <h1 className="edit-profile-title">Edit Profile</h1>
          <form onSubmit={handleSubmit} className="edit-profile-form">
            <div className="edit-form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
              {errors.firstName && <span className="field-error">{errors.firstName}</span>}
            </div>
            <div className="edit-form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
              {errors.lastName && <span className="field-error">{errors.lastName}</span>}
            </div>
            <div className="edit-form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={user?.email || ''}
                disabled
                className="input-disabled"
              />
              <span className="field-hint">Email cannot be changed</span>
            </div>
            <div className="edit-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+977 98XXXXXXXX"
              />
            </div>
            {status && <div className={`form-status ${status.type}`}>{status.message}</div>}
            <div className="edit-profile-actions">
              <button type="button" className="profile-btn profile-btn-outline" onClick={() => navigate('/profile')}>
                Cancel
              </button>
              <button type="submit" className="profile-btn profile-btn-save" disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
