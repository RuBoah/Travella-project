import React from "react";
import PropertyCard from "../../../components/PropertyCard";

const Properties = () => {
  return (
    <div className="bg-gray-200 py-10 px-4 sm:px-6 md:px-10">
      <div className="text-left mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Explore Amazing Stays
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <PropertyCard />
  <PropertyCard />
  <PropertyCard />
  <PropertyCard />
  <PropertyCard />
  <PropertyCard />
</div>

    </div>
  );
};

export default Properties;
