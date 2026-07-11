import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaArrowRight } from "react-icons/fa";

// import all images 
import weightlifting from '../assets/images/weighttrain-sf.jpg'
import dumbbell from '../assets/images/dembbell-sf.jpg'
import cardio from '../assets/images/cardio-sf.jpg'
import strength from '../assets/images/strength-machine-sf.jpg'
import gymTraining from '../assets/images/gymTraining-sf.jpg'
import locker from '../assets/images/locker-sf.jpg'



const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);

  const galleryImages = [
    {
        id: 1,
        image: weightlifting,
        title: "Weight Lifting Zone",
    },
    {
        id: 2,
        image: dumbbell,
        title: "Dumbbell Area",
    },
    {
        id: 3,
        image: cardio,
        title: "Cardio Area",
    },
    {
        id: 4,
        image: strength,
        title: "Strength Machine Area",
    },
    {
        id: 5,
        image: gymTraining,
        title: "Gym Training Area",
    },
    {
        id: 6,
        image: locker,
        title: "Locker Room",
    }
  ];
  return (
    <section id='gallery' className='bg-black text-white py-20'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[5px] text-red-500">
            OUR GALLERY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Photo Gallery
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Take a look at our gym, equipment and amazing fitness community.
          </p>

        </motion.div>

        <div className='hidden md:grid grid-cols-3 gap-6 mt-14'>
          {galleryImages.slice(0, visibleImages).map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y:40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: image.id * 0.2 }}

              className='group overflow-hidden rounded-lg relative border border-zinc-800 hover:border-red-500 cursor-pointer'
            >
              <img src={image.image} alt={image.title} className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" />
            </motion.div>
          ))}
        </div>
        {
          visibleImages < galleryImages.length && (
            <div className="hidden md:flex justify-center mt-12">

              <button
                onClick={() => setVisibleImages(visibleImages + 3)}
                className="
                  px-8
                  py-3
                  bg-red-500
                  hover:bg-red-600
                  rounded-full
                  font-semibold
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                View More
              </button>

            </div>
          )
        }

        {/* mobile gallery */}
        <div className="md:hidden mt-14">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            loop={true}
          >
            {galleryImages.slice(0, visibleImages).map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
                  <img src={image.image} alt={image.title} className="w-full h-[380px] object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-6 left-5">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {
            visibleImages < galleryImages.length && (
                <div className="md:hidden flex justify-center mt-8">

                  <button
                    onClick={() => setVisibleImages(visibleImages + 3)}
                    className="
                      flex
                      items-center
                      gap-2
                      bg-red-500
                      hover:bg-red-600
                      px-8
                      py-3
                      rounded-full
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Load More Photos
                    <FaArrowRight className="text-sm" />
                  </button>

                </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Gallery