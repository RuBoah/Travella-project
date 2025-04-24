import { StarIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import placeholderHouse from '../assets/images/house.png';

const PropertyCard = ({property}) => {
  const [property, setProperty] = useState(property);
console.log("fethed",fetchedProperty)
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarIcon key={i} className="h-5 w-5 text-amber-400 fill-amber-400 opacity-50" />);
      } else {
        stars.push(<StarIcon key={i} className="h-5 w-5 text-gray-400 fill-gray-400" />);
      }
    }
    
    return stars;
  };

  if (property.length === 0) {
    return <div className="py-10 text-center">No properties found</div>;
  }

  return (
   
     
        <div key={property.id} className="relative bg-white rounded-lg shadow-md overflow-hidden w-full">
          <img 
            src={property.image || placeholderHouse} 
            alt={property.title} 
            className="w-full h-60 object-cover"
            onError={(e) => {e.target.src = placeholderHouse}} 
          />

          <div className="p-4 space-y-1">
            <h1 className="text-lg font-semibold text-gray-800">{property.title}</h1>
            <p className="text-sm text-gray-500">Hosted by <span className="font-medium text-gray-700">{property.host}</span></p>
            <p className="text-sm text-gray-500">{property.location}</p>
            <p className="text-sm text-gray-500">{property.availability}</p>
            <p className="text-sm text-gray-700">
              <span className="text-blue-600 font-medium">GH₵{property.price} </span>/ night
            </p>

            <div className="flex items-center space-x-1 mt-2">
              {renderStars(property.rating || 4)}
            </div>
          </div>

          <Link to={`/propertydetails/${property.id}`}>
            <button className="absolute bottom-4 right-4 px-4 py-2 text-white bg-[#00A8CC] rounded hover:bg-blue-700 transition duration-200 w-full mx-4 sm:w-auto sm:mx-0 sm:right-4">
              View Details
            </button>
          </Link>
        </div>
   
  
  );
};

export default PropertyCard;