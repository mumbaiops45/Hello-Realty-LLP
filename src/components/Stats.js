

export default function Stats() {
  const stats = [
    { number: "500+", label: "Properties" },
    { number: "1200+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Locations" },
  ];

  return (
    <section className="w-full py-6 bg-black">
      <div className=" mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-sm border hover:shadow-md transition-all duration-300"
            >

              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)]">
                {item.number}
              </h2>

              <p className="mt-2 text-gray-600 font-medium">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}