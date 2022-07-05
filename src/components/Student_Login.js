import React from 'react'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'


function Student_Login() {
  const navigate = useNavigate();
  const toSignUp = () => {
    navigate("/signup")
  }
  return (
    <>
      <div className="card p-5 w-50 shadow rounded m-auto mt-5">
        <div className="card-body">
          <form action="" className="form">
            <h3 className='text-center text-primary mb-3'>Register Here</h3>
            <div className="form-group w-100 mb-2">
              <label htmlFor="" className="form-label mt-2">Email Address</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group  w-100 mb-2">
              <label htmlFor="" className="form-label mt-2">Password</label>
              <input type="password" className="form-control" />
            </div>
            <button className="btn btn-primary w-100 mt-2">Login</button>
            <div className="mt-3 text-center">
              <p>Did not have an account? <span className='text-primary' onClick={toSignUp}>Register here</span></p>
            </div>
          </form>
        </div>
      </div>
    </>
=======

function Student_Login() {
  return (
    <div>Student_Login</div>
>>>>>>> 6a7e190a8eaed849954e7482da9377b8e6196ff5
  )
}

export default Student_Login