export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "1. Acceptance of",
      highlight: "Terms",
      content: [
        "By accessing this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions and all applicable laws and regulations.",
      ],
    },

    {
      title: "2. Website",
      highlight: "Services",
      list: [
        "Property Listings",
        "Property Inquiry Forms",
        "Property Consultation",
        "Site Visit Scheduling",
        "Real Estate Assistance",
      ],
    },

    {
      title: "3. User",
      highlight: "Responsibilities",
      list: [
        "Provide accurate and genuine information when submitting forms",
        "Avoid using the website for unlawful activities",
        "Not attempt to hack, damage, or misuse the platform",
        "Respect intellectual property and website content",
      ],
    },

    {
      title: "4. Property",
      highlight: "Information",
      content: [
        "We strive to ensure all property information, pricing, availability, and images are accurate. However, we do not guarantee the completeness or accuracy of property details at all times.",
        "Property availability and pricing may change without prior notice.",
      ],
    },

    {
      title: "5. Intellectual",
      highlight: "Property",
      content: [
        "All website content including text, images, logos, designs, graphics, and branding are the property of Welcome Realty LLP unless otherwise stated.",
        "Unauthorized copying, reproduction, modification, or distribution of any content is strictly prohibited.",
      ],
    },

    {
      title: "6. Third Party",
      highlight: "Links",
      content: [
        "Our website may contain links to third party websites or external property platforms. We are not responsible for their content, services, policies, or privacy practices.",
      ],
    },

    {
      title: "7. Limitation of",
      highlight: "Liability",
      content: [
        "Welcome Realty LLP shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from the use of this website or reliance upon any information contained herein.",
      ],
    },

    {
      title: "8. Privacy",
      highlight: "Policy",
      content: [
        "By using this website, you also agree to our Privacy Policy regarding the collection, storage, and use of personal information.",
      ],
    },

    {
      title: "9. Changes to",
      highlight: "Terms",
      content: [
        "We reserve the right to modify, update, or replace these Terms & Conditions at any time without prior notice.",
        "Continued use of the website after any changes indicates your acceptance of the revised terms.",
      ],
    },

    {
      title: "10. Governing",
      highlight: "Law",
      content: [
        "These Terms & Conditions shall be governed and construed in accordance with the laws of India.",
        "Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts located in Thane, Maharashtra.",
      ],
    },

    {
      title: "11. Contact",
      highlight: "Us",
      content: [
        "If you have any questions regarding these Terms & Conditions, please contact us using the details below.",
        "Company Name: Welcome Realty LLP",
        "Email: welcomerealty.llp@gmail.com",
        "Phone: +91 70216 25739",
        "Address: Office No. 530, Lodha Signet A, Kolshet Road, Thane West, 400607",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 text-black min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <span className="text-[var(--primary)] uppercase tracking-[4px] text-sm font-semibold">
            Legal Information
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Terms &{" "}
            <span className="text-[var(--primary)]">
              Conditions
            </span>
          </h1>

          <div className="w-24 h-[3px] bg-[var(--primary)] mt-2"></div>

          <p className="text-black text-lg mt-4">
            Last Updated: June 2, 2026
          </p>
        </div>

        {/* Intro */}
        <div className="mb-10">
          <p className="text-black leading-8 text-lg">
            Welcome to Welcome Realty LLP. By accessing, browsing, or using
            our website and services, you agree to comply with and be bound
            by these Terms & Conditions. These terms govern your use of our
            website, property listings, inquiry forms, and related real
            estate services.
          </p>

          <p className="text-black leading-8 text-lg mt-6">
            Please read these Terms & Conditions carefully before using our
            website. If you do not agree with any part of these terms, you
            should discontinue use of the website and related services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-0">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold mb-0">
                {section.title}{" "}
                <span className="text-[var(--primary)]">
                  {section.highlight}
                </span>
              </h2>

              <div className="bg-white/5 border border-white/10 rounded-3xl px-8 pb-8 pt-4 mt-0">
                {/* Paragraphs */}
                {section.content &&
                  section.content.map((text, i) => (
                    <p
                      key={i}
                      className={`text-black leading-8 ${
                        i !== 0 ? "mt-5" : ""
                      }`}
                    >
                      {text}
                    </p>
                  ))}

                {/* List */}
                {section.list && (
                  <ul className="space-y-3 text-black">
                    {section.list.map((item, i) => (
                      <li key={i}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Agreement */}
        <div className="border-t border-white/10 pt-10 mt-10">
          <h2 className="text-3xl font-bold mb-0">
            User{" "}
            <span className="text-[var(--primary)]">
              Agreement
            </span>
          </h2>

          <p className="text-black leading-8 mt-4">
            By accessing or using this website, you acknowledge that you
            have read, understood, and agreed to be bound by these Terms &
            Conditions and all applicable laws and regulations.
          </p>
        </div>
      </div>
    </section>
  );
}