import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { DataContext } from '../context/DataContext';

const Category = () => {
    // fetch data
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [data, setData] = useState([]);
    const { getData, getApiData } = useContext(DataContext);


    const submit = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        // store data
        axios.post(`${BASE_URL}/category/add`, {
            name: name
        }).then((res) => {
            setData(res.data);
            toast.success('Added Successfully');
            getData('category/get');
        }).catch((err) => {
            console.log(err);
            toast.error('Failed to add');
        })
    }
    console.log(data);

    return (
        <div>
            <div>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Course</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Add / View Category</li>
                    </ol>
                    <div className="card mb-5">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <form onSubmit={submit}>
                                        <div className="row">
                                            <div className="col mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Category Name</label>
                                                    <input type="text" class="form-control" placeholder="Category Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6>All Course</h6>
                    <div className="card">
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{item.name}</td>
                                                    <td>{item.updated_at}</td>
                                                    <td>
                                                        <span class="material-symbols-outlined btn btn-success btn-sm">
                                                            edit
                                                        </span>
                                                        <span class="material-symbols-outlined btn btn-danger btn-sm ms-2">
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;