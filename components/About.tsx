
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="The Band" bgClassName="bg-black">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-80 md:h-full bg-cover bg-center rounded-lg shadow-2xl" style={{ backgroundImage: "url('https://picsum.photos/seed/vivaband/800/600')" }}>
        </div>
        <div className="text-gray-300 text-lg leading-relaxed">
          <p className="mb-4">
            Forged in the heart of the city's underground scene, VIVA is a four-piece powerhouse that blends raw, unapologetic rock with intricate melodies and heart-pounding rhythms. Their sound is a sonic explosion, a tribute to the rock legends of the past while carving out a path that is uniquely their own.
          </p>
          <p className="mb-4">
            With lyrics that cut to the core and a stage presence that is nothing short of electric, VIVA has been captivating audiences one explosive show at a time. They are more than a band; they are a movement.
          </p>
          <p>
            Join the sonic revolution.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
