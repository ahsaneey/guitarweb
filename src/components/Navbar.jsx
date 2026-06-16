import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-5">
  <h1 className="font-bold text-xl">XPERIA</h1>

  <ul className="flex gap-3 md:gap-8 text-sm md:text-sm">
    <li className="text-orange-500 border-b-2 border-orange-500">Home</li>
    <li>Parts</li>
    <li>Services</li>
    <li>All</li>
  </ul>

  <div className="flex gap-4">
    <span>♡</span>
    <span>👤</span>
    <span>🛒</span>
  </div>
</nav>
  )
}

export default Navbar