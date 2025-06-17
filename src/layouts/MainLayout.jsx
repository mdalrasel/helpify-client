
import { Outlet, } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageTitle from '../hooks/usePageTitle';
import { Helmet } from 'react-helmet-async';
const MainLayout = () => {
    const pageTitle = usePageTitle();

    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <div className='shadow-2xl fixed top-0 left-0 z-50 bg-base-300 w-full'>
                <div className='container mx-auto'><Navbar /></div>
            </div>
            <main className='container mx-auto mt-20 min-h-[calc(100vh-284px)]'>
                <Outlet />
            </main>
            <div className=''>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;