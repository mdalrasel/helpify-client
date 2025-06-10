import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                const reversed = res.data.reverse(); 
                const latestSix = reversed.slice(0, 6);
                setServices(latestSix);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="my-12 px-4 md:px-10">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Popular Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map(service => (
                    <div key={service._id} className="card shadow-2xl  rounded-2xl p-4 flex gap-4">
                        <img src={service.image} alt={service.name} className="w-40 h-40 object-cover rounded-xl" />
                        <div className="flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-xl font-bold text-primary">{service.name}</h3>
                                <p className="text-sm  mb-2">
                                    {service.description.length > 100 ? service.description.slice(0, 100) + '...' : service.description}
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-2">
                                    <img src={service.providerPhoto} alt="provider" className="w-8 h-8 rounded-full" />
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

            {/* 👉 More Services Button */}
            <div className="text-center mt-10">
                <Link to="/allPost">
                    <button className="btn btn-primary px-8 text-white text-lg font-semibold rounded-xl">
                        More Services
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PopularServices;
