
import React from 'react';
import Section from './Section';
import type { TourDate } from '../types';

const tourDates: TourDate[] = [
  { date: "OCT 28, 2024", venue: "The Viper Room", city: "Los Angeles, CA", ticketUrl: "#" },
  { date: "NOV 05, 2024", venue: "Brooklyn Steel", city: "Brooklyn, NY", ticketUrl: "#" },
  { date: "NOV 12, 2024", venue: "The Fillmore", city: "San Francisco, CA", ticketUrl: "#" },
  { date: "NOV 19, 2024", venue: "Metro", city: "Chicago, IL", ticketUrl: "#" },
  { date: "DEC 02, 2024", venue: "EartH", city: "London, UK", ticketUrl: "#" },
  { date: "DEC 09, 2024", venue: "Olympiapark", city: "Munich, DE", ticketUrl: "#" },
];

const Tour: React.FC = () => {
  return (
    <Section id="tour" title="On Tour" bgClassName="bg-black">
      <div className="max-w-4xl mx-auto">
        <ul className="divide-y divide-gray-800 border-t border-b border-gray-800">
          {tourDates.map((item, index) => (
            <li key={index} className="flex flex-col md:flex-row items-center justify-between p-6 space-y-4 md:space-y-0 transition-all duration-300 hover:bg-gray-900">
              <div className="flex items-center text-center md:text-left">
                <div className="w-24">
                  <p className="text-xl font-bold text-blue-400">{item.date.split(',')[0]}</p>
                  <p className="text-sm text-gray-400">{item.date.split(',')[1]}</p>
                </div>
                <div className="ml-6">
                  <p className="text-xl font-bold text-white">{item.venue}</p>
                  <p className="text-gray-400">{item.city}</p>
                </div>
              </div>
              <a href={item.ticketUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent text-blue-400 font-bold uppercase tracking-wider py-2 px-6 border-2 border-blue-500 rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300">
                Tickets
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Tour;
