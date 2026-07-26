import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="contact-page">
        <section className="contact-header">
          <div className="page-container">
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us for anything you need. We are always here to help and answer your questions.</p>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="page-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
              </div>
              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..." rows="6" required />
              </div>
              <button type="submit" className="contact-submit-btn">Send Message</button>
              {submitted && <p className="contact-success">Thank you! Your message has been sent successfully.</p>}
            </form>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
