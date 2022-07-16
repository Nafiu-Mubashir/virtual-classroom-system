import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as  yup from "yup";
import "./Stud.css";
import axios from "axios"

function Student_SignUp() {
    const navigate = useNavigate();
    const [status, setStatus] = useState([])
    // const signUpUrl = "http://localhost:4006/student/signup";
    // const practice = "https://jsonplaceholder.typicode.com/posts";
    // console.log(signUpUrl);
    // useEffect(() => {
    //     axios.get(practice).then((res) => {
    //         console.log(res);
    //     })
    // }, [])
    
    const toSignIn = () => {
        navigate("/")
    }
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            department: "",
            gender: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            // axios.post(signUpUrl, values).then((result) => {
            //     setStatus(result.data.status)
            //     console.log(result);
            // }) 
                formik.resetForm();
            // navigate("/");
        },
        validationSchema: yup.object({
            email: yup.string().required('This field is required'),
            firstname: yup.string().required('This field is required'),
            lastname: yup.string().required('This field is required'),
            password: yup.string("Must contain at least a letter").min(8, "Must not be less than 8 characters").required('This field is required'),
            cpassword: yup.string("Must contain at least a letter").required('This field is required'),
            gender: yup.string().required(),
        })
    })

    return (
        <>
            <div className="card p-5 shadow rounded m-auto mt-3 p-md-2">
                <div className="card-body">
                    <form action="" className="form" onSubmit={formik.handleSubmit}>
                        <h3 className='text-center text-primary mb-3'>Register Here</h3>
                        <div className="d-flex mb-2">
                            <div className="form-group w-50" id='you'>
                                <label htmlFor="" className="form-label mt-2">First Name</label>
                                <input type="text" className={formik.errors.firstname ? "form-control my-2 is-invalid" : "form-control my-2"} name='firstname' onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur}/>
                            </div>
                            <div className="form-group w-50 ms-3" id='you'>
                                <label htmlFor="" className="form-label mt-2">Last Name</label>
                                <input type="text" className={formik.errors.lastname ? "form-control my-2 is-invalid" : "form-control my-2"} name='lastname' onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} />
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="form-group w-50">
                                <label htmlFor="" className="form-label mt-2">Department</label>
                                <select name="" id="" className='form-select'>
                                    <option value="" selected disabled>Select department</option>
                                    <option value="CSE">Computer Science</option>
                                    <option value="CYB">Cyber Security</option>
                                    <option value="INS">Information Science</option>
                                </select>
                            </div>
                            <div className="form-group w-50 ms-3">
                                <label htmlFor="" className="form-label mt-2">Gender</label>
                                <select name="" id="" className='form-select'>
                                    <option value="" selected disabled>Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group w-100 mb-2">
                            <label htmlFor="" className="form-label mt-2">Email Address</label>
                            <input type="email" className={formik.errors.email ? "form-control my-2 is-invalid" : "form-control my-2"} name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                        </div>
                        <div className="form-group  w-100 mb-2">
                            <label htmlFor="" className="form-label mt-2">Password</label>
                            <input type="password" className={formik.errors.password ? "form-control my-2 is-invalid" : "form-control my-2"} name='password' onChange={formik.handleChange} value={formik.values.password}
                                    onBlur={formik.handleBlur} />
                        </div>
                        <div className="form-group  w-100 mb-2">
                            <label htmlFor="" className="form-label mt-2">Confirm Password</label>
                            <input type="password" className={formik.errors.cpassword ? "form-control my-2 is-invalid" : "form-control my-2"} name='cpassword' onChange={formik.handleChange} value={formik.values.cpassword}
                                    onBlur={formik.handleBlur}/>
                        </div>
                        <button className="btn btn-primary w-100 mt-2">Register</button>
                        <div className="mt-3 text-center">
                            <p>Already have an account? <span className='text-primary' onClick={toSignIn}>Login here</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Student_SignUp