import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-[#E8F1F5]">
      <Header />
      <Hero />
      <Hero2 />
      <Features />
      <UseCases />
      <Footer />
    </div>
  );
}

export default App;
