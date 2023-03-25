import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import injectContext from "./store/context";
import Home from './views/home';
import Login from './views/login';
import Register from './views/register';
import RecoverPass from './views/recoverPass';
import AddPet from './views/addPet';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recoverpass" element={<RecoverPass />} />
          <Route path="/addpet" element={<AddPet />} />
        </Routes>
      </BrowserRouter>
  )
}

export default injectContext(App);
