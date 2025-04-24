import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  StarIcon,
  WifiIcon,
  HomeIcon,
  ThermometerSunIcon,
  BathIcon,
  WavesLadderIcon,
  TvIcon,
  ArrowLeftIcon,
} from "lucide-react";
import home1 from "../../images/home1.png";

const PropertyDetails = () => {
  const { id } = useParams(); 
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/property/${id}`);
        setProperty(res.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div className="text-center p-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
     
      <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-xl text-gray-600 font-semibold mt-2">
        GH₵{property.price}{" "}
        <span className="text-base text-gray-600 font-normal">/ night</span>
      </p>
     
    </div>
  );
};

export default PropertyDetails;
