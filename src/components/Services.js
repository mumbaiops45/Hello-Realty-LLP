"use client";

const services = [
  {
    title: "Property Buying Assistance",
    desc: "We help you find verified properties based on your budget, location, and investment goals with expert guidance and negotiation support.",
  },
  {
    title: "Home Loan Support",
    desc: "Get complete assistance in home loans, EMI planning, eligibility checks, and smooth bank approvals with trusted partners.",
  },
  {
    title: "Site Visit Coordination",
    desc: "Schedule and manage hassle-free property visits with our dedicated real estate experts at your convenience.",
  },
  {
    title: "Legal Documentation",
    desc: "End-to-end support in agreements, registration, ownership transfer, and legal verification for safe transactions.",
  },
  {
    title: "Investment Advisory",
    desc: "Get expert insights on high-growth properties, ROI analysis, and smart real estate investment planning.",
  },
  {
    title: "Verified Listings",
    desc: "Access only 100% verified and trusted property listings ensuring transparency and security in every deal.",
  },
];

export default function ServicesGrid({
  sectionBg = "bg-gray-50",
  cardBg = "bg-white",
  textColor = "text-black",
  descColor = "text-gray-600",
  headingMode = "light", // light | dark
}) {
  return (
    <section className={`${sectionBg} py-20 px-6 md:px-16`}>

      {/* Heading */}
      <h2
        className={`
          text-3xl md:text-4xl font-bold mb-12 border-l-4 pl-4 py-1
          ${headingMode === "dark"
            ? "text-white border-white"
            : "text-black border-[var(--primery)]"
          }
        `}
      >
        Our Real Estate <span className="text-[var(--primary)]">
            Services
          </span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <div
            key={index}
            className={`
              ${cardBg}
              rounded-2xl
              overflow-hidden
              shadow-md
              group
              hover:-translate-y-2
              hover:shadow-xl
              transition-all duration-300
              flex flex-col
              min-h-[240px]
            `}
          >

            {/* Content */}
            <div className="p-6 md:p-8 flex-1">
              <p className={`text-sm md:text-base leading-relaxed ${descColor}`}>
                {item.desc}
              </p>
            </div>

            {/* Bottom Title Bar */}
            <div
              className={`
                px-5 py-4 flex items-center justify-center
                relative overflow-hidden
                ${headingMode === "dark"
                  ? "bg-white/10 text-white"
                  : "bg-black text-white"
                }
              `}
            >
              <h3 className="text-sm md:text-base font-semibold z-10">
                {item.title}
              </h3>

            
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}