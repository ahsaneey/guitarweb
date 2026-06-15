import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {
  return (
   <nav className='absolute top-0 left-0 w-full pt-10 text-black z-20'>
    <div className='container'>
        <div className='flex justify-between items-center p-5'>
        <h1 className='font-bold text-x1'>XPERIA</h1>

    
    <div>
        <GiHamburgerMenu className='text-3xl cursor-pointer'/>
     </div>
    </div>
    </div>
   </nav>
  )
}

export default Navbar