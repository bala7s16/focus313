import '../styles/Programs.css';
import { Link } from 'react-router-dom';

const Programs = () => {
    const programs = [
        {
            id: 1,
            title: 'CrossFit',
            desc: 'High-intensity functional movements performed at high intensity. Constantly varied, functional movements.',
            image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'Personal Training',
            desc: 'One-on-one coaching tailored to your specific goals and needs. Get the attention you deserve.',
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'Strength & Conditioning',
            desc: 'Build raw strength and improve your athletic performance with our specialized programming.',
            image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 4,
            title: 'Functional Training',
            desc: 'Train for life. Improve your daily movement patterns with exercises that matter.',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 5,
            title: 'Bootcamp',
            desc: 'High-energy group training designed to challenge your limits and build camaraderie.',
            image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 6,
            title: 'Weight Loss',
            desc: 'Structured programs combining cardio and resistance training to help you shed pounds effectively.',
            image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=2072&auto=format&fit=crop'
        },
        {
            id: 7,
            title: 'Weight Gain',
            desc: 'Hypertrophy-focused training and nutritional guidance to build muscle mass safely.',
            image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 8,
            title: 'Yoga & Mobility',
            desc: 'Improve flexibility, balance, and mental clarity with our expert-led yoga sessions.',
            image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 9,
            title: 'HIIT Cardio',
            desc: 'Burn calories and boost endurance with high-intensity interval training workouts.',
            image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop'
        }
    ];

    return (
        <div className="page-container page-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h1 className="page-title">Our <span className="text-highlight">Programs</span></h1>
                    <p className="page-subtitle">Find the perfect training style for your goals.</p>
                </div>

                <div className="programs-grid">
                    {programs.map((program) => (
                        <div key={program.id} className="program-card">
                            <div className="program-image" style={{ backgroundImage: `url(${program.image})` }}>
                                <div className="overlay"></div>
                            </div>
                            <div className="program-content">
                                <h3>{program.title}</h3>
                                <p>{program.desc}</p>
                                <Link to="/contact" className="btn btn-outline btn-sm">Join Now</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;
