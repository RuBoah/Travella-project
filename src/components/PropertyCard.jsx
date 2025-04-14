import { StarIcon } from 'lucide-react';
import React from 'react';
import house from '../assets/images/house.png';

const PropertyCard = () => {
  return (
    <div className='py-10'>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-[300px] mx-auto">
        <img src={house} alt="Modern Loft in Osu, Accra" className="w-full h-60 object-cover" />

        <div className="p-4 space-y-1">
          <h1 className="text-lg font-semibold text-gray-800">Modern Loft in Osu, Accra</h1>
          <p className="text-sm text-gray-500">Hosted by <span className="font-medium text-gray-700">Ama Boateng</span></p>
          <p className="text-sm text-gray-500">Near Palace Mall</p>
          <p className="text-sm text-gray-500">April 11 - April 16</p>
          <p className="text-sm text-gray-700">
            <span className="text-blue-600 font-medium">GH₵1980 </span>/ night
          </p>

          <div className="flex items-center space-x-1 mt-2">
            <StarIcon className="h-5 w-5 text-amber-400 fill-amber-400" />
            <StarIcon className="h-5 w-5 text-amber-400 fill-amber-400" />
            <StarIcon className="h-5 w-5 text-amber-400 fill-amber-400" />
            <StarIcon className="h-5 w-5 text-amber-400 fill-amber-400" />
            <StarIcon className="h-5 w-5 text-gray-400 fill-gray-400" />
          </div>
        </div>

        <a href="/propertydetails">
          <button className="absolute bottom-4 right-4 px-4 py-2 text-white bg-[#00A8CC] rounded hover:bg-blue-700 transition duration-200 w-full mx-4 sm:w-auto sm:mx-0 sm:right-4">
            View Details
          </button>
        </a>
      </div>
    </div>
  );
}

export default PropertyCard;
