import React, { useState } from "react";
import globe from "../../images/globe.png";

const MakeBookings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Booking data:", formData);
    
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-6xl"
      >
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={globe}
            alt="booking"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-3/5 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Book Your Perfect Stay
          </h2>

          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Location
              </label>
              <input
                type="location"
                id="location"
                name="location"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

      
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Stay Dates
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="checkIn"
                  className="text-sm text-gray-500 mb-1 block"
                >
                  Check-in
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="checkOut"
                  className="text-sm text-gray-500 mb-1 block"
                >
                  Check-out
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="adults"
              >
                Adults
              </label>
              <input
                type="number"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                placeholder="Number of Adults"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="children"
              >
                Children
              </label>
              <input
                type="number"
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                min="0"
                placeholder="Number of Children"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Room Quality</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">Standard</span>
              <div className="flex items-center space-x-1">
                <span className="h-2 w-8 bg-amber-500 rounded"></span>
                <span className="h-2 w-8 bg-amber-500 rounded"></span>
                <span className="h-2 w-8 bg-amber-500 rounded"></span>
                <span className="h-2 w-8 bg-gray-300 rounded"></span>
                <span className="h-2 w-8 bg-gray-300 rounded"></span>
              </div>
              <span className="text-gray-500 text-sm">Luxury</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg transition duration-300 font-medium text-lg shadow-md hover:shadow-lg"
          >
            Confirm Your Booking
          </button>
          <p className="text-gray-500 text-sm mt-4 text-center">
            By confirming, you agree to our terms and cancellation policy
          </p>
        </div>
      </form>
    </div>
  );
};

export default MakeBookings;
