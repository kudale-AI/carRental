import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import Title from "./Title";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { axios, isOwner, currency } = useAppContext();

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    {
      title: "Total Cars",
      value: data.totalCars,
      icon: assets.carIconColored,
    },
    {
      title: "Total Bookings",
      value: data.totalBookings,
      icon: assets.listIconColored,
    },
    {
      title: "Pending",
      value: data.pendingBookings,
      icon: assets.cautionIconColored,
    },
    {
      title: "Confirmed",
      value: data.completedBookings,
      icon: assets.listIconColored,
    },
  ];

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get("/api/owner/dashboard");

      if (response.data.success) {
        const dashboardData = response.data.dashboardData || {};

        setData({
          totalCars: dashboardData.totalCars || 0,
          totalBookings: dashboardData.totalBookings || 0,
          pendingBookings: dashboardData.pendingBookings || 0,
          completedBookings: dashboardData.completedBookings || 0,
          recentBookings: Array.isArray(dashboardData.recentBookings)
            ? dashboardData.recentBookings
            : [],
          monthlyRevenue: dashboardData.monthlyRevenue || 0,
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isOwner) {
      fetchDashboardData();
    }
  }, [isOwner]);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Admin Dashboard"
        subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities"
      />

      {/* Dashboard cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor"
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title}</h1>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent bookings */}
      <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
        <h1 className="text-lg font-medium">Recent Bookings</h1>
        <p className="text-gray-500">Latest customer bookings</p>

        {data.recentBookings.length === 0 && (
          <p className="text-sm text-gray-400 mt-4">No recent bookings</p>
        )}

        {data.recentBookings.map((booking, index) => (
          <div key={index} className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <img
                  src={assets.listIconColored}
                  alt=""
                  className="h-5 w-5"
                />
              </div>

              <div>
                <p>
                  {booking.car?.brand || "Unknown"}{" "}
                  {booking.car?.model || "Car"}
                </p>
                <p className="text-sm text-gray-500">
                  {booking.createdAt
                    ? booking.createdAt.split("T")[0]
                    : "—"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-medium">
              <p className="text-sm text-gray-500">
                {currency}
                {booking.price ?? 0}
              </p>
              <p className="px-3 py-0.5 border border-borderColor rounded-full text-sm">
                {booking.status || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly revenue */}
      <div className="p-4 md:p-6 border border-borderColor rounded-md w-full md:max-w-xs mt-6">
        <h1 className="text-lg font-medium">Monthly Revenue</h1>
        <p className="text-gray-500">Revenue for current month</p>
        <p className="text-3xl mt-6 font-semibold text-primary">
          {currency}
          {data.monthlyRevenue}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
