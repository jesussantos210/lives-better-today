import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out!</p>
            <h2>Contact Information</h2>
            <p>Email: support@livesbettertoday.com</p>
            <p>Phone: (123) 456-7890</p>
            <h2>Privacy Policy</h2>
            <p>Read our <a href="/privacy-policy">Privacy Policy</a> for more information on how we handle your data.</p>
            <h2>Legal Notice</h2>
            <p>For legal inquiries, please contact us at <a href="/legal-notice">Legal Notice</a>.</p>
        </div>
    );
};

export default ContactPage;