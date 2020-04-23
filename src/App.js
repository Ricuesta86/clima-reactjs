import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {
  render(){
        return (
          <div className="app">
              <Header 
                titulo="Aplicacion del Clima"
              />
              <Formulario />
          </div>
        );
  }
}

export default App;
