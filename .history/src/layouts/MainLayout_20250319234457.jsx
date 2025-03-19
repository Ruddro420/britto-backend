import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { DataContext } from '../context/DataContext';

const MainLayout = () => {
    return (
        <div>
            <DataContext>
                <Navbar />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <Sidebar />
                    </div>
                    <div id="layoutSidenav_content">
                        <Outlet />
                        <Toaster />
                        {/* <MainFooter /> */}
                    </div>
                </div>
            </DataContext>
        </div>
    );
};

export default MainLayout;