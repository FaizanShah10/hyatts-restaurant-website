import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 lg:px-20 pt-20 pb-10 font-inter">
      
      {/* ================= TOP GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* ================= BRAND ================= */}
        <div>
          <div className="mb-6">
            <h2 className="text-3xl inter-semibold tracking-wide text-amber-500">
              HYATT'S
            </h2>
            <p className="text-xs inter-medium tracking-widest text-amber-500 mt-1">
              RESTAURANT
            </p>
          </div>

          <p className="text-sm inter-regular text-white/70 leading-relaxed max-w-xs">
            Premium dining experience in the heart of Abbottabad.
          </p>

          <p className="text-sm inter-regular text-white/70 mt-4">
            Fast Food • Desi Food • Rooftop Dining • Rooms Available.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-amber-500 hover:text-black transition">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-amber-500 hover:text-black transition">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-amber-500 hover:text-black transition">
              <FaWhatsapp />
            </div>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg inter-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-white/70 inter-regular">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Rooms</li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="text-lg inter-semibold mb-6">Our Services</h3>
          <ul className="space-y-4 inter-regular text-sm text-white/70">
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Desi Cuisine
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Fast Food
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Rooftop Dining
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Private Rooms
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Dine-in & Takeaway
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-lg inter-semibold mb-6">Contact Us</h3>

          <ul className="space-y-5 text-sm inter-regular text-white/70">
            <li className="flex items-start gap-3">
              <FiMapPin className="text-amber-500 mt-1" />
              <span>
                56QM+CP, Abbottabad-Mansehra Rd <br />
                Mandian, Abbottabad
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FiPhone className="text-amber-500" />
              (0992) 339628
            </li>

            <li className="flex items-center gap-3">
              <FiClock className="text-amber-500" />
              Open — Closes 11:55 PM
            </li>
          </ul>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-white/20 mt-16 pt-6 text-center text-xs inter-regular text-white/50">
        © {new Date().getFullYear()} Hyatt’s Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
