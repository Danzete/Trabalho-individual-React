import React, { useState } from 'react';

function WelcomeMessage() {
  const [message, setMessage] = useState('Olá!');
  const [buttonText, setButtonText] = useState('Entrar');

  const handleClick = () => {
    setMessage('Bem-vindo!');
    setButtonText('Home'); 
    if (buttonText === 'Home') {
      window.location.href = '/';
    }
  };

  return (
    <div className="welcome-container">
      <p>{message}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default WelcomeMessage;