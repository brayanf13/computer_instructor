import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import { Input } from '../../Components/Input';

import './styles.css';

export function Register() {
  return (
    <>
      <div className="container-register">
        <form className="form-register">
          <div className="container-register-return">
            <Link to="/login">
              <FiArrowLeft className="logo-icon" size={32} color="#4174F6" />
            </Link>
            <h1>Cadastro</h1>
            <span>Preencha os campos abaixo:</span>
          </div>
          <label htmlFor="email">
            E-mail:
            <Input id="email" placeholder="usuario@email.com" type="email" />
          </label>
          <label htmlFor="password">
            Senha:
            <Input id="password" type="password" placeholder="********" />
          </label>
          <Button typeButton="submit" text="Criar" />
        </form>
      </div>
    </>
  );
}
