import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error'

class App extends Component {

  state={
    ciudad:'',
    pais:'',
    error: ''
  }

  componentDidMount(){
    this.setState({
      error:false
    })
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

      const error = this.state.error;

      let resultado;

      if(error){
        resultado=<Error mensaje='Ambos campos son obligatorios.' />
      }



        return (
          <div className="app">
              <Header 
                titulo="Aplicacion del Clima"
              />
              <Formulario 
                buscandoClima={this.buscandoClima}
              />
              {resultado}
          </div>
        );
  }
}

export default App;
