import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Student_SignUp from './components/Student_SignUp';
import Student_Login from './components/Student_Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Student_Login/>}/>
        <Route path="/signin" element={<Navigate to="/"/>}/>
        <Route path="/signup" element={<Student_SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
