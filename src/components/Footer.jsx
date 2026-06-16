import React from 'react';


function Footer() {
  return (
    <footer className='w-full bg-orange-100 text-black pt-20 pb-12 border-t border-gray-100'>
      <div className='max-w-7xl mx-auto px-8 md:px-16'>
        
      
        <div className='w-full text-center mb-16 select-none'>
          <h1 className='text-[10vw] font-light tracking-[0.15em] uppercase leading-none text-gray-950 default-font'>
            XPERIA
          </h1>
        </div>

      
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 items-start pt-8 border-t border-gray-100'>
          
         
          <div className='flex flex-col space-y-2'>
            
            <a href="#about" className='text-sm text-gray-700 hover:text-orange-500 transition-colors'>About</a>
            <a href="#blog" className='text-sm text-gray-700 hover:text-orange-500 transition-colors'>services</a>
            <a href="#contact" className='text-sm text-gray-700 hover:text-orange-500 transition-colors'>Contact</a>
          </div>

         
          <div className='flex flex-col space-y-2'>
            <h4 className='text-xs font-bold uppercase tracking-widest text-gray-400 mb-2'>Contact</h4>
            <p className='text-sm text-gray-700'>info@xperiabikes.com</p>
            <p className='text-sm text-gray-700'>Tel: 123-456-7890</p>
          </div>

          <div className='flex flex-col space-y-2'>
            <h4 className='text-xs font-bold uppercase tracking-widest text-gray-400 mb-2'>Privacy</h4>
            <a href="#privacy" className='text-sm text-gray-700 hover:text-orange-500 transition-colors'>Privacy Policy</a>
            <a href="#accessibility" className='text-sm text-gray-700 hover:text-orange-500 transition-colors'>Accessibility Statement</a>
          </div>

         

        </div>

        
        <div className='mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400'>
          &copy; {new Date().getFullYear()} XPERIA. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;