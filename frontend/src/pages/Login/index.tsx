import React from 'react';
import Button from '../../Components/Button';
import { Input } from '../../Components/Input';
import logo from '../../assets/images/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <>
      <div className="container-login">
        <div className="image">
          <img className="logo" src={logo} alt="Computer Instructor logo" />
        </div>
        <div className="formulario">
          <div className="container-login-return">
            <Link to="/">
              <FiArrowLeft size={32} color="#4174F6" />
            </Link>
          </div>
          <h1>Login</h1>
          <form action="">
            <label htmlFor="email">
              E-mail:
              <Input id="email" placeholder="usuario@email.com" type="email" />
            </label>
            <label htmlFor="password">
              Senha:
              <Input id="password" type="password" placeholder="********" />
            </label>
            <span>
              Não possui uma conta? <a href="">Cadastre-se</a>
            </span>
            <Button typeButton="submit" text="Entrar" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
