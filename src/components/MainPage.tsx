import React from 'react';
import WelfareTips from './WelfareTips';
import ProductRecommendations from './ProductRecommendations';
import SubscriptionForm from './SubscriptionForm';

const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <h1>Lives Better Today</h1>
            <p>Discover the best tips and products for your physical and mental well-being.</p>
            <WelfareTips />
            <ProductRecommendations />
            <SubscriptionForm />
        </div>
    );
};

export default MainPage;