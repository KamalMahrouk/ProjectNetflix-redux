import React from 'react'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';



function Navbar() {
  return (
    <>
<nav class="absolute px-2 top-0 mb-10">
  <div class="md:gap-40 mt-2 ml-3 mx-auto flex flex-wrap items-center justify-between">
  <a href="#" class="flex">
    <span class="self-center text-[#E50914] text-3xl font-bold whitespace-nowrap">Netflex</span>
  </a>
  <div class="flex md:ml-72 md:order-2">
      <div class="relative mr-3 md:mr-0 hidden md:block">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="email-adress-icon" class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-20 pr-24 p-2" placeholder="Search..."/>
      </div>
      <button data-collapse-toggle="mobile-menu-3" type="button" class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false"></button>
  </div>
  <div class=" hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
    <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#" class=" text-gray-400  md:bg-transparent block pl-3 pr-4 py-2 md:text-gray-400 md:hover:text-gray-50 md:p-0 rounded" aria-current="page"><Link style={{textDecoration:"none", color:"gray"}} to="/">Home</Link></a>
      </li>
      <li>
        <a href="#" class="text-gray-400 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-50 md:p-0"><Link style={{textDecoration:"none", color:"gray"}} to="/About">About</Link></a>
      </li>
      <li>
        <a href="#" class="text-gray-400 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-50 md:p-0"><Link style={{textDecoration:"none",  color:"gray"}} to="/Contact">Contact</Link></a>
      </li>
    </ul>
  </div>
  </div>
</nav>
<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </>
  )
}

export default Navbar;