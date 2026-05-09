"use client";

import { useState } from "react";
import Image from "next/image";

export default function FeaturedProperties() {
  const tabs = ["Apartments", "Villas", "Commercial", "Rentals"];

  const [activeTab, setActiveTab] = useState("Apartments");

  const data = {
    Apartments: [
      {
        name: "Skyline Apartment",
        location: "Powai, Mumbai",
        image: "/Home/Properties/Skyline Apartment.jpeg",
      },
      {
        name: "Urban Heights",
        location: "Andheri, Mumbai",
        image: "/Home/Properties/Urban Heights.jpeg",
      },
      {
        name: "City View Flat",
        location: "Thane, Mumbai",
        image: "/Home/Properties/City View Flat.jpeg",
      },
      {
        name: "Elite Residency",
        location: "Worli, Mumbai",
        image: "/Home/Properties/Elite Residency.jpeg",
      },
    ],

    Villas: [
      {
        name: "Luxury Sea Villa",
        location: "Goa",
        image: "/Home/pexels-shox-29174529.jpg",
      },
      {
        name: "Royal Villa",
        location: "Lonavala",
        image: "/Home/Properties/Royal Villa.jpeg",
      },
      {
        name: "Green Valley Villa",
        location: "Pune",
        image: "/Home/Properties/Green Valley Villa.jpeg",
      },
      {
        name: "Hilltop Mansion",
        location: "Alibaug",
        image: "/Home/Properties/Hilltop Mansion.jpeg",
      },
    ],

    Commercial: [
      {
        name: "Business Tower",
        location: "BKC, Mumbai",
        image: "/Home/Properties/Business Tower.jpeg",
      },
      {
        name: "Tech Park",
        location: "Hinjewadi, Pune",
        image: "/Home/Properties/Tech Park.jpeg",
      },
      {
        name: "Corporate Hub",
        location: "Lower Parel",
        image: "/Home/Properties/Corporate Hub.jpeg",
      },
      {
        name: "Office Plaza",
        location: "Navi Mumbai",
        image: "/Home/Properties/Office Plaza.jpeg",
      },
    ],

    Rentals: [
      {
        name: "Rental Studio",
        location: "Andheri West",
        image: "/Home/Properties/Rental Studio.jpeg",
      },
      {
        name: "Budget Flat",
        location: "Kandivali",
        image: "/Home/Properties/Budget Flat.jpeg",
      },
      {
        name: "Family Apartment",
        location: "Borivali",
        image: "/Home/Properties/Family Apartment.jpeg",
      },
      {
        name: "City Rental Home",
        location: "Chembur",
        image: "/Home/Properties/City Rental Home.jpeg",
      },
    ],
  };

  return (
    <section className="w-full py-20 bg-black">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Featured{" "}
          <span className="text-[var(--primary)]">
            Properties
          </span>
        </h2>

        {/* TABS */}
        <div className="flex flex-wrap gap-3 mt-8">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              
              ${
                activeTab === tab
                  ? "bg-[var(--primary)] text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }
              
              `}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {data[activeTab].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative w-full h-80">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50"></div>

              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5 text-white">

                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white flex items-center gap-1 transition-all duration-300 hover:translate-x-1"
                >
                  {item.location}
                </a>

                {/* LINE ANIMATION */}
                <div className="mt-3 h-[2px] w-10 bg-[var(--primary)] transition-all duration-500 group-hover:w-full"></div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}