
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Tour from './components/Tour';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-gray-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Music />
        <Tour />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
