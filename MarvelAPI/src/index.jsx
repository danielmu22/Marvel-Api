import { render } from 'react-dom';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Comics from './routes/Comics';
import Personajes from './routes/Personajes';
import Home from './App/components/Home/Home';
import PersonajeSelect from './routes/PersonajesSelect'
import ComicSelect from './routes/ComicsSelect'
import error from './App/img/404.png';
import './App/App.css'

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} /> {/* Ruta que se ejecuta al iniciar la aplicación. Te carga el Home con la info de Marvel */}
        <Route path="home" element={<Home />} /> {/* Ruta a la que te lleva el enlace de Inicio */}
        <Route path="comics" element={<Comics />} /> {/* Ruta a la que te lleva el enlace de Comics. Carga la lista de Comics  */}
        <Route path="personajes" element={<Personajes />} /> {/* Ruta a la que te lleva el enlace de Personajes. Carga la lista de Personajes */}
        <Route path="personajeseleccionado/:idpersonaje" element={<PersonajeSelect />} /> {/* Ruta a la que te lleva al pinchar en un Personaje */}
        <Route path="comicseleccionado/:idcomic" element={<ComicSelect />}> {/* Ruta a la que te lleva al pinchar en un Comic */}
        </Route>

        {/* RUTA DE ERROR. SE EJECUTA CUANDO PONES UNA RUTA QUE NO EXISTE */}
        <Route
          path="*"
          element={(
            <main style={{ padding: '1rem' }}>
              <div className="error">
                <section>
                  <p className="titulo">404 PÁGINA NO ENCONTRADA 🙁</p>
                  <br />
                  <p className="error__p">HYDRA ha robado esta página de la base de datos de S.H.I.E.L.D.</p>
                  <div className="separacion" />
                  <div className="separacion" />
                  <p className="error__p">Comprueba que has escrito bien la URL.</p>
                </section>
                <img src={error} alt="Capitana Marvel asustada" />
              </div>
              <br />
            </main>
          )}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);
