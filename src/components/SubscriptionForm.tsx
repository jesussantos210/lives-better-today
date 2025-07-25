import React, { useState } from 'react';

const SubscriptionForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you would typically handle the subscription logic, e.g., sending the email to a server
        setSuccessMessage('Thank you for subscribing to the Welfare Bulletin!');
        setEmail('');
    };

    return (
        <div className="subscription-form">
            <h2>Subscribe to Our Welfare Bulletin</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default SubscriptionForm;