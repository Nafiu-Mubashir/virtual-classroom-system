import React from 'react'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'

function Student_SignUp() {
    const navigate = useNavigate();
    const toSignIn = () => {
      navigate("/")
    }
    return (
        <>
            <div className="card p-5 w-50 shadow rounded m-auto mt-3">
                <div className="card-body">
                    <form action="" className="form">
                        <h3 className='text-center text-primary mb-3'>Register Here</h3>
                        <div className="d-flex mb-2">
                            <div className="form-group w-50">
                                <label htmlFor="" className="form-label mt-2">First Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group w-50 ms-3">
                                <label htmlFor="" className="form-label mt-2">Last Name</label>
                                <input type="text" className="form-control" />
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
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group  w-100 mb-2">
                            <label htmlFor="" className="form-label mt-2">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group  w-100 mb-2">
                            <label htmlFor="" className="form-label mt-2">Confirm Password</label>
                            <input type="password" className="form-control" />
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
=======

function Student_SignUp() {
  return (
    <div>Student_SignUp</div>
  )
>>>>>>> 6a7e190a8eaed849954e7482da9377b8e6196ff5
}

export default Student_SignUp