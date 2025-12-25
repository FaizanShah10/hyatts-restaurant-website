import {
  Utensils,
  Building2,
  DoorClosed,
  Hamburger,
} from "lucide-react";

const specialities = [
  {
    icon: Utensils,
    title: "Authentic Desi Food",
    description:
      "Traditional Pakistani flavors crafted with authentic spices and recipes passed down through generations",
  },
  {
    icon: Hamburger,
    title: "Premium Fast Food",
    description:
      "Gourmet burgers, crispy fries, and quick bites made with quality ingredients when you're on the go",
  },
  {
    icon: Building2,
    title: "Rooftop Experience",
    description:
      "Breathtaking views of Abbottabad skyline while you dine under the stars in a sophisticated ambiance",
  },
  {
    icon: DoorClosed,
    title: "Private Rooms",
    description:
      "Comfortable private dining rooms perfect for families, celebrations, and intimate gatherings",
  },
];

export default function Specialities() {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-6">
      
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-80
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

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm tracking-widest text-amber-400">
            OUR SPECIALITIES
          </p>

          <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            What Makes Us <span className="text-amber-400">Special</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            From authentic Desi flavors to quick bites and premium rooftop
            dining – we serve excellence
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {specialities.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-2xl
                border
                border-white/20
                bg-gradient-to-br
                from-white/5
                to-transparent
                p-8
                transition
                hover:border-amber-400/60
              "
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400/10">
                <item.icon className="h-6 w-6 text-amber-400" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
