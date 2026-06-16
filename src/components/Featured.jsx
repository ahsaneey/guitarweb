import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import mountain from '../assets/mountain.jpeg'; 
import bgRoad from '../assets/bgRoad.jpg';     
import electric2 from '../assets/electric2.png'; 

const COLLECTIONS_DATA = [
  {
    id: 1,
    title: 'MOUNTAIN',
    subtitle: 'BIKES',
    desc: 'Conquer the rugged trails and steep peaks with engineered perfection. Our mountain line offers ultimate suspension.',
    price: 'Starting from $1,299',
    bgImg: mountain, 
  },
  {
    id: 2,
    title: 'CARBON ROAD',
    subtitle: 'SERIES',
    desc: 'Built for pure velocity and endless tarmac. Experience maximum power transfer with our ultra-lightweight carbon fiber.',
    price: 'Starting from $1,850',
    bgImg: bgRoad,
  },
  {
    id: 3,
    title: 'SMART ELECTRIC',
    subtitle: 'E-TRACK',
    desc: 'The future of urban commuting and long-range exploration. Seamless battery integration coupled with intelligent features.',
    price: 'Starting from $2,400',
    bgImg: electric2, 
  }
];

function FeaturedCollectionsPage() {
  const [activeBg, setActiveBg] = useState(COLLECTIONS_DATA[0].bgImg);

  return (
    <div className='relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center'>
      
      <AnimatePresence mode='wait'>
        <motion.div 
          key={activeBg} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className='absolute inset-0 w-full h-full bg-cover bg-center  scale-105 z-0'
          style={{ backgroundImage: `url(${activeBg})` }}
        />
      </AnimatePresence>

   
      <div className='relative max-w-7xl w-full mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center h-auto z-10 py-12'>
        
        <div className='md:col-span-2 flex flex-col space-y-10'>
          
          {COLLECTIONS_DATA.map((collection) => (
            <div 
              key={collection.id}
              onMouseEnter={() => setActiveBg(collection.bgImg)}
              className='group cursor-pointer border-l-2 border-transparent hover:border-orange-500 pl-6 transition-all duration-300'
            >
              <div className='mb-2 select-none'>
                <h2 className='text-3xl md:text-4xl font-black tracking-tighter uppercase text-white/60 group-hover:text-white transition-colors duration-300'>
                  {collection.title} <span className='font-light text-orange-500/70 group-hover:text-orange-500'>{collection.subtitle}</span>
                </h2>
              </div>

              <p className='text-gray-500 text-xs md:text-sm max-w-xl h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 leading-relaxed font-light'>
                {collection.desc}
              </p>

              <p className='text-orange-500 font-bold text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                {collection.price}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default FeaturedCollectionsPage;