import React, { useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark(!dark);
    document.body.style.backgroundColor = !dark ? '#222' : '#fff';
    document.body.style.color = !dark ? '#fff' : '#222';
  };

  return (
    <button onClick={handleToggle}>
      {dark ? 'Tema Claro' : 'Tema Escuro'}
    </button>
  );
}

export default ThemeToggle;