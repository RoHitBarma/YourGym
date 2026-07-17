import React from 'react'
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-scroll';

const Pricing = () => {
  const plans = [
        {
            name: "Monthly",
            price: "₹999",
            features: [
            "Gym Access",
            "Basic Training",
            "Locker Facility",
            ],
        },
        {
            name: "Half-Yearly",
            price: "₹2499",
            popular: true,
            features: [
            "Gym Access",
            "Personal Training",
            "Locker Facility",
            "Nutrition Guidance",
            ],
        },
        {
            name: "Yearly",
            price: "₹4999",
            features: [
            "Unlimited Access",
            "Personal Training",
            "Nutrition Guidance",
            "Priority Support",
            ],
        },
    ];

    const handlePlanJoin = (planName, planPrice) => {
        const phoneNumber = "919876543210";

        const message = `Hello Fitness Hub,%0A%0A` +
                    `I want to take admission in the *${encodeURIComponent(planName)} Plan* (${encodeURIComponent(planPrice)}).%0A` +
                    `Please guide me with the further admission process. Thanks!`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, '_blank');
    }
  return (
    <section id="pricing" className='py-16 bg-black text-white'>
        <div className='max-w-6xl mx-auto px-6'>
            <p className="text-red-500 uppercase tracking-[4px] text-center">
                Membership
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-center mt-3">
                Membership Plans
            </h2>

            <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
                Choose a membership plan that fits your fitness goals and start your transformation today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {plans.map((plan, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.2,
                        }}
                        className={`bg-gray-800 p-4 rounded-2xl border transition duration-300
                        ${
                            plan.popular
                            ? `bg-red-500 text-white border-red-500 scale-105 shadow-[0_0_40px_rgba(239,68,68,0.4)]`
                            : `bg-zinc-900 border-zinc-800 hover:border-red-500 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]`
                        }
                        `}
                    >
                        {plan.popular && (
                            <div className="mb-5">
                                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                        <p className="text-[3rem] font-extrabold text-center">{plan.price}</p>
                        <p className="mt-2 text-sm">Per Plan</p>
                        <ul className="mt-5 space-y-3">

                            {plan.features.map((feature) => (
                                <li key={feature}>
                                ✓ {feature}
                                </li>
                            ))}

                        </ul>

                        <button
                            onClick={() => handlePlanJoin(plan.name, plan.price)}
                            className={`
                            mt-6
                            w-full
                            py-3
                            rounded-full
                            font-semibold
                            transition-all
                            duration-300

                            ${
                                plan.popular
                                ? 
                                ` bg-white text-black hover:bg-gray-200 `
                                : 
                                ` bg-red-500 text-white hover:bg-red-600 `
                            }
                            `}
                        >
                            <Link to="contact" smooth={true} duration={500}>
                                Join Now
                            </Link>
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Pricing