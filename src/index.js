import React from 'react';
/*
É importado o React pois ele permite que seja usado 
arquivos jsx,mesmo ele não sendo chamdo em nenhum lugar 
*/
import ReactDOM from 'react-dom/client';
/*É usado para renderizar objetos jsx na tela */
import App from './App';
//importa o componente "App"

//renderiza o componente na div chamada "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
