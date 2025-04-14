import React from "react";
import cape from "../assets/images/cape.png";
import boathouses from "../assets/images/boathouses.png";
import home2 from "../assets/images/home2.png";

const DestinationCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center px-4 md:px-8 py-8">
      
      <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden w-[300px]">
        <img
          src={cape}
          alt="Cape Coast"
          className="w-full h-60 object-cover"
        />
        <div className="p-4 text-left">
          <h3 className="text-lg font-semibold text-gray-800">Cape Coast, Ghana</h3>
          <p className="text-sm text-gray-600">Historic sites & serene escapes</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden
       w-[300px]">
        <img
          src={boathouses}
          alt="Accra"
          className="w-full h-60 object-cover"
        />
        <div className="p-4 text-left">
          <h3 className="text-lg font-semibold text-gray-800">Accra, Ghana</h3>
          <p className="text-sm text-gray-600">Beachfront spots & nightlife</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden 
      w-[300px]">
        <img
          src={home2}
          alt="Accra"
          className="w-full h-60 object-cover"
        />
        <div className="p-4 text-left">
          <h3 className="text-lg font-semibold text-gray-800">Accra, Ghana</h3>
          <p className="text-sm text-gray-600">Beachfront spots & nightlife</p>
        </div>
      </div>
      
    </div>
  );
};

export default DestinationCard;
