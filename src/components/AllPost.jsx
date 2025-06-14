
import React, { use, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router'; 
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../context/AuthContext';

const AllPost = () => {
    const {loading}=use(AuthContext)
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const categoryRefs = useRef({});
    const axiosSecure = useAxiosSecure(); 

    useEffect(() => {
        axiosSecure.get('/services')
            .then(res => {
                setServices(res.data);
                setFilteredServices(res.data);
                const uniqueCategories = [...new Set(res.data.map(service => service.category))];
                setCategories(uniqueCategories);
                setActiveCategory(uniqueCategories[0] || '');
            })
            .catch(err => console.error(err));
    }, [axiosSecure]);

    const handleSearch = (e) => {
        const text = e.target.value.toLowerCase();
        setSearchText(text);

        const matched = services.filter(service =>
            service.name.toLowerCase().includes(text)
        );
        setFilteredServices(matched);
    };

    const scrollToCategory = (cat) => {
        categoryRefs.current[cat]?.scrollIntoView({ behavior: 'smooth' });
        setActiveCategory(cat);
    };

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

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-10 pt-10">

            <div className=" text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Discover Meaningful Services
                </h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Find what you need by browsing categories or searching by name.
                </p>
                <input
                    type="text"
                    placeholder="Search service by name..."
                    value={searchText}
                    onChange={handleSearch}
                    className="input input-bordered w-full max-w-xl mx-auto"
                />
            </div>

            <div className="md:flex gap-8">
                <div className="hidden md:block w-1/4 sticky top-24 self-start">
                    <h3 className="text-xl font-bold text-primary mb-3">Categories</h3>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => scrollToCategory(cat)}
                            className={`block text-left w-full px-4 py-2 rounded duration-300 font-medium ${activeCategory === cat ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="md:w-3/4 space-y-10">
                    {
                        searchText ?
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4 border-b pb-2">Search Results</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredServices.length ? filteredServices.map(service => (
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
                                                <Link to={`/details/${service._id}`}>
                                                    <button className="btn btn-sm btn-outline btn-primary mt-3">View Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )) : <p className="text-red-500">No services matched your search.</p>}
                                </div>
                            </div>
                            :
                            categories.map(category => (
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
                                                        <Link to={`/details/${service._id}`}>
                                                            <button className="btn btn-sm btn-outline btn-primary mt-3">View Details</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPost;
