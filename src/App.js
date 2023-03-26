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

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/photoGallery" element={<PhotoGallery />} />
        <Route path="/pet" element={<SinglePet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default injectContext(App);
