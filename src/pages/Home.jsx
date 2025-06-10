import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="links">
        <Link to="https://github.com/Danzete" className="link-button">Git Hub</Link>
        <Link to="tema" className="link-button">Tema Claro/Escuro</Link>
        <Link to="mensagem" className="link-button">Mensagem de Boas-Vindas</Link>
        <Link to="lista" className="link-button">Lista de Tarefas</Link>
      </div>
    </div>
  );
}

export default Home;