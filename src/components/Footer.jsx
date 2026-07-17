import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* =====================
              Brand Section
          ====================== */}

          <div>

            <h2 className="text-3xl font-bold">
              Fitness <span className="text-red-500">Hub</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Transform your body and achieve your fitness goals
              with expert trainers, modern equipment, and a
              motivating environment.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-zinc-900
                hover:bg-red-500
                transition
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-zinc-900
                hover:bg-red-500
                transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-zinc-900
                hover:bg-red-500
                transition
                "
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* =====================
              Quick Links
          ====================== */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-red-500 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Programs
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Pricing
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Contact
              </li>

            </ul>

          </div>

          {/* =====================
              Contact Info
          ====================== */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-red-500 mt-1" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-red-500 mt-1" />
                <p>fitnesshub@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <p>Rishra, West Bengal, India</p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Line */}

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center">

          <p className="text-gray-500">
            © 2026 Fitness Hub. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;