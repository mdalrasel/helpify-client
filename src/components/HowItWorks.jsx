import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBook, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const steps = [
    {
      icon: <FaSearch className="text-4xl text-blue-500 mb-4" />,
      title: 'Find Your Service',
      description: 'Browse through various service categories or search directly for your needs.',
      aos: 'fade-right',
    },
    {
      icon: <FaBook className="text-4xl text-blue-500 mb-4" />,
      title: 'Book with Ease',
      description: 'Select a service provider, view details, and book in just a few clicks.',
      aos: 'fade-up',
    },
    {
      icon: <FaCheckCircle className="text-4xl text-blue-500 mb-4" />,
      title: 'Enjoy Quality Service',
      description: 'Receive top-quality service at your convenience.',
      aos: 'fade-left',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos={step.aos}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {step.icon}
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;