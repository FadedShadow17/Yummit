import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import FormInput from '../components/FormInput';
import { AuthContext } from '../context/AuthContext';

const SignupPage = () => {
  const { register, setAuthError } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
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
    if (!formData.firstName) nextErrors.firstName = 'First name is required';
    if (!formData.lastName) nextErrors.lastName = 'Last name is required';
    if (!formData.email) nextErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email';
    if (!formData.password) nextErrors.password = 'Password is required';
    else if (formData.password.length < 8) nextErrors.password = 'Password must be at least 8 characters';
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
      await register(formData);
      navigate('/');
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to create account';
      setErrors({ submit: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      panelContent={
        <>
          <p>Join Thousands<br />Discovering Great<br />Food Nearby.</p>
        </>
      }
      footerText="Already Have An Account?"
      footerLink="/login"
      footerLinkText="Login"
      googleText="Sign Up With Google"
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="row-grid">
          <FormInput
            id="firstName"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            autoComplete="given-name"
          />
          <FormInput
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            autoComplete="family-name"
          />
        </div>
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
          autoComplete="new-password"
          trailingIcon={showPassword ? 'Hide' : 'Show'}
          onIconClick={() => setShowPassword((prev) => !prev)}
        />
        {errors.submit && <p className="form-error">{errors.submit}</p>}
        <button type="submit" className="primary-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
