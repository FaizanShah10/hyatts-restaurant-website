import React from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "Restaurant Owner",
    text: "The experience was absolutely phenomenal. Every dish felt carefully crafted and full of soul.",
  },
  {
    name: "Emily Carter",
    role: "Food Critic",
    text: "A perfect balance of presentation, flavor, and atmosphere. This place understands dining.",
  },
  {
    name: "Michael Brown",
    role: "Frequent Guest",
    text: "From starters to desserts, everything exceeded expectations. Truly memorable.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f6f7fb] py-24 px-6">
      
      {/* ================= HEADER ================= */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl inter-semibold text-gray-900">
          Words of Love From Our Clients
        </h2>
        <p className="mt-4 text-gray-500 text-sm inter-regular md:text-base">
          Real stories from people who experienced our food and service
        </p>
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-xl
              p-8
              text-center
              shadow-sm
              hover:shadow-md
              transition-shadow
              duration-300
            "
          >
            {/* STARS */}
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-600 inter-regular text-sm leading-relaxed">
              “{item.text}”
            </p>

            {/* NAME */}
            <div className="mt-6">
              <p className="inter-semibold text-gray-900">
                {item.name}
              </p>
              <p className="text-xs inter-regular text-gray-400 mt-1">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= PAGINATION DOTS (STATIC) ================= */}
      <div className="flex justify-center gap-2 mt-12">
        <span className="w-2 h-2 rounded-full bg-gray-900" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
      </div>

    </section>
  );
};

export default TestimonialsSection;
