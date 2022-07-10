import React from 'react';

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
              <input
                id="email"
                type="email"
                placeholder="usuario@email.com"
                required
              />
            </label>
            <label htmlFor="password">
              Senha:
              <input
                id="password"
                type="password"
                placeholder="********"
                required
              />
            </label>
            <span>
              Não possui uma conta? <a href="">Cadastre-se</a>
            </span>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;