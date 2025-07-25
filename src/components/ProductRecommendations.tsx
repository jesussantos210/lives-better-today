import React from 'react';

const ProductRecommendations: React.FC = () => {
    const products = [
        { id: 1, name: 'Wellness Supplement', link: '#' },
        { id: 2, name: 'Yoga Mat', link: '#' },
        { id: 3, name: 'Meditation App Subscription', link: '#' },
        { id: 4, name: 'Healthy Cookbook', link: '#' },
        { id: 5, name: 'Fitness Tracker', link: '#' },
    ];

    return (
        <div className="product-recommendations">
            <h2>Product Recommendations</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                            {product.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductRecommendations;