import { StarIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholderHouse from "../assets/images/house.png";

const PropertyCard = ({ property: initialProperty }) => {
  const [propertyState] = useState(initialProperty);

  const getMainPhoto = () => {
    if (propertyState?.photos?.length > 0) {
      return propertyState.photos[0]; 
    }
    return placeholderHouse;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarIcon
            key={i}
            className="h-5 w-5 text-amber-400 fill-amber-400 opacity-50"
          />
        );
      } else {
        stars.push(
          <StarIcon key={i} className="h-5 w-5 text-gray-400 fill-gray-400" />
        );
      }
    }

    return stars;
  };

  return (
    <div
      key={propertyState?.id}
      className="relative bg-white rounded-lg shadow-md overflow-hidden w-full"
    >
      <img
        src={getMainPhoto()}
        alt={propertyState?.title}
        className="w-full h-60 object-cover"
        onError={(e) => {
          e.target.src = placeholderHouse;
        }}
      />

      <div className="p-4 space-y-1">
        <h1 className="text-lg font-semibold text-gray-800">
          {propertyState?.title}
        </h1>
        <p className="text-sm text-gray-500">
          Hosted by{" "}
          <span className="font-medium text-gray-700">
            {propertyState?.host?.username}
          </span>
        </p>
        <p className="text-sm text-gray-500">{propertyState?.location?.city}</p>

        <p className="text-sm text-gray-700">
          <span className="text-blue-600 font-medium">
            GH₵{propertyState?.pricePerNight}{" "}
          </span>
          / night
        </p>

        <div className="flex items-center space-x-1 mt-2">
          {renderStars(propertyState?.rating || 4)}
        </div>
      </div>

      <Link to={`/propertydetails/${propertyState?.id}`}>
        <button className="absolute bottom-4 right-4 px-4 py-2 text-white bg-[#00A8CC] rounded hover:bg-blue-700 transition duration-200 w-full mx-4 sm:w-auto sm:mx-0 sm:right-4">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default PropertyCard;