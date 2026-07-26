import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlaceholderPage = ({ title, message }) => (
  <div>
    <Navbar />
    <main className="placeholder-page">
      <div className="container placeholder-content">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PlaceholderPage;
