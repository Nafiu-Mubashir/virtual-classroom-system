import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Student_SignUp from './components/Student_SignUp';
import Student_Login from './components/Student_Login';
import Lecturer_signIn from './components/Lecturer_signIn';
import Lecturer_signUp from './components/Lecturer_signUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Student_Login/>}/>
        <Route path="/signin" element={<Navigate to="/"/>}/>
        <Route path="/signup" element={<Student_SignUp/>}/>
        <Route path="/register" element={<Lecturer_signUp/>}/>
        <Route path="/login" element={<Lecturer_signIn/>}/>
      </Routes>
    </>
  );
}

export default App;
