import React from 'react'
import parallaxImage from '../assets/images/parallaxBanner.png'
import { Link } from 'react-scroll'

const ParallaxBanner = () => {
  return (
    <section className='relative h-[500px] md:h-[550px] md:bg-fixed bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: `url(${parallaxImage})` }}>
        <div className='absolute inset-0 bg-black/60'></div>

        {/* content */}
        <div className="relative z-10 text-center text-white px-6">

            <p className="uppercase tracking-[6px] text-red-500 text-sm mb-3">
                Motivation
            </p>

            <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>

            <h2 className="text-6xl md:text-8xl font-extrabold">
                NO PAIN
            <br />
            <span className="text-red-500">
                NO GAIN
            </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300">
                Push Beyond Your Limits
            </p>

            <button
            className="
            mt-8
            bg-red-500
            px-8
            py-4
            rounded-full
            hover:scale-105
            transition
            "
            >
                <Link to="contact" smooth={true} duration={500}>
                    Join Now
                </Link>
            </button>

        </div>
    </section>
  )
}

export default ParallaxBanner