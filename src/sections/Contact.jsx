import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ThumbsUp,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-black
        text-white
        py-24
        px-6
        lg:px-20
      "
    >
      {/* ===== Gradient Glow Backgrounds ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* <div className="absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" /> */}
        <div className="absolute right-20 bottom-20 h-100 w-100 rounded-full bg-amber-500/20 blur-[120px]" />
      </div>

      {/* ===== Content Wrapper ===== */}
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* ===== LEFT: HEADING ===== */}
        <div>
          <h2 className="text-5xl sm:text-7xl font-semibold inter-bold tracking-tight leading-tighter">
            Get in <br className="hidden sm:block" /> touch<span className="text-amber-500">.</span>
          </h2>

          {/* Decorative dots */}
          <div className="mt-16 grid grid-cols-8 gap-4 max-w-xs opacity-40">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="h-1 w-1 rounded-full bg-white"
              />
            ))}
          </div>
        </div>

        {/* ===== RIGHT: CONTACT DETAILS ===== */}
        <div className="space-y-12">

          {/* Address */}
          <div className="flex gap-4">
            <MapPin className="text-amber-500 mt-1" />
            <div>
              <h4 className="inter-semibold text-lg">Address</h4>
              <p className="text-white/70 text-sm inter-regular mt-1">
                London <br />
                25 Wilton Road, Victoria, <br />
                London, SW1V 1LW
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <Phone className="text-amber-500 mt-1" />
            <div>
              <h4 className="inter-semibold text-lg">Phone</h4>
              <p className="text-white/70 inter-regular text-sm mt-1">
                +44 7551 450 400
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <Mail className="text-amber-500 mt-1" />
            <div>
              <h4 className="inter-semibold text-lg">Mail</h4>
              <p className="text-white/70 inter-regular text-sm mt-1">
                hello@baseone.uk
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex gap-4 items-start">
            <ThumbsUp className="text-amber-500 mt-1" />
            <div>
              <h4 className="inter-semibold text-lg">Follow Us</h4>
              <div className="flex gap-4 mt-4">
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 hover:text-black transition">
                  <FaLinkedinIn />
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 hover:text-black transition">
                  <FaTwitter />
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 hover:text-black transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
