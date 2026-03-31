import React, { useEffect, useState } from "react";
import { assets, dummyMyBookingsData } from "../assets/assets";
import Title from "../components/Title";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const currency = import.meta.env.VITE_CURRENCY;

  const fetchMyBookings = async () => {
    setBookings(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl mx-auto">
      <Title
        title="My Bookings"
        subTitle="View and manage all your car bookings"
        align="left"
      />

      <div>
        {bookings.map((booking, index) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12"
          >
            {/* Car Info */}
            <div>
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.car.image}
                  alt={`${booking.car.brand} ${booking.car.model}`}
                  className="w-full aspect-video object-cover"
                />
              </div>

              <p className="text-lg font-medium">
                {booking.car.brand} {booking.car.model}
              </p>

              <p className="text-gray-500">
                {booking.car.year} · {booking.car.category} ·{" "}
                {booking.car.location}
              </p>
            </div>

            {/* Booking Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <p className="px-3 py-1.5 bg-light rounded">
                  Booking #{index + 1}
                </p>

                <p
                  className={`px-3 py-1 text-xs rounded-full capitalize
                    ${
                      booking.status.toLowerCase() === "confirmed"
                        ? "bg-green-400/15 text-green-600"
                        : "bg-red-400/15 text-red-600"
                    }`}
                >
                  {booking.status}
                </p>
              </div>

              {/* Rental Period */}
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.calendar_icon_colored}
                  alt="calendar"
                  className="w-4 h-4 mt-1"
                />
                <div>
                  <p className="text-gray-500">Rental Period</p>
                  <p>
                    {booking.pickupDate.split("T")[0]} to{" "}
                    {booking.returnDate.split("T")[0]}
                  </p>
                </div>
              </div>

              {/* Pickup Location */}
              <div className="flex items-start gap-2 mt-4">
                <img
                  src={assets.location_icon_colored}
                  alt="location"
                  className="w-4 h-4 mt-1"
                />
                <div>
                  <p className="text-gray-500">Pick-up Location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col justify-between">
              <div className="text-right">
                <p className="text-gray-500">Total Price</p>
                <h1 className="text-lg font-semibold">
                  {currency}
                  {booking.price}
                </h1>
                <p className="text-gray-500 text-sm">
                  Booked on {booking.createdAt.split("T")[0]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
