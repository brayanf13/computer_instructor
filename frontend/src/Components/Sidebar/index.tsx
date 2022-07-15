import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-min.svg';
import PowerOffIcon from '../../assets/images/power.svg';
import InfoIcon from '../../assets/images/info.svg';

import './styles.css';

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(e: SyntheticEvent) {
  if (e.type === 'touchstart') e.preventDefault();

  const nav = document.getElementById('nav');
  if (nav) {
    nav.classList.toggle('ativo');
    // ! ACESSIBILIDADE: serve para o leitor de HTML da página identificar quando o elemento pode ser expandido (se a classe ativo existir, significa que sim e está expadido, se não, permanece como "false")
    const ativado = nav.classList.contains('ativo');
    e.currentTarget.setAttribute('aria-expanded', 'ativado');
    //  ! ACESSIBILIDADE: serve para alterar o texto do leitor para o botão. Se está aberto o botão terá o label de fechar, se está fechado o terá o valor de abrir.
    if (ativado) {
      e.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
      e.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
  }
}

export function Sidebar() {
  return (
    <>
      <header id="header">
        <a href="">
          <img className="logo" src={Logo} alt="logo" />
        </a>

        <nav id="nav">
          <button
            onClick={(e) => toggleMenu(e)}
            aria-label="Abrir menu"
            id="btn-mobile"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
          >
            <span id="hamburguer"></span>
          </button>
          <ul id="menu" role="menu">
            <Link className="option-menu" to={'/'}>
              <img src={InfoIcon} alt="info" />
              Informações
            </Link>
            <Link className="option-menu" to={'/'}>
              <img src={PowerOffIcon} alt="power off" />
              Sair
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Sidebar;
