import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import WelfareTips from './components/WelfareTips';
import ProductRecommendations from './components/ProductRecommendations';
import SubscriptionForm from './components/SubscriptionForm';
import ContactPage from './components/ContactPage';
import TopMenu from './components/TopMenu';
import Testimonials from './components/Testimonials';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <TopMenu />
        <Routes>
           <Route path="/" element={<MainPage />} />
          <Route path="/welfare-tips" element={<WelfareTips />} />
          <Route path="/product-recommendations" element={<ProductRecommendations />} />
          <Route path="/subscribe" element={<SubscriptionForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonios" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
