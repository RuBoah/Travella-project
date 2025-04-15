import React from "react";
import {
  StarIcon,
  WifiIcon,
  HomeIcon,
  ThermometerSunIcon,
  BathIcon,
  WavesLadderIcon,
  TvIcon,
} from "lucide-react";
import home1 from "../../images/home1.png";

const PropertyDetails = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-3 gap-2 h-[300px] md:h-[500px] overflow-hidden rounded-2xl">
          <div className="col-span-3 md:col-span-2 row-span-2">
            <img
              src={home1}
              alt="Main House"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2 col-span-1">
            <img
              src={home1}
              alt="Side view 1"
              className="w-full h-full object-cover rounded-2xl"
            />
            <img
              src={home1}
              alt="Side view 2"
              className="w-full h-full object-cover rounded-2xl"
            />
            <img
              src={home1}
              alt="Side view 3"
              className="w-full h-full object-cover rounded-2xl"
            />
            <img
              src={home1}
              alt="Side view 4"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h1 className="text-3xl text-gray-800 font-bold">
              Beautiful Beach House in Accra
            </h1>
            <p className="text-gray-600">Accra, Ghana</p>
            <p className="text-xl text-gray-600 font-semibold mt-2">
              GH₵2200{" "}
              <span className="text-base text-gray-600 font-normal">
                / night
              </span>
            </p>
            <div className="mt-4">
              <a href="/signup">
                <button className="bg-[#00A8CC] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300">
                  Make a Booking
                </button>
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl text-gray-600 font-semibold">Amenities</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
              <li className="flex items-center  text-gray-600 gap-2">
                <WifiIcon className="w-5 h-5" /> Free WiFi
              </li>
              <li className="flex items-center text-gray-600 gap-2">
                <HomeIcon className="w-5 h-5" /> Kitchen
              </li>
              <li className="flex items-center  text-gray-600 gap-2">
                <ThermometerSunIcon className="w-5 h-5" /> Air Conditioning
              </li>
              <li className="flex items-center text-gray-600 gap-2">
                <BathIcon className="w-5 h-5" /> Private Bathroom
              </li>
              <li className="flex items-center text-gray-600 gap-2">
                <WavesLadderIcon className="w-5 h-5" /> Pool
              </li>
              <li className="flex items-center text-gray-600 gap-2">
                <TvIcon className="w-5 h-5" /> Smart TV
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-gray-600 font-semibold">Hosted by</h2>
            <p className="text-gray-700">Ruth Boahene</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">About this property</h2>
            <p className="text-gray-700">
              Enjoy a peaceful getaway in this modern beach house with direct
              access to the ocean. Fully equipped kitchen, cozy living space,
              and a beautiful view make this the perfect staycation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-gray-600 font-semibold">
              Check-in / Check-out
            </h2>
            <p className="text-gray-700">
              Check-in: 2:00 PM &nbsp; | &nbsp; Check-out: 11:00 AM
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-gray-600 font-semibold">
              Booked Dates
            </h2>
            <ul className="text-gray-700 list-disc ml-5 ">
              <li>April 20 - April 22, 2025</li>
              <li>May 1 - May 3, 2025</li>
              <li>May 10 - May 15, 2025</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <div className="space-y-4 mt-2">
              <div className="border p-4 rounded-xl">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">Ama K.</span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="w-4 h-4" /> 4.8
                  </span>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "The place was clean and the view was stunning!"
                </p>
                <p className="text-xs text-gray-500 mt-1">March 15, 2025</p>
              </div>
              <div className="border p-4 rounded-xl">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">Kwame O.</span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="w-4 h-4" /> 5.0
                  </span>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "Definitely booking again. Very peaceful and private."
                </p>
                <p className="text-xs text-gray-500 mt-1">February 28, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
