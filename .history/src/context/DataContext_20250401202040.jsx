
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext(); // ✅ Export Context

export const DataProvider = ({ children }) => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    // const navigate = useNavigate();
    const [getApiData, setGetApiData] = useState([]);
    const [getCourseApiData, setGetCourseApiData] = useState([]);
    const [getModuleApiData, setGetModuleApiData] = useState([]);


    // get category
    const getData = () => {
        axios.get(`${BASE_URL}/category/get`)
            .then((res) => {
                setGetApiData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    // get course
    const getCourse = () => {
        axios.get(`${BASE_URL}/course/get`)
            .then((res) => {
                setGetCourseApiData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    // get course
    const getModule = () => {
        axios.get(`${BASE_URL}/module/get`)
            .then((res) => {
                setGetModuleApiData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getData();
        getCourse();
        getModule()
    }, []);

    // Function to add a new category
    const addCategory = (name) => {
        axios.post(`${BASE_URL}/category/add`, { name })
            .then(() => {
                getData()
                toast.success('Added Successfully');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to add');
            });
    };

    // add course
    const addCourse = (name) => {
        axios.post(`${BASE_URL}/course/add`, name)
            .then(() => {
                getData()
                getCourse()
                toast.success('Added Successfully');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to add');
            });
    };
    // add course module
    const addCourseModule = (name) => {
        axios.post(`${BASE_URL}/module/add`, name)
            .then(() => {
                getData()
                getCourse()
                toast.success('Added Successfully');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to add');
            }
            );
    }


    return (
        <DataContext.Provider value={{ getData, getApiData, addCategory, addCourse, getCourseApiData,addCourseModule }}>
            {children}
        </DataContext.Provider>
    );
};