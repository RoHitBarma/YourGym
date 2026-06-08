import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
        {
            name: "Rahul Sharma",
            review:
            "Joined Fitness Hub 6 months ago and lost 15kg. The trainers are incredibly supportive.",
            rating: 5,
        },
        {
            name: "Priya Singh",
            review:
            "Modern equipment and a great atmosphere. I look forward to every workout session.",
            rating: 4,
        },
        {
            name: "Aman Verma",
            review:
            "The personalized workout plan helped me gain muscle and stay motivated.",
            rating: 5,
        },
    ];
  return (
    <section id="testimonials" >
        <div className='py-16 bg-black text-white'>
            <div className='max-w-6xl mx-auto px-6'>

                {/* Heading */}

                <p className="text-red-500 uppercase tracking-[4px] text-center">
                Testimonials
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-center mt-3">
                What Our Members Say
                </h2>

                <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
                Real stories from members who transformed their fitness journey.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="
                            bg-zinc-900
                            p-8
                            rounded-2xl
                            border
                            border-zinc-800
                            hover:border-red-500
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            "
                        >
                            <div className="flex gap-1 text-yellow-400 mb-5">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <FaQuoteLeft
                                className="
                                    text-red-500
                                    text-3xl
                                    mb-4
                                "
                            />
                            <p className="text-gray-300 leading-relaxed">"{testimonial.review}"</p>
                            <p className="mt-6 text-lg font-bold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Testimonials