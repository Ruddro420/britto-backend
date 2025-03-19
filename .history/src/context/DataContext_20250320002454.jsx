
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext(); // ✅ Export Context

export const DataProvider = ({ children }) => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();
    const [getApiData, setGetApiData] = useState([]);


    const submit = (e, value) => {
        e.preventDefault();
        //let name = e.target[0].value;
        // store data
        axios.post(`${BASE_URL}/category/add`, {
            name: value
        }).then(() => {
            getData();
            toast.success('Added Successfully');

        }).catch((err) => {
            console.log(err);
            toast.error('Failed to add');
        })
    }


    // get category
    const getData = (id) => {
        axios.get(`${BASE_URL}/${id}`)
            .then((res) => {
                setGetApiData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getData('category/get');
    }, []);


    // user login or not
    /* useEffect(() => {
        const order = JSON.parse(localStorage.getItem("order"));
        setOrder(order);
    }, []); */


    return (
        <DataContext.Provider value={{ getData, getApiData, submit }}>
            {children}
        </DataContext.Provider>
    );
};