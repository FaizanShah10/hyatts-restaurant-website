import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24 px-6">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
        
        {/* LEFT: Images */}
        <div className="relative">
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Desi Food"
            className="rounded-2xl object-cover w-full md:h-[500px] h-[380px]"
          />

          {/* Floating Image */}
          <img
            src="https://images.unsplash.com/photo-1628294896516-344152572ee8?q=80&w=400"
            alt="Food Closeup"
            className="absolute -bottom-10 right-6 w-40 h-40 rounded-xl object-cover border border-white/20 bg-black"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="text-white inter-regular">
          {/* Small Label */}
          <p className="mb-4 text-sm  tracking-widest text-amber-400">
            ABOUT HYATT&apos;S
          </p>

          {/* Heading */}
          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
            A Culinary <span className="text-amber-400">Heritage</span>
            <br />
            Since Day One
          </h2>

          {/* Description */}
          <p className="mt-6 text-white/70 leading-relaxed">
            Located in the heart of Jadoon Plaza, Phase 1, Hyatt&apos;s Restaurant
            has become Abbottabad&apos;s premier destination for food lovers
            seeking authentic flavors and memorable dining experiences.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            We blend traditional Pakistani cuisine with modern fast food
            favorites, served in an elegant rooftop setting that captures the
            essence of fine dining while maintaining a warm, welcoming
            atmosphere.
          </p>

          {/* Stats */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/20 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-amber-400">100+</h3>
              <p className="mt-2 text-sm text-white/70">Menu Items</p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-amber-400">15+</h3>
              <p className="mt-2 text-sm text-white/70">Years Experience</p>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-4 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-3 text-sm font-semibold cursor-pointer text-black transition hover:bg-amber-400">
            Discover Our Story
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
