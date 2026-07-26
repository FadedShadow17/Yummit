const ContactInfoCard = ({ phone, email, location }) => {
  return (
    <div className="contact-card">
      <div className="contact-item"><strong>Phone:</strong> {phone}</div>
      <div className="contact-item"><strong>Email:</strong> {email}</div>
      <div className="contact-item"><strong>Location:</strong> {location}</div>
    </div>
  );
};

export default ContactInfoCard;
