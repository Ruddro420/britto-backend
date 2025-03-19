import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ViewProduct from './pages/ViewProduct.jsx';
import OrderDetails from './pages/OrderDetails.jsx';
import SingleOrderDetails from './pages/SingleOrderDetails.jsx';
import Analytics from './pages/Analytics.jsx';
import Login from './auth/Login.jsx';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoute.jsx';
import Course from './pages/Course.jsx';
import Category from './pages/Category.jsx';
import CourseModule from './pages/CourseModule.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute>
      <MainLayout />
    </PrivateRoute>,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/category",
        element: <Category />
      },
      {
        path: "/course",
        element: <Course />
      },
      {
        path: "/course-module",
        element: <CourseModule />
      },
      {
        path: "/view-product",
        element: <ViewProduct />
      },
      {
        path: "/order-details",
        element: <OrderDetails />
      },
      {
        path: "/single-order-details",
        element: <SingleOrderDetails />
      },
      {
        path: "/analytics",
        element: <Analytics />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
)
