import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/phone-prompt.css';

const PhonePrompt = () => {
  const { user, updatePhone } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const [phone, setPhone] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  if (!user || user.phone || !show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError('Please enter your phone number');
      return;
    }
    setSaving(true);
    try {
      await updatePhone(`+977${phone.trim()}`);
      setShow(false);
    } catch (err) {
      setError('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="phone-prompt-overlay">
      <div className="phone-prompt-card">
        <div className="phone-prompt-icon">📞</div>
        <h3>Add Your Phone Number</h3>
        <p>Add your phone number to make booking tables faster and easier.</p>
        <form onSubmit={handleSubmit}>
          <div className="phone-input-wrapper">
            <span className="phone-prefix">+977</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => { setPhone(e.target.value.replace(/[^0-9]/g, '')); setError(''); }}
              placeholder="98XXXXXXXX"
              className="phone-prompt-input with-prefix"
              maxLength={10}
            />
          </div>
          {error && <span className="phone-prompt-error">{error}</span>}
          <div className="phone-prompt-actions">
            <button type="button" className="phone-prompt-skip" onClick={() => setShow(false)}>
              Skip for now
            </button>
            <button type="submit" className="phone-prompt-save" disabled={saving}>
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhonePrompt;
