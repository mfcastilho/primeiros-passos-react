import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Header name="ProgBr" links={["Sobre", "Comprar", "Contato", "Login", "Sair "]}></Header>
  );
}

export default App;
