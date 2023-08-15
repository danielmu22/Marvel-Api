import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logos/Logo Marvel.png';

function Header() {
  return (
    <header>
      
      <NavLink to="/home"><a href=""><img className="logo" src={logo} alt="Logo Marvel" /></a></NavLink> {/* ENLACE A HOME*/}
      <nav>
        <Link className="nav__a--color nav__a" to="/home">INICIO</Link> {/* ENLACE A HOME*/}
        <i className="bi bi-house" id="icono" />
        {' '}
        <Link className="nav__a--color nav__a" to="/personajes">PERSONAJES</Link> {/* ENLACE A PERSONAJES*/}
        <i className="bi bi-person" id="icono2" />
        {' '}
        <Link  className="nav__a--color nav__a" to="/comics">COMICS</Link> {/* ENLACE A COMICS*/}
        {/* <i className="glyphicon glyphicon-book" id="icono3" /> */}
        <i className="bi bi-book" id="icono3" />
      </nav>
    </header>
  );
}

export default Header;
