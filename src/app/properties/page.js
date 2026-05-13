import React from 'react'
import FeaturedProperties from '@/components/FeaturedProperties'
import FAQSection from '@/components/FAQ'
import CTASection from '@/components/CTA'

const Properties = () => {
    return (
        <>
            <div className="w-full bg-white py-16 px-6 md:px-16 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-black">
                    <span className="text-[var(--primary)]">Properties</span> Listing
                </h1>
            </div>
            <FeaturedProperties hide={false} />
            <FAQSection />
            <CTASection />
        </>
    )
}

export default Properties