import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

const CourseModule = () => {
    const { getApiData, getCourseApiData, addCourseModule,getModuleApiData } = useContext(DataContext);
    const [formData, setFormData] = useState({});
    // get input data
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        addCourseModule(formData);
    }
    return (
        <div>
            <div>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Course Module</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Add / View Course Module</li>
                    </ol>
                    <div className="card mb-5">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <form onSubmit={submit}>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12 col-md-6 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Category</label>
                                                    <select name="category"
                                                        onChange={handleChange}
                                                        id="" className='form-control'>
                                                        <option value="">Select Category</option>
                                                        {
                                                            getApiData.data?.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.name}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 col-md-6 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Name</label>
                                                    <select name="course_name"
                                                        onChange={handleChange}
                                                        id="" className='form-control'>
                                                        <option value="">Select Course Name</option>
                                                        {
                                                            getCourseApiData.data?.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.course_name}>{item.course_name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12 col-md-12 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Module Name</label>
                                                    <input name='module_name' onChange={handleChange} type="text" class="form-control" placeholder="Module Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12 col-md-12 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Module Topics *(use comma)*</label>
                                                    <textarea name='module_topics' onChange={handleChange} class="form-control" id=""></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-md-6 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Module Banner *(image link support)*</label>
                                                    <input type="text" onChange={handleChange} class="form-control" name='banner' />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-md-6 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Module Video *(Drive ID Link Only )*</label>
                                                    <input name='module_video' type="text" onChange={handleChange} class="form-control" placeholder='Module Video' />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12 col-md-12 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Module Descripton </label>
                                                    <textarea class="form-control" name="module_des" onChange={handleChange} id=""></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-md-6 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Extra One</label>
                                                    <input name='extra_one' type="text" class="form-control" onChange={handleChange} placeholder="Extra One" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-md-6 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Extra Two</label>
                                                    <input name='extra_two' type="text" class="form-control" onChange={handleChange} placeholder="Extra Two" />
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <span class="material-symbols-outlined btn btn-success btn-sm">
                                                edit
                                            </span>
                                            <span class="material-symbols-outlined btn btn-danger btn-sm ms-2">
                                                delete
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseModule;