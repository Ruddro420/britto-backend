import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

const Course = () => {
    const { getApiData ,addCourse,getCourseApiData} = useContext(DataContext);
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
        addCourse(formData);
    }

    return (
        <div>
            <div>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Course</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Add / View Course</li>
                    </ol>
                    <div className="card mb-5">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <form onSubmit={submit}>
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12 col-md-12 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Category</label>
                                                    <select
                                                        name="category"
                                                        onChange={handleChange}
                                                        id="" className='form-control'>
                                                        <option value="">Select Category</option>
                                                        {
                                                            getApiData?.data?.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.name}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-md-4 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Name</label>
                                                    <input name='course_name' onChange={handleChange} type="text" class="form-control" placeholder="Course Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-md-4 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Short Bio</label>
                                                    <input name='short_bio' onChange={handleChange} type="text" class="form-control" placeholder="Course Short Bio" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-md-4 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Price</label>
                                                    <input name='course_price' onChange={handleChange} type="text" class="form-control" placeholder="Course Price" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-md-4 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Discount Price</label>
                                                    <input name='discount_price' onChange={handleChange} type="text" class="form-control" placeholder="Course Discount Price" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12 col-md-12 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Description</label>
                                                    <textarea name='course_des' onChange={handleChange} class="form-control" id=""></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-md-6 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Banner *(upload image url)* </label>
                                                    <input name='banner' onChange={handleChange} type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-md-6 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Intro Video</label>
                                                    <input name='intro_video' onChange={handleChange} type="text" class="form-control" placeholder='Intro Video' />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-md-4 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Video Count</label>
                                                    <input name='video_count' onChange={handleChange} type="text" class="form-control" placeholder="Video Count" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-md-4 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Course Week</label>
                                                    <input name='course_week' onChange={handleChange} type="text" class="form-control" placeholder="Course Week" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-md-4 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Extra One</label>
                                                    <input name='extra_one' onChange={handleChange} type="text" class="form-control" placeholder="Extra One" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-md-4 mt-3">
                                                <div class="form-group">
                                                    <label className='mb-2'>Extra Two</label>
                                                    <input name='extra_two' onChange={handleChange} type="text" class="form-control" placeholder="Extra Two" />
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

export default Course;