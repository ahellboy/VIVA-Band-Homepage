
import React from 'react';
import Section from './Section';

const galleryImages = [
  'https://picsum.photos/seed/viva1/600/400',
  'https://picsum.photos/seed/viva2/400/600',
  'https://picsum.photos/seed/viva3/600/400',
  'https://picsum.photos/seed/viva4/600/400',
  'https://picsum.photos/seed/viva5/400/600',
  'https://picsum.photos/seed/viva6/600/400',
];

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" title="Gallery" bgClassName="bg-gray-900">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img 
              src={src} 
              alt={`VIVA gallery image ${index + 1}`} 
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
