import '../styles/Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
    };

    return (
        <div className="page-container page-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h1 className="page-title">Get In <span className="text-highlight">Touch</span></h1>
                    <p className="page-subtitle">Ready to start your journey? Contact us today.</p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info is-glass">
                        <h3>Contact Information</h3>
                        <p className="info-desc">
                            Have questions about our programs or pricing? Visit us or drop a message.
                        </p>



                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 7305073286</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>focus313fitness@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaClock className="info-icon" />
                            <div>
                                <h4>Hours</h4>
                                <p>Mon-Fri: 5am - 10pm</p>
                                <p>Sat: 6am - 8pm</p>
                                <p>Sun: 7am - 6pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container is-glass">
                        <h3>Send a Message</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="(555) 123-4567" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="goal">Fitness Goal</label>
                                <select id="goal">
                                    <option value="weight-loss">Weight Loss</option>
                                    <option value="muscle-gain">Muscle Gain</option>
                                    <option value="endurance">Endurance</option>
                                    <option value="general">General Fitness</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="branch">Select Branch</label>
                                <select id="branch" required>
                                    <option value="" disabled selected>Choose a location</option>
                                    <option value="anna-nagar-west">Anna Nagar West</option>
                                    <option value="aminjikarai">Aminjikarai</option>
                                    <option value="ayappakkam">Ayappakkam</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary full-width">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
