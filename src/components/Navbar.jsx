import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Menu",
  "Reservation",
  "Gallery",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔹 scroll handler
  const handleNavigate = (item) => {
    const id = item.toLowerCase(); // "Home" → "home"
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActive(item);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto inter-regular flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <div
          onClick={() => handleNavigate("Home")}
          className="text-2xl font-semibold text-white tracking-wide cursor-pointer"
        >
          Hyatts
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white/80">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavigate(item)}
              className="relative cursor-pointer text-xs uppercase tracking-wider hover:text-white transition"
            >
              {item}
              {active === item && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-amber-500 rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavigate("Reservations")}
            className="rounded-xl bg-amber-500 px-6 py-2 cursor-pointer text-sm font-medium text-black hover:bg-amber-400 transition"
          >
            Reserve Your Table
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden backdrop-blur-lg h-screen bg-black/80 border-t border-white/10">
          <ul className="flex flex-col gap-6 px-6 py-6 text-white/90">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleNavigate(item)}
                className="text-lg font-medium inter-regular cursor-pointer"
              >
                {item}
              </li>
            ))}
            <button
              onClick={() => handleNavigate("Reservations")}
              className="mt-4 rounded-xl bg-amber-500 py-3 text-black inter-medium"
            >
              Reserve Your Table
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
