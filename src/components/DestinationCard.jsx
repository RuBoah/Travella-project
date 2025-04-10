import React, { useState } from "react";

// Star Rating Component
const StarRating = ({ rating, setRating, interactive = false }) => {
  const stars = [1, 2, 3, 4, 5];
  
  const handleClick = (value) => {
    if (interactive) {
      setRating(value);
    }
  };

  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          className={`${
            interactive ? "cursor-pointer" : ""
          } text-lg ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-xs text-gray-500">({rating.toFixed(1)})</span>
    </div>
  );
};

// Dummy data (replace with data from your backend)
const destinations = [
  {
    id: 1,
    imageUrl: "/api/placeholder/400/300",
    location: "Cape Coast, Ghana",
    landmark: "Cape Coast Castle",
    price: 120,
    rating: 4.7,
    reviews: 127,
    startDate: "2025-04-12",
    endDate: "2025-04-17",
  },
  {
    
    id: 2,
    imageUrl: "/api/placeholder/400/300",
    location: "Zanzibar, Tanzania",
    landmark: "Nungwi Beach",
    price: 150,
    rating: 4.9,
    reviews: 219,
    startDate: "2025-05-01",
    endDate: "2025-05-05",
  },
  {
    id: 1,
    imageUrl: "/api/placeholder/400/300",
    location: "Cape Coast, Ghana",
    landmark: "Cape Coast Castle",
    price: 120,
    rating: 4.7,
    reviews: 127,
    startDate: "2025-04-12",
    endDate: "2025-04-17",
  },
  {
    id: 2,
    imageUrl: "/api/placeholder/400/300",
    location: "Zanzibar, Tanzania",
    landmark: "Nungwi Beach",
    price: 150,
    rating: 4.9,
    reviews: 219,
    startDate: "2025-05-01",
    endDate: "2025-05-05",
  },
];

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

export default function DestinationCard() {
  return (
    <section className=" max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Popular Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <img
                src={dest.imageUrl}
                alt={dest.location}
                className="h-48 w-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-lg text-xs font-medium shadow-sm">
                {dest.reviews} reviews
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">
                  {dest.location}
                </h3>
              </div>
              <p className="text-sm text-gray-500">Near {dest.landmark}</p>
              <StarRating rating={dest.rating} />
              <div className="flex justify-between items-center pt-1">
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-blue-600">${dest.price}</span>{" "}
                  / night
                </p>
                <p className="text-xs text-gray-600">
                  {formatDate(dest.startDate)} – {formatDate(dest.endDate)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}