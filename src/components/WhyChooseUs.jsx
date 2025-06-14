import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaStar, FaHeadset, FaDollarSign } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-green-500 mb-3" />,
      title: 'Verified Providers',
      description: 'All our service providers are thoroughly verified and trustworthy.',
      aos: 'zoom-in-up',
    },
    {
      icon: <FaStar className="text-3xl text-yellow-500 mb-3" />,
      title: 'Top-Quality Service',
      description: 'We ensure the highest quality service to guarantee your satisfaction.',
      aos: 'zoom-in-up',
      delay: '200',
    },
    {
      icon: <FaHeadset className="text-3xl text-purple-500 mb-3" />,
      title: '24/7 Customer Support',
      description: 'Our support team is always available to assist you with any needs.',
      aos: 'zoom-in-up',
      delay: '400',
    },
    {
      icon: <FaDollarSign className="text-3xl text-red-500 mb-3" />,
      title: 'Affordable Pricing',
      description: 'We offer the best services that fit within your budget.',
      aos: 'zoom-in-up',
      delay: '600',
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos={feature.aos}
              data-aos-delay={feature.delay}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;