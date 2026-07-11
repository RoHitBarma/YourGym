import React from 'react'
import aboutImage from '../assets/images/image13.jpg'
import aboutImagesf from '../assets/images/image13-sf.jpg'
import { motion } from 'framer-motion'

const About = () => {
  const benefits = [
    "Certified Trainers",
    "Modern Equipment",
    "Personalized Workout Plans",
    "Nutrition Guidance",
  ];
  return (
    <section id="about" className='bg-black text-white py-10'>
        <div className='max-w-6xl mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='flex justify-center'
                >
                  <img src={aboutImagesf} 
                    alt="About Us" 
                    className='w-full max-w-md h-[320px] md:h-[500px] object-cover rounded-2xl shadow-2xl border border-gray-800' 
                  />
                </motion.div>
                <div>
                  <p className="text-red-500 uppercase tracking-[4px] mb-2">
                    About Us
                  </p>

                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    About Fitness Hub
                  </h2>

                  <p className="text-gray-300 leading-8 mb-8 max-w-lg">
                    At Fitness Hub, we help individuals achieve their fitness goals through expert coaching, modern equipment, and personalized training programs designed for every fitness level.
                  </p>

                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15,
                        }}
                      >
                        <span className="text-red-500 text-xl">✓</span>
                        <p>{benefit}</p>
                      </motion.div>
                    ))}

                  </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About