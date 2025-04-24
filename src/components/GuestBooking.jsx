import React from 'react';

const GuestBookings = () => {
  
  const bookings = [
    {
      id: 'booking1',
      propertyName: 'Ocean View Apartment',
      location: 'Cape Coast, Ghana',
      checkIn: '2025-05-01',
      checkOut: '2025-05-05',
      status: 'confirmed',
    },
    {
      id: 'booking2',
      propertyName: 'Mountain Retreat',
      location: 'Aburi, Ghana',
      checkIn: '2025-06-10',
      checkOut: '2025-06-15',
      status: 'pending',
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">{booking.propertyName}</h3>
              <p>{booking.location}</p>
              <p>Check-in: {booking.checkIn}</p>
              <p>Check-out: {booking.checkOut}</p>
              <p>Status: <span className="font-medium">{booking.status}</span></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuestBookings;
