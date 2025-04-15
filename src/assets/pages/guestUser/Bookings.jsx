import React from "react";
import book from "../../images/book.png";

const Bookings = () => {
  return (
    <div className="flex">
      <div>
        <img src={book} alt="booking" />
      </div>
      <form action="" className="max-w-xl mx-auto p-4">
        <div>
          <p className="text-3xl py-10 font-semibold">Book a Room</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <p className="whitespace-nowrap sm:pt-2">Full Name</p>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col flex-1">
              <input
                type="text"
                id="first-name"
                placeholder="First name"
                required
                className="border p-2 rounded"
              />
              <label htmlFor="first-name">First Name</label>
            </div>
            <div className="flex flex-col flex-1">
              <input
                type="text"
                id="last-name"
                placeholder="Last name"
                required
                className="border p-2 rounded"
              />
              <label htmlFor="last-name">Last Name</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <p className="px-1 sm:pt-2">Email</p>
          <div className="flex flex-col flex-1">
            <input
              type="email"
              id="email"
              placeholder="ex. myname@example.com"
              required
              className="border p-2 rounded"
            />
            <label htmlFor="email">example@example.com</label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <p className="px-1 sm:pt-2">Phone</p>
          <div className="flex flex-col flex-1">
            <input
              type="tel"
              id="phone"
              placeholder="e.g. +233 24 000 0000"
              required
              className="border p-2 rounded"
            />
            <label htmlFor="phone">+000 00 000 0000</label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <p className="px-1 sm:pt-2">Dates</p>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col flex-1">
              <label htmlFor="check-in">Check-in</label>
              <input
                type="date"
                id="check-in"
                required
                className="border p-2 rounded"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="check-out">Check-out</label>
              <input
                type="date"
                id="check-out"
                required
                className="border p-2 rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <p className="px-1 sm:pt-2">Guests</p>

          <div className="flex flex-col flex-1">
            <input
              type="number"
              id="guests"
              min="1"
              placeholder="Number of Adults"
              required
              className="border p-2 rounded"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <p className="px-1 sm:pt-2">Guests</p>
          <div className="flex flex-col flex-1">
            <input
              type="number"
              id="guests"
              min="1"
              placeholder="Number of Children"
              required
              className="border p-2 rounded"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bookings;
