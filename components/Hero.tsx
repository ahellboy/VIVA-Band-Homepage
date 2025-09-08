
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/vivahero/1920/1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-anton uppercase text-white tracking-widest leading-none" style={{ textShadow: '0 0 20px rgba(0,0,255,0.5)' }}>
          VIVA
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 uppercase tracking-widest">
          The New Wave of Rock
        </p>
        <a href="#music" className="mt-8 inline-block bg-blue-600 text-white font-bold uppercase tracking-wider py-3 px-8 border-2 border-blue-600 rounded-sm hover:bg-transparent hover:text-blue-400 transition-all duration-300">
          Listen Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
