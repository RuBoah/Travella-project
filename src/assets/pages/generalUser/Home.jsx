import React from "react";
import { Typewriter } from "react-simple-typewriter";

import HowItWorks from "../../../components/HowItWorks";
import Testimonials from "../../../components/Testimonials";
import DestinationCard from "../../../components/DestinationCard";
import PropertyCard from "../../../components/PropertyCard";

const Home = () => {
  return (
    <div className="">
      <section className="relative h-screen bg-[url(assets/images/home1.png)] bg-center bg-cover">
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">
              <Typewriter
                words={[
                  "Find your next adventure",
                  "Find your next stay",
                  "Find your next getaway",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            <span className="text-[#00A8CC]">with ease.</span>
          </h1>

          <div className="mt-4 flex justify-center">
            <a href="/properties">
            <button
  type="submit"
  className="bg-[#00A8CC] text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-[#008db0]"
>
  Start Exploring
</button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="text-center py-10">
          <h1 className="text-gray-600 text-4xl font-bold">
            Popular Destinations
          </h1>
          <div className="w-16 h-1 bg-[#00A8CC] mx-auto mt-2 rounded"></div>
        </div>

        <div>
          <DestinationCard />
        </div>

        <div className="text-center py-10">
          <h1 className="text-gray-600 text-4xl font-bold">
            Featured Listings
          </h1>
          <div className="w-16 h-1 bg-[#00A8CC] mx-auto mt-2 rounded"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
