import React, { Component } from 'react';
import Header from './componentes/Header';

class App extends Component {
  render(){
        return (
          <div className="app">
              <Header 
                titulo="Aplicacion del Clima"
              />
          </div>
        );
  }
}

export default App;
