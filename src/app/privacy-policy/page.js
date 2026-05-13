export default function PrivacyPolicyPage() {

  const sections = [
    {
      title: "1. Information We",
      highlight: "Collect",
      cards: [
        {
          heading: "Personal Information",
          list: [
            "Full Name",
            "Email Address",
            "Phone Number",
            "City / Location",
            "Property Preferences",
            "Any details submitted through forms",
          ],
        },

        {
          heading: "Automatically Collected Information",
          list: [
            "IP Address",
            "Browser Type",
            "Device Information",
            "Pages Visited",
            "Time Spent on Website",
            "Cookies & Analytics Data",
          ],
        },
      ],
    },

    {
      title: "2. How We Use Your",
      highlight: "Information",
      list: [
        "Respond to inquiries",
        "Help users find properties",
        "Schedule property visits",
        "Improve website experience",
        "Send property updates",
        "Provide customer support",
        "Maintain website security",
        "Prevent fraud & misuse",
      ],
      grid: true,
    },

    {
      title: "3. Property Inquiry &",
      highlight: "Contact Forms",
      content: [
        "When you submit a property inquiry form, your information may be securely stored and shared only with authorized sales representatives or property partners for assisting you with your requested services.",
        "We do not sell your personal information to third parties.",
      ],
    },

    {
      title: "4. Cookies",
      highlight: "Policy",
      content: [
        "Our website may use cookies and similar technologies to improve website performance, remember preferences, analyze traffic, and enhance user experience.",
        "You can disable cookies through your browser settings if you prefer.",
      ],
    },

    {
      title: "5. Third-Party",
      highlight: "Services",
      list: [
        "Google Analytics",
        "Google Maps",
        "CRM Systems",
        "Hosting Providers",
        "Email Communication Tools",
      ],
    },

    {
      title: "6. Data Protection &",
      highlight: "Security",
      content: [
        "We implement appropriate security measures to protect your personal information against unauthorized access, misuse, alteration, or disclosure.",
        "However, no online platform can guarantee complete security.",
      ],
    },

    {
      title: "7. Your",
      highlight: "Rights",
      list: [
        "Access your personal data",
        "Correct inaccurate information",
        "Delete your information",
        "Stop receiving marketing communications",
      ],
    },

    {
      title: "8. External",
      highlight: "Links",
      content: [
        "Our website may contain links to third-party websites or property listings. We are not responsible for the privacy practices of those websites.",
      ],
    },

    {
      title: "9. Children’s",
      highlight: "Privacy",
      content: [
        "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
      ],
    },

    {
      title: "10. Changes to This",
      highlight: "Policy",
      content: [
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated revision date.",
      ],
    },

    {
      title: "11. Contact",
      highlight: "Us",
      content: [
        "Email: info@yourwebsite.com",
        "Phone: +91 XXXXX XXXXX",
        "Address: Your Office Address Here",
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
            Privacy{" "}
            <span className="text-[var(--primary)]">
              Policy
            </span>
          </h1>

          <div className="w-24 h-[3px] bg-[var(--primary)] mt-2"></div>

          <p className="text-black text-lg mt-4">
            Last Updated: May 12, 2026
          </p>

        </div>

        {/* Intro */}
        <div className="mb-10">

          <p className="text-black leading-8 text-lg">
            Welcome to our real estate website. Your privacy is important to us,
            and we are committed to protecting the personal information you
            share while using our platform.
          </p>

          <p className="text-black leading-8 text-lg mt-6">
            This Privacy Policy explains how we collect, use, store, and
            protect your information when you visit our website or use our
            services.
          </p>

        </div>

        {/* MAPPED SECTIONS */}
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

                {/* CONTENT */}
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

                {/* LIST */}
                {section.list && (
                  <ul
                    className={`text-black ${
                      section.grid
                        ? "grid md:grid-cols-2 gap-4"
                        : "space-y-3"
                    }`}
                  >
                    {section.list.map((item, i) => (
                      <li key={i}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CARDS */}
                {section.cards &&
                  section.cards.map((card, i) => (
                    <div
                      key={i}
                      className={`bg-white/5 border border-white/10 rounded-3xl p-8 ${
                        i !== 0 ? "mt-6" : ""
                      }`}
                    >

                      <h3 className="text-2xl font-semibold mb-4">
                        {card.heading}
                      </h3>

                      <ul className="space-y-3 text-black">
                        {card.list.map((item, j) => (
                          <li key={j}>
                            • {item}
                          </li>
                        ))}
                      </ul>

                    </div>
                  ))}

              </div>

            </div>
          ))}

        </div>

        {/* Consent */}
        <div className="border-t border-white/10 pt-10 mt-10">

          <h2 className="text-3xl font-bold mb-0">
            User{" "}
            <span className="text-[var(--primary)]">
              Consent
            </span>
          </h2>

          <p className="text-black leading-8 mt-4">
            By using this website, you consent to the terms outlined in this
            Privacy Policy.
          </p>

        </div>

      </div>

    </section>
  );
}