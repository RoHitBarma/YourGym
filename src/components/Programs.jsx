import React from 'react'
import { FaDumbbell, FaFire, FaUserTie, FaAppleAlt } from "react-icons/fa";

const Programs = () => {2
  const programs = [
        {
            icon: <FaDumbbell />,
            title: "Strength Training",
            description:
            "Build muscle and increase overall strength."
        },
        {
            icon: <FaFire />,
            title: "Weight Loss",
            description:
            "Burn fat and achieve your fitness goals."
        },
        {
            icon: <FaUserTie />,
            title: "Personal Training",
            description:
            "One-on-one coaching tailored for you."
        },
        {
            icon: <FaAppleAlt />,
            title: "Nutrition Guidance",
            description:
            "Expert diet plans for maximum results."
        }
    ];
  return (
    <section id="programs" className='bg-black text-white py-10'>
        <div className='max-w-6xl mx-auto px-6'>
            <h2 className='text-4xl md:text-5xl font-bold mb-10 text-center'> Our Programs </h2>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
                {programs.map((program, item) => (
                    <div key={item} className='bg-zinc-900 p-8 rounded-2xl border border-zinc-800 transition duration-300 hover:translate-y-2 hover:border-red-500'>
                        <div className='text-5xl text-red-500 mb-6'>
                            {program.icon}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {program.title}
                        </h3>

                        <p className="text-gray-400">
                            {program.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Programs