import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../img/logos/fb.png';
import twitter from '../../img/logos/tw.png';
import instagram from '../../img/logos/inst.png';
import youtube from '../../img/logos/youtube.png';

function Footer() {
  return (
    <footer className='pie'>
      <center>
        <a href="https://www.facebook.com/marvel" target="_blank" rel="noopener noreferrer">
          <img className="footer__image" src={facebook} alt="facebook" width="100px" />
        </a>
        <a href="https://www.twitter.com/marvel" target="_blank" rel="noopener noreferrer">
          <img className="footer__image" src={twitter} alt="twitter" width="100px" />
        </a>
        <a href="https://www.instagram.com/marvel" target="_blank" rel="noopener noreferrer">
          <img className="footer__image" src={instagram} alt="instagram" width="100px" />
        </a>
        <a href="https://www.youtube.com/marvel" target="_blank" rel="noopener noreferrer">
          <img className="footer__image" src={youtube} alt="youtube" width="100px" />
        </a>
        <br/><br/>
        <p>©2022 MARVEL</p>
      </center>
    </footer>
  );
}

export default Footer;
