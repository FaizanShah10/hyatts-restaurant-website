import { Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Visit = () => {

    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    persons: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    // You can later send this data to a backend or API
    alert("Reservation submitted!");
  };

  return (
    <section id="reservation" className="bg-linear-to-b from-black via-zinc-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <p className="text-amber-500 uppercase inter-regular tracking-widest mb-2 text-sm">
          Visit Us Today
        </p>
        <h2 className="text-4xl md:text-5xl mb-4 inter-bold">
          Ready to Experience <span className="text-amber-500">Unforgettable</span> Taste?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 inter-regular">
          Reserve your table now and discover why Hyatt's Restaurant is Abbottabad's favorite dining destination
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto inter-regular">
          {/* Location */}
          <div className="bg-zinc-900 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-amber-500 text-2xl mb-4"><MapPin /></span>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-gray-400">
              Jadoon Plaza Phase 1<br />
              Mandian, Abbottabad
            </p>
          </div>

          {/* Call Us */}
          <div className="bg-zinc-900 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-amber-500 text-2xl mb-4"><Phone /></span>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-amber-500">(0992) 339628</p>
          </div>

          {/* Hours */}
          <div className="bg-zinc-900 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="text-amber-500 text-2xl mb-4"><Clock /></span>
            <h3 className="font-semibold text-lg mb-2">Hours</h3>
            <p className="text-gray-400">Open Daily<br />Closes 11:55 PM</p>
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-500 cursor-pointer text-black font-semibold px-8 py-2.5 rounded-xl hover:bg-amber-400 transition">
            Reserve Your Table
          </button>
          <button className="border cursor-pointer border-amber-500 text-amber-500 font-semibold px-8 py-2.5 rounded-xl hover:bg-amber-500 hover:text-black transition">
            View Our Menu
          </button>
        </div> */}
      </div>

      <form
          className="max-w-4xl mt-10 mx-auto bg-zinc-900 p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Phone Number"
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <input
            type="number"
            name="persons"
            value={formData.persons}
            onChange={handleChange}
            placeholder="Number of Persons"
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          {/* Submit Button spans full width */}
          <button
            type="submit"
            className="bg-amber-500 text-black cursor-pointer font-semibold px-8 py-2.5 rounded-xl hover:bg-amber-400 transition md:col-span-2"
          >
            Reserve My Table
          </button>
        </form>
    </section>
  );
};

export default Visit;
