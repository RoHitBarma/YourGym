import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-red-500
        text-white
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsappButton;