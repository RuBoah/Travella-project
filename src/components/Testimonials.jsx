import React from "react";


const testimonials = [
  {
    name: "Ama Serwaa",
    location: "Accra, Ghana",
    review:
      "I had an amazing stay! The host was super friendly and the apartment was spotless. Highly recommended.",
    avatar: "https://",
  },
  {
    name: "John Doe",
    location: "Cape Town, South Africa",
    review:
      "Booking was smooth and the place was even better than the pictures. Will book again!",
    avatar: "https://",
  },
  {
    name: "Fatima Ibrahim",
    location: "Lagos, Nigeria",
    review:
      "Loved the experience! Everything was perfect from check-in to check-out.",
    avatar: "https://",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-[#00A8CC] px-4 md:px-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Traveler Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <p className="text-gray-700">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
