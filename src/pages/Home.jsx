import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newsletter />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
