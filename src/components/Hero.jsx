import React from 'react'
import cycle2 from '../assets/cycle2.png' 

import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='relative w-full h-screen overflow-hidden bg-[#f4f4f4] flex items-center justify-center'>

        <motion.h1
          initial={{opacity:1,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          
        

    
        className='absolute text-[15vw] font-extrabold text-orange-500 select-none tracking-tight z-0 opacity-90 default-font'>
        
        XPERIA
        </motion.h1>

   
      <img 
        src={cycle2} 
        alt='cycle' 
        className='absolute w-[65%] max-w-[900px] h-auto object-contain z-10 drop-shadow-2xl'
      />
     
      

    </div>
  )
}

export default Hero;