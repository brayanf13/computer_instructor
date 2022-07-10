import React from 'react';
import Button from '../../Components/Button';
import { Input } from '../../Components/Input';

import './styles.css';

export function Home() {
  return (
    <>
      <div className="container">
        <div className="image">imagem aqui</div>
        <div className="formulario">
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

export default Home;
