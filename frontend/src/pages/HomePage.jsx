import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImagePlaceholder from '../components/ImagePlaceholder';
import MenuCategoryCard from '../components/MenuCategoryCard';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';
import ContactInfoCard from '../components/ContactInfoCard';
import '../styles/home.css';

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="home-page">
        <section className="hero page-section">
          <div className="page-container hero">
            <div className="hero-left">
              <div className="eyebrow">Kathmandu's Favourite</div>
              <h1>Taste that brings<br />you back</h1>
              <p>From steaming momos to crispy Korean chicken — we serve flavors that make every meal unforgettable.</p>
              <div className="hero-actions">
                <Link to="/book" className="primary-btn">Book A Table</Link>
                <Link to="/menu" className="outline-btn">Explore Menu</Link>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-bg-circle" />
              <div className="hero-images">
                <ImagePlaceholder name="hero-1" className="img-1 rounded" />
                <ImagePlaceholder name="hero-2" className="img-2 rounded" />
                <ImagePlaceholder name="hero-3" className="img-3 rounded" />
                <ImagePlaceholder name="hero-4" className="img-4 rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="browse page-section">
          <div className="page-container browse">
            <SectionHeading title="Browse Our Menu" />
            <div className="menu-grid">
              <MenuCategoryCard title="Nepali" description="Momo, chowmein, sekuwa — local favorites." icon="cat-nepali" />
              <MenuCategoryCard title="Fast Food" description="Burgers, pizza, chicken chilly." icon="cat-fastfood" />
              <MenuCategoryCard title="Chinese" description="Fried rice, manchurian, hot soups." icon="cat-chinese" />
              <MenuCategoryCard title="Korean" description="Bibimbap, tteokbokki, fried chicken." icon="cat-korean" />
            </div>
          </div>
        </section>

        <section className="info page-section">
          <div className="page-container info">
            <div className="info-left">
              <ImagePlaceholder name="info-food" className="big-img rounded" />
              <div className="contact-overlay">
                <ContactInfoCard phone="+977-9800000000" email="food@yummit.com" location="Thamel, Kathmandu" />
              </div>
            </div>
            <div className="info-right">
              <h2>Fresh ingredients, authentic flavors.</h2>
              <p>We blend Nepali traditions with global cuisines — using locally sourced ingredients to create dishes that feel like home.</p>
              <p>Whether it's a quick momo fix or a full Korean spread, every plate tells a story.</p>
              <Link to="/about" className="primary-btn">More About Us</Link>
            </div>
          </div>
        </section>

        <section className="services page-section">
          <div className="page-container services">
            <SectionHeading title="We also offer unique services for your events" />
            <div className="services-grid">
              <ServiceCard name="svc-catering" title="Caterings" description="Custom menus for large gatherings." />
              <ServiceCard name="svc-birthday" title="Birthdays" description="Celebrate with delicious food." />
              <ServiceCard name="svc-wedding" title="Weddings" description="Stylish wedding dining experiences." />
              <ServiceCard name="svc-event" title="Events" description="Perfect menus for every occasion." />
            </div>
          </div>
        </section>

        <section className="delivery page-section">
          <div className="page-container delivery-section">
            <div className="delivery-left">
              <div className="collage">
                <ImagePlaceholder name="booking-1" className="c1 rounded" />
                <ImagePlaceholder name="booking-2" className="c2 rounded" />
                <ImagePlaceholder name="booking-3" className="c3 rounded" />
              </div>
            </div>
            <div className="delivery-right">
              <h2>Reserve Your Table Today</h2>
              <p>Skip the wait and secure your perfect spot. Whether it's a romantic dinner or a family gathering, we've got your table ready.</p>
              <ul className="features-list">
                <li>Easy online table reservation</li>
                <li>Special seating for events & celebrations</li>
                <li>Cozy ambiance with indoor & outdoor options</li>
              </ul>
              <Link to="/book" className="primary-btn">Book A Table</Link>
            </div>
          </div>
        </section>

        <section className="testimonials page-section">
          <div className="page-container testimonials">
            <SectionHeading title="What Our Customers Say" />
            <div className="test-grid">
              <TestimonialCard quoteTitle={'"Loved the blog recipes!"'} text="Yummit ko blog padhera ghar mai momo banaye — step-by-step guide ekdam helpful thiyo. Now I visit the restaurant too to compare!" name="Aarav Shrestha" location="Thamel, Kathmandu" image="avatar-1" />
              <TestimonialCard quoteTitle={'"Easiest table booking ever"'} text="Online table book garyo, pugda seat ready thiyo. No waiting, no hassle — birthday celebration ekdam smooth bhayo!" name="Srijana Maharjan" location="Lalitpur" image="avatar-2" />
              <TestimonialCard quoteTitle={'"Blog inspired our dinner"'} text="Newari cuisine blog article padhepaxi table book garyo. Exactly what the blog described — authentic flavors and perfect ambiance!" name="Bikash Tamang" location="Bhaktapur" image="avatar-3" />
            </div>
          </div>
        </section>

        <section className="blog page-section">
          <div className="page-container blog">
            <div className="blog-head">
              <div>
                <h2>Our Blog & Articles</h2>
                <p>Latest news and dining inspiration.</p>
              </div>
              <Link to="/blog" className="primary-btn small">Read All Articles</Link>
            </div>
            <div className="blog-grid">
              <BlogCard id={1} date="Jun 28, 2024" title="The art of making authentic Nepali momo from scratch" excerpt="Learn the secrets behind perfectly pleated momos with juicy fillings." image="blog-featured" large />
              <div className="small-blogs">
                <BlogCard id={2} date="Jun 15" title="Exploring the vibrant street food scene of Kathmandu" image="blog-1" />
                <BlogCard id={3} date="Jun 02" title="How to prepare the perfect Nepali dal bhat at home" image="blog-2" />
                <BlogCard id={4} date="May 20" title="A complete guide to Newari cuisine" image="blog-3" />
                <BlogCard id={5} date="May 08" title="Top 10 must-visit restaurants in Thamel" image="blog-4" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
