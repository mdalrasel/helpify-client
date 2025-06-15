import React, { useEffect } from 'react'; 
import { Outlet, useLocation } from 'react-router'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const MainLayout = () => {
    const location = useLocation(); 

    const getPageTitle = (pathname) => {
        let title = 'Helpify'; 

        switch (pathname) {
            case '/':
                title = 'Home | Helpify';
                break;
            case '/signIn':
                title = 'Login | Helpify';
                break;
            case '/register':
                title = 'Register | Helpify';
                break;
            case '/allPost': 
                title = 'All Services | Helpify';
                break;
            case '/add-service':
                title = 'Add A Service | Helpify';
                break;
            case '/manage-services':
                title = 'Manage Your Services | Helpify';
                break;
            case '/booked-services':
                title = 'My Bookings  Helpify';
                break;
            case '/service-to-do':
                title = 'Services To Do | Helpify';
                break;
            default:
                if (pathname.startsWith('/details/')) {
                    title = 'Service Details | Helpify';
                } else if (pathname.startsWith('/update-service/')) { 
                    title = 'Update Service  Helpify';
                } else {
                    title = 'Page Not Found | Helpify';
                }
                break;
        }
        return title;
    };

    useEffect(() => {
        document.title = getPageTitle(location.pathname);
    }, [location.pathname]); 

    return (
        <div>
            <div className='shadow-2xl fixed top-0 left-0 z-50 bg-base-100 w-full'>
                <div className='container mx-auto'><Navbar /></div>
            </div>
            <main className='container mx-auto mt-16 min-h-[calc(100vh-285px)]'>
                <Outlet /> 
            </main>
            <div className=''>
               <Footer />
            </div>
        </div>
    );
};

export default MainLayout;