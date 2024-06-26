import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Tennis Club</h1>
          <p>Experience the best tennis lessons and facilities.</p>
        </section>
        <section>
          <img src="/tennis-player.jpg" alt="Tennis Player" />
        </section>
        <section>
          <h2>Welcome to our club</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis metus vel ante maximus, vel luctus enim fringilla.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;