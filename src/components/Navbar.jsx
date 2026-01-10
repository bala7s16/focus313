import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Programs', path: '/programs' },
        { title: 'Blog', path: '/blogs' },
        { title: 'Franchise', path: '/franchise' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo-link" onClick={closeMenu}>
                    <img src={logo} alt="Focus 313 Fitness" className="nav-logo-img" />
                </Link>

                {/* Desktop Menu */}
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.title} className="nav-item">
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    <li className="nav-item mobile-only">
                        <Link to="/contact" className="btn btn-primary nav-btn" onClick={closeMenu}>
                            Join Now
                        </Link>
                    </li>
                </ul>

                <div className="nav-actions">
                    <Link to="/contact" className="btn btn-primary desktop-only">
                        Join Now
                    </Link>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
