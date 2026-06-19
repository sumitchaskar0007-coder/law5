import React, { useState } from "react";
import { contactAPI } from "../api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    try {
      setLoading(true);

      const res = await contactAPI.send(form);

      if (res.data.success) {
        setSuccess("Thank you! Your enquiry has been sent successfully.");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }

    } catch (err) {
      alert("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">

      <h2 className="text-3xl font-bold mb-10 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE — ADDRESS + MAP */}
        <div className="space-y-6">

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">📍 Our Address</h3>
            <p className="text-gray-600">
             
              Narhe,Pune<br />
              Maharashtra, India
            </p>

            <p className="mt-4 text-gray-700">
              📞 <strong>+91 84590 38579</strong>
            </p>

            <p className="mt-2 text-gray-700">
              ✉️ jadhavarlawcollege@gmail.com
            </p>
          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              title="map"
              className="w-full h-64 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.13710415687!2d73.80464127947376!3d18.44887904881133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953f2263c307%3A0x79aeb881437adebd!2sNarhe%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1781859970758!5m2!1sen!2sin" 
            ></iframe>
          </div>

        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white shadow rounded-xl p-6">

          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded"
            />

            <button
              disabled={loading}
              className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 w-full disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}
