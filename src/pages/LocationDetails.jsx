import { useParams, Navigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar, FaInstagram, FaFacebook, FaClock } from 'react-icons/fa';
import { locations } from '../data/locations';
import '../styles/LocationDetails.css';

const LocationDetails = () => {
    const { id } = useParams();
    const location = locations.find(loc => loc.id === id);

    if (!location) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="location-details-page">
            {/* Hero Section */}
            <div className="location-hero">
                <div
                    className="location-hero-bg"
                    style={{ backgroundImage: `url(${location.image})` }}
                ></div>
                <div className="location-hero-content container">
                    <h1 className="location-hero-title">{location.name}</h1>
                    <p className="location-hero-address">{location.address}</p>
                </div>
            </div>

            {/* About Section */}
            <section className="location-section">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">About <span className="text-highlight">This Club</span></h2>
                    </div>
                    <p className="location-description">{location.description}</p>

                    <div className="features-grid">
                        {location.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <span className="text-primary font-bold">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Map Section */}
            <section className="location-section bg-darker">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Visit <span className="text-highlight">Us</span></h2>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div>
                                    <h4>Address</h4>
                                    <p>{location.address}</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaClock className="info-icon" />
                                <div>
                                    <h4>Timings</h4>
                                    {location.timings ? (
                                        <>
                                            <p style={{ marginBottom: '0.2rem' }}>{location.timings.weekdays}</p>
                                            <p>{location.timings.sunday}</p>
                                        </>
                                    ) : (
                                        <p>Contact for timings</p>
                                    )}
                                </div>
                            </div>
                            <div className="info-item">
                                <FaPhone className="info-icon" />
                                <div>
                                    <h4>Phone</h4>
                                    <p>{location.phone}</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaEnvelope className="info-icon" />
                                <div>
                                    <h4>Email</h4>
                                    <p>{location.email}</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaStar className="info-icon text-yellow" />
                                <div>
                                    <h4>Google Rating</h4>
                                    <p>{Number(location.googleRating).toFixed(1)} / 5.0</p>
                                </div>
                            </div>
                        </div>
                        <div className="map-container">
                            <iframe
                                src={location.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px', borderRadius: '10px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="location-section">
                <div className="container">
                    <div className="section-title-wrapper text-center">
                        <h2 className="section-title">Our <span className="text-highlight">Gallery</span></h2>
                        <div className="social-links mt-4" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <a href={location.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-instagram">
                                <FaInstagram /> View on Instagram
                            </a>
                            {location.facebook && (
                                <a href={location.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-facebook" style={{ backgroundColor: '#1877F2', borderColor: '#1877F2' }}>
                                    <FaFacebook /> View on Facebook
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="gallery-grid">
                        {location.galleryImages.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`${location.name} Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default LocationDetails;
