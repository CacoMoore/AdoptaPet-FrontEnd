import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import injectContext from "./store/context";
import Home from './views/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import './styles/photoGallery.css'
import './styles/singlePet.css'
import SinglePet from './views/singlePet';
import PhotoGallery from './views/photoGallery';
import Login from './views/login';
import Register from './views/register';
import RecoverPass from './views/recoverPass';
import AddPet from './views/addPet';
import Info from './views/info';
import Adopform from './views/adopform';


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
        <Route path="/adopform" element={<Adopform />} />


        {/*SECCION DE GALERIA DE FOTOS Y INFORMACION INDIVIDUAL DE CADA PET */}
        <Route path="/photoGallery" element={<PhotoGallery />} />
        <Route path="/pet" element={<SinglePet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);