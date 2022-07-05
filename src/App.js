import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Student_SignUp from './components/Student_SignUp';
import Student_Login from './components/Student_Login';

function App() {
  return (
<<<<<<< HEAD
    <>
      <Routes>
        <Route path='/' element={<Student_Login/>}/>
        <Route path="/signin" element={<Navigate to="/"/>}/>
        <Route path="/signup" element={<Student_SignUp/>}/>
      </Routes>
    </>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Virtual Classroom App
        </a>
      </header>
    </div>
>>>>>>> 6a7e190a8eaed849954e7482da9377b8e6196ff5
  );
}

export default App;
