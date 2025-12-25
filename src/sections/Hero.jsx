import { Star, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920"
        alt="Rooftop Dining"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          
          {/* Badge */}
          <div className="mb-6 inter-regular inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/40 px-5 py-2 text-sm text-amber-400 backdrop-blur">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            Premium Rooftop Dining Experience
          </div>

          {/* Heading */}
          <h1 className="text-4xl playfair-bold font-bold leading-tight sm:text-5xl md:text-7xl">
            Where <span className="text-amber-400">Taste Meets</span>
            <br />
            Elegance
          </h1>

          {/* Subtitle */}
          <p className="mt-6 inter-regular text-sm text-white/80 sm:text-base">
            Fast Food • Desi Food • Rooftop Dining • Rooms
          </p>

          {/* Buttons */}
          <div className="mt-10 inter-regular flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-full cursor-pointer bg-amber-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-amber-400">
              Reserve Your Table
            </button>

            <button className="flex items-center gap-2 cursor-pointer rounded-full border border-amber-500 px-8 py-3 text-sm font-semibold text-amber-400 transition hover:bg-amber-500/10">
              <Phone size={18} />
              Call Now
            </button>
          </div>

          {/* Open Status */}
          <div className="mt-8 text-xs inter-regular text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2  rounded-full bg-amber-400" />
              Open Now • Closes 11:55 PM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
