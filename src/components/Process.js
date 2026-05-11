"use client";

const steps = [
    {
        number: "01",
        title: "Search Property",
        description:
            "Explore verified listings based on your budget, location, and preferences to find the perfect property.",
    },
    {
        number: "02",
        title: "Schedule Visit",
        description:
            "Book a site visit easily and inspect shortlisted properties with our real estate experts.",
    },
    {
        number: "03",
        title: "Documentation",
        description:
            "We assist you with legal paperwork, verification, and smooth documentation process.",
    },
    {
        number: "04",
        title: "Ownership Transfer",
        description:
            "Complete hassle-free ownership transfer with full legal support and transparency.",
    },
];

export default function Process() {
    return (
        <section className="w-full bg-black py-24 px-6 lg:px-12">

            {/* Heading */}
            <div className=" mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white pl-4 py-1 border-l-2">
                    Our <span className="text-[var(--primary)]">Process</span>
                </h2>
                <p className="text-white/60 mt-2">
                    From search to ownership in just a few easy steps
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl bg-white/10 border border-white/10 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
                    >

                        {/* Number */}
                        <div className="text-[var(--primary)]/50 text-4xl font-bold mb-6">
                            {step.number}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-white mb-3">
                            {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/60 leading-relaxed">
                            {step.description}
                        </p>

                        {/* Bottom line animation */}
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full"></div>

                    </div>
                ))}

            </div>
        </section>
    );
}