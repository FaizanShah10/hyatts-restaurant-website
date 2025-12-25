import React, { useState } from "react";

const CATEGORIES = [
  "ALL",
  "APPETIZERS",
  "ENTREES",
  "DESSERTS",
  "BEVERAGES",
];

const MENU_ITEMS = [
  {
    id: 1,
    title: "Roasted Duck Breast",
    subtitle: "With Cherry Glaze",
    category: "ENTREES",
    image: "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Um9hc3RlZCUyMER1Y2slMjBCcmVhc3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Chocolate Lava Cake",
    subtitle: "With Raspberry Coulis",
    category: "DESSERTS",
    image: "https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY29sYXRlJTIwTGF2YSUyMENha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Hand-Cut Truffle",
    subtitle: "Pasta",
    category: "ENTREES",
    image: "https://images.unsplash.com/photo-1642354609876-5386fea5e7fc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VHJ1ZmZsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Crispy Pork Belly",
    subtitle: "With Apple Chutney",
    category: "ENTREES",
    image: "https://images.unsplash.com/photo-1642354609876-5386fea5e7fc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VHJ1ZmZsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Crispy Pork Belly",
    subtitle: "With Lemon-Dill Sauce",
    category: "ENTREES",
    image: "https://images.unsplash.com/photo-1642354609876-5386fea5e7fc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VHJ1ZmZsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Pan-Seared Halibut",
    subtitle: "With Lemon-Dill Sauce",
    category: "ENTREES",
    image: "https://images.unsplash.com/photo-1611657366409-55549160be82?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlzaCUyMGRpc2h8ZW58MHx8MHx8fDA%3D",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems =
    activeCategory === "ALL"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="bg-linear-to-b from-zinc-900 via-black to-zinc-900 text-white py-20 px-6 lg:px-16">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl inter-semibold font-semibold tracking-wide">
          Our Menu
        </h2>
        <p className="mt-3 inter-regular text-white/60">
          Crafted dishes, premium ingredients
        </p>
      </div>

      {/* ================= CATEGORY TABS ================= */}
      <div className="flex flex-wrap justify-center gap-10 mb-14 text-sm tracking-widest">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative pb-2 inter-medium cursor-pointer transition-all duration-300
              ${
                activeCategory === cat
                  ? "text-amber-500"
                  : "text-white/60 hover:text-white"
              }
            `}
          >
            {cat}
            {activeCategory === cat && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-500" />
            )}
          </button>
        ))}
      </div>

      {/* ================= MENU GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group border border-amber-500 rounded-xl p-6 transition-all duration-300 hover:bg-black/30"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="text-center mt-6">
              <h3 className="uppercase inter-medium tracking-wide text-lg">
                {item.title}
              </h3>
              <p className="text-amber-500 inter-regular text-sm mt-1 uppercase">
                {item.subtitle}
              </p>

              <button className="mt-6 inter-medium text-xs tracking-widest uppercase text-white/70 hover:text-white transition">
                View Item
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= VIEW FULL MENU ================= */}
      <div className="mt-20 text-center">
        <button
          className="px-8 py-3 border rounded-xl inter-regular cursor-pointer border-amber-500 text-amber-500 uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all duration-300"
        >
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menu;
