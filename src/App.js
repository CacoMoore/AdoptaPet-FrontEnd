import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import injectContext from "./store/context";
import Home from './views/home';
import './styles/photoGallery.css'
import Footer from './components/footer';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />  
      </BrowserRouter>
  );
}

export default injectContext(App);
