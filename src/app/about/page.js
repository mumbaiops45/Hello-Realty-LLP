import React from 'react'
import ServicesGrid from '@/components/Services'
import PropertyExperts from '@/components/AgentExpert'
import Testimonials from '@/components/Testimonial'
import FAQSection from '@/components/FAQ'
import CTASection from '@/components/CTA'


function About() {
    return (
        <>
            <div className="w-full bg-black py-16 px-6 md:px-16 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                    <span className="text-[var(--primary)]">About</span> Us
                </h1>
            </div>
            <div className="abuot w-full bg-white py-14 px-6 md:px-16">

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                    {/* LEFT IMAGE */}
                    <div className="w-full h-[350px] md:h-[360px] overflow-hidden rounded-2xl">
                        <img
                            src="/Home/pexels-shox-29174529.jpg"
                            alt="About Us"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex flex-col justify-center">

                        {/* HEADING */}
                        <h2 className=" font-bold mb-5 leading-snug">
                            <span className="text-black">Building </span>
                            <span className="text-[var(--primary)]">Trust</span>{" "}
                            <span className="text-black">in Real Estate</span>
                        </h2>

                        {/* TEXT */}
                        <p className="text-gray-600 leading-relaxed">
                            We are a <strong className="text-black">premium real estate consultancy</strong> helping clients find
                            the best properties with complete transparency and trust. Our goal is to make
                            property buying and selling <strong className="text-black">simple, safe, and profitable</strong>.
                            <br /><br />
                            With years of experience in the market, we provide expert guidance in
                            <strong className="text-[var(--primary)]"> property selection, investment planning, and legal support</strong>.
                        </p>

                    </div>

                </div>

            </div>
            <ServicesGrid
                sectionBg="bg-black"
                cardBg="bg-white/10 backdrop-blur-md border border-white/20"
                textColor="text-white"
                descColor="text-white/80"
                headingMode="dark"
            />
            <PropertyExperts />
            <Testimonials />
            <FAQSection />
            <CTASection />

        </>
    )
}

export default About