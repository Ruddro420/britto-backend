import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { DataProvider } from '../context/DataContext';

const MainLayout = () => {
    return (
        <div>
            <DataProvider> {/* ✅ Wrap components inside the provider */}
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
            </DataProvider>
        </div>

    );
};

export default MainLayout;