import '../styles/About.css';

const About = () => {
    return (
        <div className="page-container page-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h1 className="page-title">About <span className="text-highlight">Focus 313</span></h1>
                    <p className="page-subtitle">More than just a gym. We are a movement.</p>
                </div>

                <div className="about-grid">
                    <div className="about-content">
                        <h2>Our Mission</h2>
                        <p>
                            At Focus 313 Fitness, we believe that true strength comes from within.
                            Our mission is to provide a supportive, high-energy environment where
                            individuals of all fitness levels can push their limits and achieve their goals.
                        </p>
                        <p>
                            Whether you are training for a competition or just starting your fitness journey,
                            our expert coaches and state-of-the-art facilities are here to guide you every step of the way.
                        </p>
                    </div>
                    <div className="about-image">
                        {/* Placeholder for Gym Image */}
                        <div className="placeholder-img"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
