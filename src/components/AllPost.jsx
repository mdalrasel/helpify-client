import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const AllPost = () => {
    const [services, setServices] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const categoryRefs = useRef({});

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                setServices(res.data);

                const uniqueCategories = [...new Set(res.data.map(service => service.category))];
                setCategories(uniqueCategories);
                setActiveCategory(uniqueCategories[0] || '');
            })
            .catch(err => console.error(err));
    }, []);

    const scrollToCategory = (cat) => {
        categoryRefs.current[cat]?.scrollIntoView({ behavior: 'smooth' });
        setActiveCategory(cat);
    };

    // Scroll listener for active section
    useEffect(() => {
        const handleScroll = () => {
            for (let cat of categories) {
                const section = categoryRefs.current[cat];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        setActiveCategory(cat);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [categories]);

    return (
        <div className="md:flex px-4 md:px-10 pt-10">

            {/* Left Sidebar - Category List */}
            <div className="hidden md:block fixed top-16 left-0 w-1/4 pl-4 z-20">
                <h3 className="text-xl font-bold text-primary mb- mt-10">Categories</h3>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => scrollToCategory(cat)}
                        className={`block text-left w-full px-4 py-2 rounded duration-300 font-medium ${activeCategory === cat ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white '
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Right Content - Services by Category */}
            <div className="md:ml-[25%] md:w-[75%] pl-8 space-y-10 border-l">
                {categories.map(category => (
                    <div key={category} ref={el => categoryRefs.current[category] = el}>
                        <h2 className="text-2xl font-bold text-secondary mb-4 border-b pb-2">{category}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services
                                .filter(service => service.category === category)
                                .map(service => (
                                    <div key={service._id} className="card shadow-lg rounded-xl p-4 flex gap-4">
                                        <img src={service.image} alt={service.name} className="w-32 h-32 object-cover rounded-lg" />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-primary">{service.name}</h3>
                                            <p className="text-sm mb-2">
                                                {service.description.length > 80
                                                    ? service.description.slice(0, 80) + '...'
                                                    : service.description}
                                            </p>
                                            <div className="flex justify-between items-center mt-2">
                                                <div className="flex items-center gap-2">
                                                    <img src={service.providerPhoto} alt="provider" className="w-6 h-6 rounded-full" />
                                                    <span className="text-sm font-medium">{service.providerName}</span>
                                                </div>
                                                <span className="text-base font-semibold text-green-600">${service.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPost;
