
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext(); // ✅ Export Context

export const DataProvider = ({ children }) => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();
    const [getApiData, setGetApiData] = useState([]);
    

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

     // Function to add a new category
     const addCategory = (name) => {
        axios.post(`${BASE_URL}/category/add`, { name })
            .then((res) => {
                setGetApiData((prev) => [...prev, res.data]); // ✅ Instant UI update
                toast.success('Added Successfully');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to add');
            });
    };


    // user login or not
    /* useEffect(() => {
        const order = JSON.parse(localStorage.getItem("order"));
        setOrder(order);
    }, []); */


    return (
        <DataContext.Provider value={{getData,getApiData}}>
            {children}
        </DataContext.Provider>
    );
};