import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div >
            <div className='shadow-2xl  fixed top-0 left-0 z-50 bg-base-100 w-full'>
                <div className='container mx-auto  '><Navbar /></div>
            </div>
            <div className='container mx-auto mt-16 min-h-[calc(100vh-285px)] '><Outlet /></div>
            <div className=''><Footer /></div>
        </div>
    );
};

export default MainLayout;