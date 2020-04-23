import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  state={
    ciudad:'',
    pais:'',
    error: false
  }

  buscandoClima = (respuesta) =>{
    const {ciudad, pais}=respuesta;
    if(ciudad === '' || pais === ''){
      // console.log('Error');
      this.setState({
        error:true
      })      
    }else{
      console.log('Todo bien');
      
    }
    
  }

  render(){
        return (
          <div className="app">
              <Header 
                titulo="Aplicacion del Clima"
              />
              <Formulario 
                buscandoClima={this.buscandoClima}
              />
          </div>
        );
  }
}

export default App;
