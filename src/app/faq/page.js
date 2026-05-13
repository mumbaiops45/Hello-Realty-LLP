import React from 'react'
import FAQSection from '@/components/FAQ'
import CTASection from '@/components/CTA'
const FAQ = () => {
    return (
        <>
            <div className="relative w-full bg-[#0B1D3A] py-20 px-6 md:px-16 overflow-hidden">

                {/* BG GLOW */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--primary)]/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--primary)]/10 blur-3xl rounded-full"></div>

                <div className="relative flex items-center justify-center">

                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center leading-tight">Your's {""}
                        <span className="text-[var(--primary)]">
                            Frequently Asked Questions.
                        </span>{" "}
                        
                    </h1>

                </div>

            </div>
            <FAQSection />
            <CTASection />
        </>
    )
}

export default FAQ