import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  WifiIcon,
  HomeIcon,
  ThermometerSunIcon,
  BathIcon,
  WavesLadderIcon,
  TvIcon,
  ArrowLeftIcon,
  StarIcon,
} from "lucide-react";
import { apiGetPropertyDetails } from "../../services/properties";

import pty1 from "../../images/pty1.png";
import pty1hall from "../../images/pty1hall.png";
import pty1kitchen from "../../images/pty1kitchen.png";
import pty1wsh from "../../images/pty1wsh.png";
import pool from "../../images/pool.png";
import pty1gym from "../../images/pty1gym.png";

const fallbackImages = [pty1, pty1hall, pty1kitchen, pty1wsh, pool, pty1gym];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await apiGetPropertyDetails(id);
        setProperty(response.data["single property"]);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <div className="text-center p-10 text-gray-600">Loading...</div>;
  }

  if (!property) {
    return (
      <div className="text-center p-10 text-red-500">
        Failed to load property details.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
     
      <button
        onClick={() => navigate("/properties")}
        className="flex items-center text-[#00A8CC] hover:text-[#008db0] mb-4 font-semibold"
      >
        <ArrowLeftIcon className="mr-2" size={20} />
        Back to Properties
      </button>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {fallbackImages.map((img, index) => (
          <img
            key={index}
            src={property.photos[index] || img}
            alt={property.title}
            className="w-full h-60 object-cover rounded-xl shadow-md"
            onError={(e) => (e.target.src = img)}
          />
        ))}
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">{property.title}</h1>
       
        <p className="text-gray-500 mt-1">
          {property.location.city}, {property.location.country}
        </p>
        <p className="text-xl text-gray-700 font-semibold mt-2">
          GH₵{property.pricePerNight}{" "}
          <span className="text-base font-normal">/ night</span>
        </p>
        <p className="text-gray-600 mt-4">{property.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mb-10">
        {property.amenities.map((amenity, i) => (
          <div key={i} className="flex items-center gap-2">
            <StarIcon size={18} className="text-[#00A8CC]" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
       <a href="/makebookings"> <button className="bg-[#00A8CC] hover:bg-[#008db0] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition duration-300">
          Make a Booking
        </button></a>
      </div>
    </div>
  );
};

export default PropertyDetails;
