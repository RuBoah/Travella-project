import React from "react";
import test from "../assets/images/test.png";
import test1 from "../assets/images/test1.png";
import test2 from "../assets/images/test2.png";

const Testimonials = () => {
  return (
    <section className="py-12 bg-[#00A8CC] px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        Traveler Testimonials
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <img
              src={test}
              alt="Ama Serwaa"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Ama Serwaa</p>
              <p className="text-sm text-gray-500">Accra, Ghana</p>
            </div>
          </div>
          <p className="text-gray-700">
            "I had an amazing stay! The host was super friendly and the
            apartment was spotless. Highly recommended."
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <img
              src={test1}
              alt="John Doe"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Cape Town, South Africa</p>
            </div>
          </div>
          <p className="text-gray-700">
            "Booking was smooth and the place was even better than the pictures.
            Will book again!"
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <img
              src={test2}
              alt="Fatima Ibrahim"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Fatima Ibrahim</p>
              <p className="text-sm text-gray-500">Lagos, Nigeria</p>
            </div>
          </div>
          <p className="text-gray-700">
            "Loved the experience! Everything was perfect from check-in to
            check-out."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
