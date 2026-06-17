import React from 'react';
import { motion } from 'framer-motion';
import cycle2 from '../assets/cycle2.png'; 
import { GiTargetDummy } from 'react-icons/gi'; 

const FEATURES_DATA = [
  {
    id: 1,
    title: 'Aerospace-Grade Carbon Frame',
    desc: 'Built with ultra-lightweight carbon fiber used in aviation. Maximum strength with minimal weight.',
  },
  {
    id: 2,
    title: 'Smart Tracking & Anti-Theft',
    desc: 'Integrated live GPS tracking and smart phone connectivity with instant anti-theft security alerts.',
  },
  {
    id: 3,
    title: 'Seamless Internal Cockpit',
    desc: 'No messy hanging wires. All gear and brake cables run cleanly inside the premium frame.',
  }
];

function MainFeature() {
  const containerVariants = {
    hidden: { opacity: 0 },
     visible: {
      opacity: 1,
      transition: { staggerChildren: 1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className='w-full py-28 bg-[#f9f9f9] text-black overflow-hidden'>
      <div className='max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
        
    
        <motion.div 
          variants={containerVariants}
          initial='hidden'
          whileInView='visible' 
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-col'
        >
          <span className='text-orange-500 font-bold tracking-widest uppercase text-xs mb-3'>
            Engineered Perfection
          </span>
          <h2 className='text-4xl font-extrabold tracking-tight uppercase mb-12 leading-tight'>
            Why Xperia Is <br /> Cutting Edge
          </h2>

          <div className='space-y-8'>
            {FEATURES_DATA.map((feature) => (
              <motion.div 
                key={feature.id} 
                variants={itemVariants}
                className='flex gap-5'
              >
             
                <div className='w-2 h-2 rounded-full bg-orange-500 mt-2.5 flex-shrink:0' />
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-1'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-500 text-sm leading-relaxed max-w-md'>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
        <div className='relative w-full h-96 flex items-center justify-center'>
          <div className='absolute w-80 h-80 bg-gray-200/50 rounded-full blur-3xl -z-10' />
          
          <motion.img 
            src={cycle2} 
            alt='Xperia Unique Features' 
            initial={{ opacity: 0, x: -150, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className='w-full h-full object-contain mix-blend-multiply'
          />
        </div>

      </div>
    </section>
  );
}

export default MainFeature;