/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext(); // ✅ Export Context

export const DataProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [user, setUser] = useState(null);
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // get category
    const getData = () => {
        axios.get('http://localhost:5000/category/get')
            .then((res) => {
                console.log(res.data);
                setCategory(res.data);
            }




    // user login or not
    /* useEffect(() => {
        const order = JSON.parse(localStorage.getItem("order"));
        setOrder(order);
    }, []); */


    return (
            <DataContext.Provider value={{ setUser, user, loginData, logOut }}>
                {children}
            </DataContext.Provider>
        );
    };