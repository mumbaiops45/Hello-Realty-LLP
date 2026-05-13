"use client"
import {
    HiOutlineShieldCheck,
    HiOutlineHome,
    HiOutlineLightningBolt,
    HiOutlineSupport,
} from "react-icons/hi"
import { motion } from "framer-motion"

const features = [
    {
        icon: (
            <div className="p-2 rounded-full bg-[var(--primary)]/30">
                <HiOutlineHome className="text-4xl text-[var(--primary)]" />
            </div>
        ),
        title: "Premium Properties",
        description:
            "Handpicked luxury homes designed for modern living.",
    },

    {
        icon: (
            <div className="p-2 rounded-full bg-[var(--primary)]/30">
                <HiOutlineShieldCheck className="text-4xl text-[var(--primary)]" />
            </div>
        ),
        title: "Trusted Service",
        description:
            "Verified listings with transparent and secure deals.",
    },

    {
        icon: (
            <div className="p-2 rounded-full bg-[var(--primary)]/30">
                <HiOutlineLightningBolt className="text-4xl text-[var(--primary)]" />
            </div>
        ),
        title: "Fast Process",
        description:
            "Quick and smooth property buying experience.",
    },

    {
        icon: (
            <div className="p-2 rounded-full bg-[var(--primary)]/30">
                <HiOutlineSupport className="text-4xl text-[var(--primary)]" />
            </div>
        ),
        title: "24/7 Support",
        description:
            "Always available support for every step.",
    },
]

export default function WhyChooseUs() {
    return (
        <section className="relative w-full bg-gradient-to-t from-white to-black py-24 px-6 lg:px-12">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/Home/14370408_3840_2160_24fps.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Top Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-10">


                <div className="relative z-10 text-white">
                    <p className="text-sm inline-block p-2 rounded-full font-semibold uppercase tracking-[4px] mb-4 text-white bg-[var(--primary)]/50">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight pl-4 py-1 border-l-2">
                        We Deliver The Best Real Estate Experience
                    </h2>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((item, index) => (
                    <div
                        
                        key={index}
                        className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col"
                    >

                        {/* Icon */}
                        <motion.div
                         initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        viewport={{ once: true }}
                        className="mb-6 flex h-16 w-full items-center justify-center rounded-2xl text-3xl text-white transition-all duration-500 group-hover:scale-110">
                            {item.icon}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-2xl  font-bold text-black mb-4 transition-all duration-500">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed flex-1">
                            {item.description}
                        </p>

                        {/* Fixed Bottom Line */}
                        <div className="mt-8 flex justify-center">
                            <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[var(--primary)] to-black transition-all duration-500 group-hover:w-full"></div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}