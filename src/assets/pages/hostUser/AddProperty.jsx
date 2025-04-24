
import React from "react";

const AddProperty = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-[#00A8CC] mb-6 text-center">
          Add New Property
        </h1>

        <form className="space-y-5">
         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title of Property
            </label>
            <input
              type="text"
              placeholder="e.g. Cozy Room in Accra"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

      
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. East Legon, Accra"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price per Night (₵)
            </label>
            <input
              type="number"
              placeholder="e.g. 300"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nearby Landmark
            </label>
            <input
              type="text"
              placeholder="e.g. Close to Marina Mall"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amenities
            </label>
            <input
              type="text"
              placeholder="e.g. Wi-Fi, Parking, Kitchen"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              About the Property
            </label>
            <textarea
              rows="4"
              placeholder="Describe your property..."
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

        
          <button
            type="submit"
            className="w-full bg-[#00A8CC] text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
