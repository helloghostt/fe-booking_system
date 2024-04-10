
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Booking from './pages/Booking';
import Notice from './pages/Notice';
import IntroPage from './pages/Intro';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navigation from './components/common/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/bookings" component={Booking} />
          <Route path="/notices" component={Notice} />
          <Route path="/intro" component={IntroPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;