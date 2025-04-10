import React from 'react';
import { Search, Home, Calendar, MapPin, ThumbsUp } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-50  bg-cover  ">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">How Travella Works</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4">
            Your journey made simple with our easy-to-use platform
          </p>
        </div>
        
        {/* Steps for medium and larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-white p-4 sm:p-6 rounded-full shadow-md mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Search className="h-6 w-6 sm:h-8 sm:w-8 text-[#00A8CC]" />
            </div>
            
            <div className="flex items-center justify-center mb-4 sm:mb-6 relative">
              <div className="rounded-full bg-[#00A8CC] text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-semibold text-sm sm:text-base">
                1
              </div>
              <div className="absolute h-0.5 bg-gray-300 top-1/2 transform -translate-y-1/2 left-1/2 w-full hidden md:block" style={{ zIndex: -1 }}></div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Search for your destination</h3>
            <p className="text-sm sm:text-base text-gray-600">Browse through thousands of stunning properties across the globe. Filter by location, dates, amenities and more.</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-white p-4 sm:p-6 rounded-full shadow-md mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Home className="h-6 w-6 sm:h-8 sm:w-8 text-[#00A8CC]" />
            </div>
            
            <div className="flex items-center justify-center mb-4 sm:mb-6 relative">
              <div className="rounded-full bg-[#00A8CC] text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-semibold text-sm sm:text-base">
                2
              </div>
              <div className="absolute h-0.5 bg-gray-300 top-1/2 transform -translate-y-1/2 left-1/2 w-full hidden lg:block" style={{ zIndex: -1 }}></div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Find the perfect stay</h3>
            <p className="text-sm sm:text-base text-gray-600">Explore detailed listings with high-quality photos, authentic reviews, and comprehensive information about the accommodations.</p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-white p-4 sm:p-6 rounded-full shadow-md mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-[#00A8CC]" />
            </div>
            
            <div className="flex items-center justify-center mb-4 sm:mb-6 relative">
              <div className="rounded-full bg-[#00A8CC] text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-semibold text-sm sm:text-base">
                3
              </div>
              <div className="absolute h-0.5 bg-gray-300 top-1/2 transform -translate-y-1/2 left-1/2 w-full hidden lg:block" style={{ zIndex: -1 }}></div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Book securely</h3>
            <p className="text-sm sm:text-base text-gray-600">Reserve your stay with our simple booking process. Enjoy transparent pricing with no hidden fees.</p>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 sm:p-6 rounded-full shadow-md mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#00A8CC]" />
            </div>
            
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="rounded-full bg-[#00A8CC] text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-semibold text-sm sm:text-base">
                4
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Travel & enjoy</h3>
            <p className="text-sm sm:text-base text-gray-600">Pack your bags and enjoy your travel experience. Access your booking details offline through our app.</p>
          </div>
        </div>
        
        {/* Mobile version */}
        <div className="md:hidden space-y-4 sm:space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center">
            <div className="bg-rose-100 p-3 sm:p-4 rounded-full inline-flex items-center justify-center mb-4 sm:mb-6">
              <Search className="h-5 w-5 sm:h-6 sm:w-6 text-[#00A8CC]" />
            </div>
            <div className="rounded-full bg-[#00A8CC] text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-semibold mx-auto mb-3 sm:mb-4 text-sm sm:text-base">
              1
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Search for your destination</h3>
            <p className="text-sm sm:text-base text-gray-600">Browse through thousands of stunning properties across the globe. Filter by location, dates, amenities and more.</p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center">
            <div className="bg-rose-100 p-3 sm:p-4 rounded-full inline-flex items-center justify-center mb-4 sm:mb-6">
              <Home className="h-5 w-5 sm:h-6 sm:w-6 text-[#00A8CC]" />
            </div>
            <div className="rounded-full bg-[#00A8CC] text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-semibold mx-auto mb-3 sm:mb-4 text-sm sm:text-base">
              2
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Find the perfect stay</h3>
            <p className="text-sm sm:text-base text-gray-600">Explore detailed listings with high-quality photos, authentic reviews, and comprehensive information about the accommodations.</p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center">
            <div className="bg-rose-100 p-3 sm:p-4 rounded-full inline-flex items-center justify-center mb-4 sm:mb-6">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-[#00A8CC]" />
            </div>
            <div className="rounded-full bg-[#00A8CC] text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-semibold mx-auto mb-3 sm:mb-4 text-sm sm:text-base">
              3
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Book securely</h3>
            <p className="text-sm sm:text-base text-gray-600">Reserve your stay with our simple booking process. Enjoy transparent pricing with no hidden fees.</p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center">
            <div className="bg-rose-100 p-3 sm:p-4 rounded-full inline-flex items-center justify-center mb-4 sm:mb-6">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#00A8CC]" />
            </div>
            <div className="rounded-full bg-[#00A8CC] text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-semibold mx-auto mb-3 sm:mb-4 text-sm sm:text-base">
              4
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Travel & enjoy</h3>
            <p className="text-sm sm:text-base text-gray-600">Pack your bags and enjoy your travel experience. Access your booking details offline through our app.</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            <div className="flex justify-center mb-4 sm:mb-6">
              <ThumbsUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#00A8CC]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Ready to start your journey?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Join thousands of happy travelers who found their perfect stay with Travella.
            </p>
            <button className="bg-[#00A8CC] hover:bg-text-[#00A8CD] text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;