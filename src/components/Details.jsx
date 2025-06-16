import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import BookServiceModal from './BookServiceModal';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://helpify-server.vercel.app/details/${id}`)
      .then(res => setService(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!service) {
    return <div className="text-center py-20 text-xl text-gray-500">Loading service details...</div>;
  }

  const handleBookNow = () => {
    if (!user) {
      Swal.fire({
        icon: 'success',
        title: 'Booked!',
        text: 'Service booked successfully!'
      });
    }
    setShowModal(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-4xl font-bold text-primary mb-4">{service.name}</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <span className="text-gray-600 font-semibold">Service Area:</span>
              <span className="text-gray-800 text-lg">{service.area}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600 font-semibold">Service Price:</span>
              <span className="text-green-600 text-2xl font-bold">$ {service.price}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <img
              src={service.providerPhoto}
              alt={service.providerName}
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div>
              <p className="text-gray-800 font-medium">{service.providerName}</p>
              <p className="text-gray-500 text-sm">{service.providerEmail}</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleBookNow}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
            >
              Book This Service
            </button>
          </div>

          <p className="mt-8 text-center text-gray-500 text-sm">
            By booking this service, you agree to our{" "}
            <span className="text-blue-600 underline cursor-pointer">Terms & Conditions</span>.
            Need help? Contact our support team anytime.
          </p>
        </div>
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
