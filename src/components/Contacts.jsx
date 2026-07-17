import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { useState } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsappSubmit = (e) => {
    e.preventDefault();

    // FIXED: Email ko optional rakha hai taaki user sirf Name aur Message daal kar bhi send kar sake
    if (!formData.name || !formData.message) {
      alert("Please fill in your Name and Message.");
      return;
    }

    // Gym owner ka real WhatsApp number (Country code ke sath, bina '+' ke)
    const phoneNumber = "919876543210";

    // Message ka format taiyar karein
    const whatsappText = `Hello Fitness Hub,%0A%0A` +
                         `*New Website Enquiry*:%0A` +
                         `👤 *Name*: ${encodeURIComponent(formData.name)}%0A` +
                         `📧 *Email*: ${encodeURIComponent(formData.email || 'Not Provided')}%0A` +
                         `💬 *Message*: ${encodeURIComponent(formData.message)}`;

    // WhatsApp open karne ke liye URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

    // Naye tab mein WhatsApp open karein
    window.open(whatsappURL, '_blank');

    // Message bhejne ke baad form ko khali (reset) kar dein
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <p className="text-red-500 uppercase tracking-[4px] text-center">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-3">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Have questions? Reach out to us and start your fitness journey today.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
              <div>
                <h4 className="font-bold mb-1">Address</h4>
                <p className="text-gray-400">
                  Main Road, Rishra, West Bengal, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaPhoneAlt className="text-red-500 text-xl mt-1" />
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-gray-400">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaEnvelope className="text-red-500 text-xl mt-1" />
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-gray-400">
                  fitnesshub@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaClock className="text-red-500 text-xl mt-1" />
              <div>
                <h4 className="font-bold mb-1">Working Hours</h4>
                <p className="text-gray-400">
                  Mon - Sat : 6 AM - 10 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form onSubmit={handleWhatsappSubmit} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-lg p-3 mb-4 outline-none focus:border-red-500"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-lg p-3 mb-4 outline-none focus:border-red-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-lg p-3 mb-4 outline-none focus:border-red-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-500 px-6 py-3 rounded-full hover:scale-105 hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 max-w-6xl mx-auto px-6">
        <p className="text-red-500 uppercase tracking-[4px] text-center">
          Location
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-3 mb-10">
          Find Us
        </h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29440.64823259126!2d88.33552195!3d22.725229449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b4073a21c17%3A0x4e16d218bb132c99!2sRishra%2C%20Pandit%20Satghara%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1780651809392!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacts;