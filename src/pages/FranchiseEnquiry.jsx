import { useState } from 'react';
import '../styles/FranchiseEnquiry.css';

const FranchiseEnquiry = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        investment: '',
        experience: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setError(null);

        const payload = {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            message: `Location: ${formData.location}\nInvestment: ${formData.investment}\nExperience: ${formData.experience}\nMessage: ${formData.message}`,
            branch: 'Franchise Dept',
            branchEmail: 'enquiry@focus313fitness.com',
            type: 'Franchise Enquiry'
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Failed to submit enquiry');
            }
        } catch (err) {
            setError(err.message || 'Submission failed');
            console.error('Franchise Submission Error:', err);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="franchise-page">
            <div className="franchise-hero">
                <div className="franchise-hero-overlay"></div>
                <div className="container franchise-hero-content text-center">
                    <h1 className="franchise-title animate-fade-in">
                        PARTNER WITH <span className="text-highlight">FOCUS 313</span>
                    </h1>
                    <p className="franchise-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Join the fastest growing fitness community. Build your legacy with us.
                    </p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="franchise-grid">
                        <div className="franchise-info">
                            <h2 className="section-title">Why <span className="text-highlight">Franchise?</span></h2>
                            <p className="section-desc-left">
                                Focus 313 Fitness offers a proven business model, comprehensive training, and ongoing support to ensure your success.
                            </p>

                            <ul className="franchise-benefits">
                                <li>
                                    <h3>Proven Business Model</h3>
                                    <p>Our operational systems are designed for efficiency and scalability.</p>
                                </li>
                                <li>
                                    <h3>Brand Recognition</h3>
                                    <p>Leverage our established brand and marketing assets.</p>
                                </li>
                                <li>
                                    <h3>Expert Support</h3>
                                    <p>From site selection to grand opening and beyond, we are with you.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="franchise-form-container">
                            {submitted ? (
                                <div className="success-message text-center">
                                    <h3 className="text-highlight">Thank You!</h3>
                                    <p>Your enquiry has been received. Our team will contact you shortly.</p>
                                    <button
                                        className="btn btn-primary mt-4"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send Another Enquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="franchise-form">
                                    <h3 className="form-title">Enquiry Form</h3>

                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="location">Preferred Location</label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            placeholder="City / Area"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="investment">Capital Investment</label>
                                        <select
                                            id="investment"
                                            name="investment"
                                            value={formData.investment}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Investment Range</option>
                                            <option value="20L - 40L">₹20 Lakhs - ₹40 Lakhs</option>
                                            <option value="40L - 70L">₹40 Lakhs - ₹70 Lakhs</option>
                                            <option value="70L+">₹70 Lakhs+</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="experience">Experience in Fitness (Years)</label>
                                        <input
                                            type="text"
                                            id="experience"
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            placeholder="e.g. 2 years (Optional)"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Tell us about your interest..."
                                        ></textarea>
                                    </div>

                                    {error && <div className="error-message text-center" style={{ color: '#e74c3c', marginBottom: '1rem' }}>{error}</div>}
                                    <button type="submit" className="btn btn-primary w-full" disabled={isSending}>
                                        {isSending ? 'Submitting...' : 'Submit Enquiry'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FranchiseEnquiry;
