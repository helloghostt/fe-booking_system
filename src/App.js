import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Booking from './pages/Booking';
import Notice from './pages/Notice';
import Blog from './pages/Blog';
import IntroPage from './pages/Intro';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/notices" element={<Notice />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/intro" element={<IntroPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;