import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Content.css';
import imagen1 from '../../img/imagenes/comic.jpg';
import imagen2 from '../../img/imagenes/personajesComics.jpg';
import imagen3 from '../../img/imagenes/personajesComics2.jpg';
import comic from '../../img/imagenes/marvelComics.jpg'
import heroes from '../../img/imagenes/heroes.jpg'
import villanos from '../../img/imagenes/villanos.jpg'

function Content() {
  return (
    <div>
      {/* <div className="separacion" />
      <Carousel>
        <Carousel.Item>
          <img src={imagen1} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagen2} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagen3} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
      </Carousel> */}
      <div className="separacion" />

      <h1 className='vs__h1'>¿QUÉ ES MARVEL COMICS?</h1>
      <p className='vs__p'>Marvel Worldwide, conocida como Marvel Comics, es una editorial de historietas estadounidense creada en 1939,
        inicialmente con el nombre de Timely Publications. <br />Entre sus personajes emblemáticos del género superheroico se encuentran Spider-Man,
        Wolverine, X-Men, Capitán América, Iron Man, Hulk, Thor, Los 4 Fantásticos, Daredevil, Punisher, Los vengadores, entre otros. A partir
        de los años 1990, la compañía se posicionó como una de las principales editoriales de cómics del país. El 31 de agosto de 2009, The Walt
        Disney Company compró Marvel Entertainment por cerca de 4 000 millones de dólares, fusionándose con esta el 1 de enero de 2010.</p>
      <br/>
      <img src={comic} className="imagen" alt="Foto personajes marvel" />

      <div className="separacion" />
      <div className="separacion" />
      <div className='vs'>
        <div>
          <h1 className='vs__h1'>SUPERHEROES</h1>
          <p className='vs__p'>Los personajes de ficción que conforman el mundo Marvel son superhéroes con alguna peculiaridad como por ejemplo, Hulk.
            Es un humanoide que en su vida normal es un científico llamado Bruce Banner (en un experimento científico Bruce Banner recibió radiaciones
            y cuando se enfurece se transforma en Hulk, un ser de color verde y con una fuerza sobrehumana) </p>
          <p className='vs__p'>Otros superhéroes Marvel son Iron Man, Capitán América, Viuda Negra y Ghost Rider. Todos ellos tienen algunas características
            comunes: su condición de superhéroe la llevan en secreto, su vida está llena de aventuras y peligros y actúan con un espíritu justiciero.</p><br/>
          <img src={heroes} className="vs__img" alt="Foto heroes marvel" />
        </div>
        <h1 className='vs__h1'>vs</h1>
        <div>
          <h1 className='vs__h1'>VILLANOS</h1>
          <p className='vs__p'>Los villanos de ficción que aparecen en el universo de Marvel, son personajes que típicamente idean planes
            complejos y ambicioso para acumular poder y suprimir adversarios como por ejemplo Magneto. Es un supervillano con el poder de controlar
            todas las formas del magnetismo, lo que le permite: levitar, crear campos de fuerza, etc. </p>
          <p className='vs__p'>Otros villanos son Thanos, Loki, Galactus, Kingpin y Electro. Todos ellos tienen algun poder peculiar con el que
            intentarán llevar a cabo sus malvados planes y tendrán que enfrentarse a los superhéroes que intentan hacer que sus planes fracasen.</p><br/>
          <img src={villanos} className="vs__img" alt="Foto villanos marvel" />
        </div>
      </div>
      <div className="separacion" />
    </div>
  );
}

export default Content;
