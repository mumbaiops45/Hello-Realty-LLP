"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

export default function FeaturedProperties({ hide = true }) {

  const tabs = ["Apartments", "Villas", "Commercial", "Rentals"];

  const data = {
    Apartments: [
      {
        name: "Skyline Apartment",
        location: "Powai, Mumbai",
        image: "/Home/Properties/Skyline Apartment.jpeg",
        description:
          "Skyline Apartment offers premium urban living with spacious interiors, modern amenities, and breathtaking skyline views. Located in Powai, it provides excellent connectivity to business hubs, schools, and entertainment zones.",
      },
      {
        name: "Urban Heights",
        location: "Andheri, Mumbai",
        image: "/Home/Properties/Urban Heights.jpeg",
        description:
          "Urban Heights is designed for modern families seeking comfort and convenience. The property features elegant architecture, secure surroundings, and easy access to metro stations and shopping centers.",
      },
      {
        name: "City View Flat",
        location: "Thane, Mumbai",
        image: "/Home/Properties/City View Flat.jpeg",
        description:
          "City View Flat combines luxury and affordability with beautifully designed living spaces and scenic city views. Perfect for families looking for peaceful yet connected living.",
      },
      {
        name: "Elite Residency",
        location: "Worli, Mumbai",
        image: "/Home/Properties/Elite Residency.jpeg",
        description:
          "Elite Residency delivers a sophisticated lifestyle experience with premium facilities, high-end interiors, and close proximity to Mumbai’s prime commercial areas.",
      },
    ],

    Villas: [
      {
        name: "Luxury Sea Villa",
        location: "Goa",
        image: "/Home/pexels-shox-29174529.jpg",
        description:
          "Luxury Sea Villa is a premium beachfront property offering panoramic sea views, private gardens, and luxurious interiors crafted for an exclusive lifestyle.",
      },
      {
        name: "Royal Villa",
        location: "Lonavala",
        image: "/Home/Properties/Royal Villa.jpeg",
        description:
          "Royal Villa blends elegance and comfort with spacious living areas, modern architecture, and serene surroundings in the hills of Lonavala.",
      },
      {
        name: "Green Valley Villa",
        location: "Pune",
        image: "/Home/Properties/Green Valley Villa.jpeg",
        description:
          "Green Valley Villa provides a peaceful retreat surrounded by lush greenery while still offering easy access to Pune city conveniences.",
      },
      {
        name: "Hilltop Mansion",
        location: "Alibaug",
        image: "/Home/Properties/Hilltop Mansion.jpeg",
        description:
          "Hilltop Mansion offers a luxurious getaway with stunning hilltop views, spacious rooms, and world-class amenities for premium living.",
      },
    ],

    Commercial: [
      {
        name: "Business Tower",
        location: "BKC, Mumbai",
        image: "/Home/Properties/Business Tower.jpeg",
        description:
          "Business Tower is a premium commercial property located in Mumbai’s financial district, offering modern office spaces and top-class infrastructure.",
      },
      {
        name: "Tech Park",
        location: "Hinjewadi, Pune",
        image: "/Home/Properties/Tech Park.jpeg",
        description:
          "Tech Park is designed for innovative businesses with smart office layouts, high-speed connectivity, and modern workspaces.",
      },
      {
        name: "Corporate Hub",
        location: "Lower Parel",
        image: "/Home/Properties/Corporate Hub.jpeg",
        description:
          "Corporate Hub provides an inspiring professional environment with excellent accessibility and premium office facilities.",
      },
      {
        name: "Office Plaza",
        location: "Navi Mumbai",
        image: "/Home/Properties/Office Plaza.jpeg",
        description:
          "Office Plaza offers flexible commercial spaces with modern infrastructure ideal for startups and growing enterprises.",
      },
    ],

    Rentals: [
      {
        name: "Rental Studio",
        location: "Andheri West",
        image: "/Home/Properties/Rental Studio.jpeg",
        description:
          "Rental Studio is a compact and stylish property perfect for professionals and students seeking affordable city living.",
      },
      {
        name: "Budget Flat",
        location: "Kandivali",
        image: "/Home/Properties/Budget Flat.jpeg",
        description:
          "Budget Flat offers comfortable living spaces with essential amenities at an affordable rental price.",
      },
      {
        name: "Family Apartment",
        location: "Borivali",
        image: "/Home/Properties/Family Apartment.jpeg",
        description:
          "Family Apartment is thoughtfully designed for families with spacious rooms, secure surroundings, and nearby schools and parks.",
      },
      {
        name: "City Rental Home",
        location: "Chembur",
        image: "/Home/Properties/City Rental Home.jpeg",
        description:
          "City Rental Home combines convenience and comfort with excellent connectivity and modern interiors for urban living.",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Apartments");

  const [selectedProperty, setSelectedProperty] = useState(
    data["Apartments"][0]
  );

  return (
    <section className="w-full py-20 bg-[#0B1D3A]">

      <div className="mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-white pl-4 py-1 border-l-2">
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
              onClick={() => {
                setActiveTab(tab);
                setSelectedProperty(data[tab][0]);
              }}
              className={`flex-1 px-5 py-2 rounded-md text-sm font-medium transition-all duration-300
              
              ${activeTab === tab
                  ? "bg-[var(--primary)] text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
                }
              
              cursor-pointer`}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {data[activeTab].map((item, index) => (
            <div
             onClick={(e) => {
                    if (!hide) {
                      e.preventDefault();
                      setSelectedProperty(item);
                    }
                  }}
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
              <div className="absolute inset-0 p-5 text-white flex flex-col justify-end">

                <div>

                  <h3 className="text-lg font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-white/80 mt-1">
                    {item.location}
                  </p>

                </div>

                {/* KNOW MORE BUTTON */}
                <Link
                  href={hide ? "/properties" : "#"}
                 
                  className="mt-6 flex items-center justify-end gap-3 w-full text-white text-sm font-medium transition-all duration-300 cursor-pointer group/btn"
                >
                  <span className="group-hover/btn:translate-x-1 transition-all duration-300">
                    Know More
                  </span>

                  <HiOutlineArrowRight className="transition-all duration-300 group-hover/btn:translate-x-1" />
                </Link>
                {/* LINE */}
                <div className="mt-3 h-[2px] w-10 bg-[var(--primary)] transition-all duration-500 group-hover:w-full"></div>

              </div>

            </div>
          ))}

        </div>

        {/* PROPERTY DETAILS */}
        <div className={`${hide ? "hidden" : "block"} grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20 bg-black/10 rounded-xl overflow-hidden`}>

          {/* IMAGE */}
          <div className="relative justify-self-center w-[60%] h-[350px] md:h-[400px]">

            <Image
              src={selectedProperty.image}
              alt={selectedProperty.name}
              fill
              className="object-fit"
            />

          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-12">

            <p className="text-[var(--primary)] font-medium mb-3">
              Featured Property
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {selectedProperty.name}
            </h3>

            <p className="text-gray-500 mb-4">
              {selectedProperty.location}
            </p>

            <p className="text-gray-400 leading-relaxed">
              {selectedProperty.description}
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-90 transition-all duration-300"
            >
              Contact Now
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}