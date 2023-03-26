import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import injectContext from "./store/context";
import Home from './views/home';
import './styles/photoGallery.css'
import './styles/singlePet.css'
import Footer from './components/footer';
import NavBar from './components/navbar';
import SinglePet from './views/singlePet';
import PhotoGallery from './views/photoGallery';
import Login from './views/login';
import Register from './views/register';
import RecoverPass from './views/recoverPass';
import AddPet from './views/addPet';
import Info from './views/info';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverpass" element={<RecoverPass />} />
        <Route path="/addpet" element={<AddPet />} />
        <Route path="/info" element={<Info />} />



        <Route path="/photoGallery" element={<PhotoGallery />} />
        <Route path="/pet" element={<SinglePet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );


}

export default injectContext(App);
