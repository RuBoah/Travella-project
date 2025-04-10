import React from "react";
import globe from "../../images/globe.png";

const Login = () => {
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">
        <div className="w-full lg:w-1/2 p-8 space-y-6 flex flex-col justify-center">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Log In
            </button>
  
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
  
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={globe}
            alt="Destination"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Login;
