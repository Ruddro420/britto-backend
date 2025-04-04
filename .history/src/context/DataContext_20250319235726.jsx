/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext(); // ✅ Export Context

export const DataProvider = ({ children }) => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();
    const [data,setData] = useState([]);

    // get category
    const getData = () => {
        axios.get(`${BASE_URL}/category/add`)
            .then((res) => {
                setData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }




    // user login or not
    /* useEffect(() => {
        const order = JSON.parse(localStorage.getItem("order"));
        setOrder(order);
    }, []); */


    return (
        <DataContext.Provider value={{  }}>
            {children}
        </DataContext.Provider>
    );
};