import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <p className="hero-tagline animate-fade-in text-highlight">the best fitness club near you</p>
                    <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        UNLEASH YOUR <br />
                        <span className="text-gradient">FULL POTENTIAL</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        The complete fitness studio near you. Elite Training. World Class Equipment. Community.
                    </p>
                    <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <Link to="/contact" className="btn btn-primary">
                            Start Training
                        </Link>
                        <Link to="/programs" className="btn btn-outline">
                            Our Programs
                        </Link>
                    </div>
                </div>

                {/* Hero Stats Overlay */}
                <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>20+</h3>
                                <p>Expert Coaches</p>
                            </div>
                            <div className="stat-card">
                                <h3>1000+</h3>
                                <p>Happy Members</p>
                            </div>
                            <div className="stat-card">
                                <h3>30+</h3>
                                <p>Fitness Programs</p>
                            </div>
                            <div className="stat-card">
                                <h3>8+</h3>
                                <p>Our Existence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section-padding services-preview">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Why <span className="text-highlight">Focus 313</span>?</h2>
                        <p className="section-desc">Experience fitness at a whole new level.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Expert Trainers</h3>
                            <p>Certified professionals to guide your journey.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Modern Equipment</h3>
                            <p>State-of-the-art machines for optimal results.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Diverse Programs</h3>
                            <p>From CrossFit to Yoga, we have it all.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
