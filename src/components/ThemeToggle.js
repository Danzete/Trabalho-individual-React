import React, { useState } from 'react';
import Logo from '../assets/123.png';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark(!dark);
    document.body.style.backgroundColor = !dark ? '#000' : '#fff';
    document.body.style.color = !dark ? '#fff' : '#000';
  };

  return (
    <div>
      <img src={Logo} alt="Imagem do tema" style={{ width: '100px'}} />
      <button onClick={handleToggle} style={{display: 'flex', margin: ' auto', justifyContent: 'center', alignContent: 'center' }}>
        {dark ? 'Tema Claro' : 'Tema Escuro'}
      </button>

    </div>
  );
}

export default ThemeToggle;