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
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Adopform from './views/adopform';
import User from './views/user';
import AddPost from './views/addPost';
import AddDescription from './views/addDescription';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverPass" element={<RecoverPass />} />
        <Route path="/addPet" element={<AddPet />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/info" element={<Info />} />
        <Route path="/adopForm" element={<Adopform />} />
        <Route path="/user" element={<User />} />
        <Route path="/addDescription" element={<AddDescription />} />


        {/*SECCION DE GALERIA DE FOTOS Y INFORMACION INDIVIDUAL DE CADA PET */}
        <Route path="/photoGallery" element={<PhotoGallery />} />
        <Route path="/pet" element={<SinglePet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);