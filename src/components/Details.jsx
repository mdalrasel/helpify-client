import axios from 'axios';
import React, { useEffect, useState, use } from 'react';
import { useParams } from 'react-router';
import BookServiceModal from './BookServiceModal';
import { AuthContext } from '../context/AuthContext';

const Details = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [showModal, setShowModal] = useState(false); 
    const { user } = use(AuthContext); 

    useEffect(() => {
        axios.get(`http://localhost:5000/details/${id}`)
            .then(res => setService(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!service) {
        return <div className="text-center py-20 text-xl">Loading...</div>;
    }

    const handleBookNow = () => {
        if (!user) {
            alert('Please log in to book this service.');
            return;
        }
        setShowModal(true); 
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <img src={service.image} alt={service.name} className="w-full h-96 object-cover rounded-xl mb-6" />
            <h2 className="text-3xl font-bold text-primary mb-2">{service.name}</h2>
            <p className="text-gray-600 text-lg mb-4">{service.description}</p>

            <div className="flex justify-between items-center mb-4">
                <span className="text-green-600 text-xl font-semibold">৳{service.price}</span>
                <span className="text-gray-600">Area: {service.serviceArea}</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
                <img src={service.providerPhoto} alt={service.providerName} className="w-10 h-10 rounded-full" />
                <span className="text-gray-700 text-base">{service.providerName}</span>
                {service.providerEmail && <span className="text-gray-500 text-sm">({service.providerEmail})</span>}
            </div>

            <div className="text-center">
                <button
                    onClick={handleBookNow}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                    Book Now
                </button>
            </div>

            {showModal && (
                <BookServiceModal
                    service={service}
                    user={user} 
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default Details;