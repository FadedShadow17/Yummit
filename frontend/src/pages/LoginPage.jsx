import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import FormInput from '../components/FormInput';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const { login, setAuthError } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    setAuthError(null);
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.email) nextErrors.email = 'Email is required';
    if (!formData.password) nextErrors.password = 'Password is required';
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await login(formData);
      navigate('/');
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      setErrors({ submit: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Log In"
      reverse
      panelContent={
        <>
          <p>Join Thousands<br />Discovering Great<br />Food Nearby.</p>
        </>
      }
      footerText="Don’t Have An Account?"
      footerLink="/signup"
      footerLinkText="Sign Up"
      googleText="Log In With Google"
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <FormInput
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
        <FormInput
          id="password"
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="current-password"
          trailingIcon={showPassword ? 'Hide' : 'Show'}
          onIconClick={() => setShowPassword((prev) => !prev)}
        />
        {errors.submit && <p className="form-error">{errors.submit}</p>}
        <button type="submit" className="primary-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Logging In...' : 'Log In'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
