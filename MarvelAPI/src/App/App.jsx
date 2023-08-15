import { Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Header />
      <Outlet /> {/* CARGA LOS DATOS DE LOS COMPONENTES DE LAS RUTAS Y EL COMPONENTE HOME*/}
      <Footer />
    </div>
  );
}
