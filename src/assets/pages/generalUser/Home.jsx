import React from "react";

import HowItWorks from "../../../components/HowItWorks";
import Testimonials from "../../../components/Testimonials";
import DestinationCard from "../../../components/DestinationCard";
import PropertyCard from "../../../components/PropertyCard";

const Home = () => {
  return (
    <div className="bg-[url(assets/images/rent.png)] bg-cover bg-center bg-fixed ">
      <section className="relative h-screen">
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your next <span className="text-[#00A8CC]">getaway</span> with
            ease.
          </h1>

          <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6 mt-6 w-full max-w-3xl text-gray-800">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Location"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Guests"  
                min="1"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>

            <div className="mt-4 flex justify-center">
             <a href="/properties"> <button
                type="submit"
                className="bg-[#00A8CC] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Start Exploring
              </button></a>
            </div>
          </div>
        </div>
      </section>
<section>
      <h1 className="text-white text-4xl font-bold animate-bounce text-center py-10">Popular Destinations</h1>
   
      <div className="  ">
      <DestinationCard/> 
     
      </div>

      <p className="  text-white text-4xl font-bold animate-bounce text-center py-10">Featured Listings</p>
   <div className=" grid grid-cols-3 gap-4 justify-items-center ">
   <PropertyCard/>   
   <PropertyCard/>
   <PropertyCard/> 
      </div>
      </section>     
  <HowItWorks/>
 <Testimonials/>

  
    </div>
  );
};

export default Home;
