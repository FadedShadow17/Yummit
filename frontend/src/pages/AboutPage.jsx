import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImagePlaceholder from '../components/ImagePlaceholder';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import VideoModal from '../components/VideoModal';
import '../styles/about.css';

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="about-page">
        <section className="about-intro page-section">
          <div className="page-container about-intro two-col">
            <div className="intro-left">
              <ImagePlaceholder name="about-img" className="about-img rounded" />
              <div className="contact-overlay">
                <div className="contact-card dark-card">
                  <h4>Contact</h4>
                  <div><strong>Phone:</strong> +977-9800000000</div>
                  <div><strong>Email:</strong> food@yummit.com</div>
                  <div><strong>Location:</strong> Thamel, Kathmandu</div>
                </div>
              </div>
            </div>
            <div className="intro-right">
              <span className="eyebrow">About Yummit</span>
              <h2>We provide healthy food for your family.</h2>
              <p>At Yummit, we craft every meal with care, balancing fresh ingredients and modern flavors.</p>
              <p>From classic favorites to seasonal specialties, our menu is designed for every taste.</p>
              <p>Join us for thoughtful dining experiences made for families and food lovers alike.</p>
            </div>
          </div>
        </section>

        <section className="video-banner page-section">
          <div className="page-container video-banner">
            <ImagePlaceholder name="video-bg" className="video-bg rounded" />
            <div className="video-overlay">
              <VideoModal />
              <h2>Feel the authentic & original taste from us</h2>
            </div>
          </div>
        </section>

        <section className="features page-section">
          <div className="page-container features three-col">
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2h18v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V2z"/><path d="M3 2h18"/><path d="M12 12v4"/><path d="M8 20h8"/><path d="M12 16h.01"/></svg>
              </div>
              <h4>Multi Cuisine</h4>
              <p>Enjoy dishes from around the world in one place.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h4>Easy To Order</h4>
              <p>Quick online ordering with flexible pickup and delivery.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Fast Delivery</h4>
              <p>Reliable delivery that brings hot meals to your door.</p>
            </div>
          </div>
        </section>

        <section className="info-stats page-section">
          <div className="page-container info-stats two-col">
            <div>
              <h2>A little information for our valuable guest</h2>
              <p>We combine hospitality with great food to create the perfect dining experience.</p>
              <div className="stats-grid">
                <div className="stat">
                  <strong>3</strong>
                  <span>Locations</span>
                </div>
                <div className="stat">
                  <strong>1995</strong>
                  <span>Founded</span>
                </div>
                <div className="stat">
                  <strong>65+</strong>
                  <span>Staff Members</span>
                </div>
                <div className="stat">
                  <strong>100%</strong>
                  <span>Satisfied Customers</span>
                </div>
              </div>
            </div>
            <div>
              <ImagePlaceholder name="stat-img" className="stat-img rounded" />
            </div>
          </div>
        </section>

        <section className="testimonials page-section">
          <div className="page-container testimonials">
            <SectionHeading title="What Our Customers Say" />
            <div className="test-grid">
              <TestimonialCard quoteTitle={'"Sabai bhanda ramro"'} text="Yummit ko momo ra thakali thali khayera dherai khusi lagyo. Staff pani ekdam ramro. Definitely feri aaunchu!" name="Aarav Shrestha" location="Kathmandu" image="avatar-1" />
              <TestimonialCard quoteTitle={'"Ghar ko swad"'} text="Family dinner ko lagi perfect cha. Nepali khana ko authentic swad paaincha yahaa. Baccha haru lai pani man paryo." name="Srijana Maharjan" location="Lalitpur" image="avatar-2" />
              <TestimonialCard quoteTitle={'"Must try!"'} text="Newari khaja set ra sekuwa chai must try ho. Fast delivery, fresh khana — ke chahincha aru?" name="Bikash Tamang" location="Bhaktapur" image="avatar-3" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
