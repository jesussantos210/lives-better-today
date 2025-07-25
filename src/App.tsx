import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import WelfareTips from './components/WelfareTips';
import ProductRecommendations from './components/ProductRecommendations';
import SubscriptionForm from './components/SubscriptionForm';
import ContactPage from './components/ContactPage';
import TopMenu from './components/TopMenu';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <TopMenu />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/welfare-tips" component={WelfareTips} />
          <Route path="/product-recommendations" component={ProductRecommendations} />
          <Route path="/subscribe" component={SubscriptionForm} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;