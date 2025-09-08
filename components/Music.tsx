
import React from 'react';
import Section from './Section';
import type { Track } from '../types';
import { PlayIcon } from './icons';

const latestAlbumTracks: Track[] = [
  { title: "Electric Veins", album: "Sonic Uprising", duration: "3:45" },
  { title: "Midnight Howl", album: "Sonic Uprising", duration: "4:12" },
  { title: "Shattered Skyline", album: "Sonic Uprising", duration: "5:02" },
  { title: "Rebel's Anthem", album: "Sonic Uprising", duration: "3:58" },
  { title: "Ghost in the Machine", album: "Sonic Uprising", duration: "4:30" },
  { title: "Echoes of the Fall", album: "Sonic Uprising", duration: "6:10" },
];

const Music: React.FC = () => {
  return (
    <Section id="music" title="Latest Album: Sonic Uprising" bgClassName="bg-gray-900">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 lg:col-span-5">
           <img src="https://picsum.photos/seed/vivaalbum/600/600" alt="Sonic Uprising Album Art" className="w-full rounded-lg shadow-2xl" />
        </div>
        <div className="md:col-span-8 lg:col-span-7">
          <ul className="divide-y divide-gray-700">
            {latestAlbumTracks.map((track, index) => (
              <li key={index} className="flex items-center justify-between p-4 transition-all duration-300 hover:bg-gray-800 rounded-md">
                <div className="flex items-center">
                  <span className="text-gray-500 font-bold mr-4">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{track.title}</h3>
                    <p className="text-sm text-gray-400">{track.album}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">{track.duration}</span>
                   <button className="text-gray-400 hover:text-blue-400 transition-colors">
                      <PlayIcon className="w-6 h-6" />
                   </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Music;
