import React, { useState, useEffect } from "react";
import PropertyCard from "../../../components/PropertyCard";
import house from "../../../assets/images/house.png"; 
import { apiGetProperties } from "../../services/properties";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await apiGetProperties();
        console.log("Fetched properties:", data?.data);
        setProperties(data.data); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="py-10 text-center">Loading properties...</div>;
  }

  if (error) {
    return <div className="py-10 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-200 py-10 px-4 sm:px-6 md:px-10">
      <div className="text-left mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Explore Amazing Stays
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} /> 
        ))}
      </div>
    </div>
  );
};

export default Properties;
