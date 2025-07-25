import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css'; // Assuming you will create a CSS file for styling

const TopMenu: React.FC = () => {
    return (
        <nav className="top-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/welfare-tips">Welfare Tips</Link></li>
                <li><Link to="/product-recommendations">Product Recommendations</Link></li>
                <li><Link to="/subscribe">Subscribe</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default TopMenu;