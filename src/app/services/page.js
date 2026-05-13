import React from 'react'
import ServicesGrid from '@/components/Services'
import FAQSection from '@/components/FAQ'
import CTASection from '@/components/CTA'

const Services = () => {
    return (
        <>
            <div className="w-full bg-[#0B1D3A] py-16 px-6 md:px-16 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                    <span className="text-[var(--primary)]">Our</span> Services
                </h1>
            </div>
            <ServicesGrid />
            <FAQSection />
            <CTASection />
        </>
    )
}

export default Services