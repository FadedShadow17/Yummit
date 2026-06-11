import { Link } from 'react-router-dom';

const AuthLayout = ({ title, children, panelContent, reverse = false, footerText, footerLink, footerLinkText, googleText }) => {
  return (
    <div className="auth-page">
      <div className={`auth-card ${reverse ? 'reverse' : ''}`}>
        <div className="auth-visual-panel">
          <div className="visual-content">
            <img src="/images/yummit.png" alt="Yummit" className="auth-logo-img" />
            <div className="promo-text">{panelContent}</div>
            <div className="auth-tagline">Kathmandu's Favourite</div>
          </div>
          <div className="auth-decorative">
            <div className="deco-ring deco-ring-1" />
            <div className="deco-ring deco-ring-2" />
            <div className="deco-ring deco-ring-3" />
          </div>
        </div>
        <div className="auth-form-panel">
          <h2>{title}</h2>
          {children}
          <p className="auth-footer">
            {footerText}{' '}
            <Link to={footerLink}>{footerLinkText}</Link>
          </p>
          <div className="divider">
            <span>Or</span>
          </div>
          <button type="button" className="google-btn">
            <span className="google-icon">G</span>
            {googleText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
