import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { locations } from '../data/locations';
import '../styles/WhatsAppFloating.css';

const WhatsAppFloating = () => {
    const [isOpen, setIsOpen] = useState(false);
    const widgetRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleRedirect = (phone, name) => {
        const cleanNumber = phone.replace(/[^0-9]/g, '');
        const message = encodeURIComponent(`Hi! I am interested in Focus 313 Fitness - ${name} branch.`);
        const url = `https://wa.me/${cleanNumber}?text=${message}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        setIsOpen(false);
    };

    return (
        <div className="wa-float-container" ref={widgetRef}>
            {/* Floating Widget Box */}
            <div className={`wa-chat-box ${isOpen ? 'active' : ''}`} id="wa-chat-box">
                <div className="wa-chat-header">
                    <div className="wa-brand-info">
                        <div className="wa-avatar-status">
                            <FaWhatsapp className="wa-avatar-icon" />
                            <span className="wa-status-dot"></span>
                        </div>
                        <div>
                            <h4>Focus 313 Fitness</h4>
                            <p>Typically replies in a few minutes</p>
                        </div>
                    </div>
                    <button className="wa-close-btn" onClick={toggleOpen} aria-label="Close chat popup">
                        <FaTimes />
                    </button>
                </div>
                <div className="wa-chat-body">
                    <p className="wa-welcome-text">Select a branch below to connect with us on WhatsApp:</p>
                    <div className="wa-branches-list">
                        {locations.map((branch) => (
                            <button
                                key={branch.id}
                                className="wa-branch-item"
                                onClick={() => handleRedirect(branch.phone, branch.name)}
                                id={`wa-branch-${branch.id}`}
                            >
                                <div className="wa-branch-meta">
                                    <span className="wa-branch-name">{branch.name}</span>
                                    <span className="wa-branch-tagline">{branch.tagline || 'Fitness Center'}</span>
                                </div>
                                <FaWhatsapp className="wa-chat-icon" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Button */}
            <button
                className={`wa-float-btn ${isOpen ? 'active' : ''}`}
                onClick={toggleOpen}
                aria-label="Contact us on WhatsApp"
                id="wa-float-trigger"
            >
                {isOpen ? <FaTimes className="float-icon-close" /> : <FaWhatsapp className="float-icon-wa" />}
                <span className="wa-tooltip">Chat with us!</span>
            </button>
        </div>
    );
};

export default WhatsAppFloating;
