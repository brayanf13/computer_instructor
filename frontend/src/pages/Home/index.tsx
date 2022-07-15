import React from 'react';
import animation from '../../assets/images/animated.gif';
import { FiEye, FiSave } from 'react-icons/fi';

import './styles.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';

export function Home() {
  return (
    <>
      <Sidebar />
      <div className="container-home">
        <div className="container-home-apresentation">
          <div className="image">
            <img className="logo" src={animation} alt="animation" />
          </div>
          <div>
            <div className="container-home-options">
              <h2>Bem vindo !</h2>
              <Link className="button" to={'/login'}>
                <FiSave size={24} />
                Cadastrar conteúdo
              </Link>
              <Link className="button" to={'/login'}>
                <FiEye size={24} />
                Assistir aulas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
