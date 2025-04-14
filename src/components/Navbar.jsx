import React from 'react';
import { Menu, UserCircle } from "lucide-react";

const Navbar = () => {
    const isLoggedIn = false; 
    const isHost = false; 
  return (
    <nav className="w-full px-4 md:px-10 py-4 shadow-md flex justify-between items-center bg-white">
        <a href="/" className="text-2xl font-bold text-[#00A8CC] cursor-pointer">Travella</a> 

       
      <div className="flex items-center gap-4">
        <a href="#host" className="hidden md:inline text-sm font-medium hover:underline text-gray-700">
          Become a Host
        </a>

        {isLoggedIn ? (
          <div className="relative group cursor-pointer">
            <UserCircle className="w-8 h-8 text-gray-600" />
         
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 w-40 hidden group-hover:block z-50">
              {isHost && <a href="/dashboard" className="block py-1 px-2 hover:bg-gray-100">Host Dashboard</a>}
              {!isHost && <a href="/bookings" className="block py-1 px-2 hover:bg-gray-100">My Bookings</a>}
              <a href="/logout" className="block py-1 px-2 text-red-500 hover:bg-gray-100">Logout</a>
            </div>
          </div>
        ) : (
          <a
            href="/signup"
            className="px-4 py-2 bg-[#00A8CC]  text-white rounded-full text-sm font-semibold hover:bg-blue-600">
            Sign Up
          </a>
        )}

        
        <Menu className="w-6 h-6 md:hidden text-gray-600 cursor-pointer" />
      </div>
    </nav>
  );
}
export default Navbar;