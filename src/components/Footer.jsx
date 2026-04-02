import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { operatingHours } from '../data/locations';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <Link to="/" className="footer-logo">
                        FOCUS<span className="text-highlight">313</span>
                    </Link>
                    <p className="footer-desc">
                        Empowering you to reach your peak performance. Join our community of dedicated individuals transforming their lives.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaFacebookF /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/franchise">Franchise Enquiry</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Contact Us</h4>
                    <ul className="footer-contact">

                        <li>
                            <FaPhone className="icon" />
                            <span>+91 7305073286</span>
                        </li>
                        <li>
                            <FaEnvelope className="icon" />
                            <span>enquiry@focus313fitness.com</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Hours</h4>
                    <ul className="footer-hours">
                        <li>{operatingHours.weekdays}</li>
                        <li>{operatingHours.sunday}</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} Focus 313 Fitness. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
