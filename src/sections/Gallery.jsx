import { useState } from "react";
import { galleryImages } from "../data";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Food", "Rooms", "Rooftop"];

  return (
    <section id="gallery" className="relative overflow-hidden bg-black text-white py-20">
      
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            right-100
            top-60
            -translate-x-1/2
            -translate-y-1/2
            h-100
            w-100
            rounded-full
            bg-amber-500/20
            blur-[140px]
          "
        />
        <div
          className="
            absolute
            right-0
            bottom-0
            h-80
            w-80
            rounded-full
            bg-amber-500/20
            blur-[140px]
          "
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase inter-regular tracking-widest text-yellow-500 text-sm mb-2">
            Gallery Preview
          </p>
          <h2 className="text-4xl inter-semibold md:text-5xl font-bold">
            A Feast for the <span className="text-yellow-500">Eyes</span>
          </h2>
          <p className="text-gray-400 mt-4 inter-regular max-w-2xl mx-auto">
            Experience the ambiance, flavors, and elegance that define our
            restaurant
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 w-full max-w-3xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 inter-regular rounded-2xl cursor-pointer font-semibold transition ${
                  activeTab === tab
                    ? "bg-amber-500 text-black"
                    : "border-amber-500 border text-gray-300 hover:bg-amber-500/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          auto-rows-[180px] 
          gap-6
        "
        >
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.src}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button
            className="
            px-8 py-3 
            border border-amber-500 
            text-amber-500 
            font-semibold 
            rounded-2xl cursor-pointer 
            hover:bg-amber-500 
            hover:text-black 
            transition duration-300
          "
          >
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
