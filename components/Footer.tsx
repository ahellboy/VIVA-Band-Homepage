
import React from 'react';
import { SpotifyIcon, AppleMusicIcon, InstagramIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <h3 className="text-3xl font-anton uppercase tracking-widest text-white mb-4">VIVA</h3>
        <p className="mb-6">contact@vivaband.com</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><SpotifyIcon className="w-7 h-7" /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><AppleMusicIcon className="w-7 h-7" /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><InstagramIcon className="w-7 h-7" /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><YoutubeIcon className="w-7 h-7" /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} VIVA. All Rights Reserved. Rock On.</p>
      </div>
    </footer>
  );
};

export default Footer;
