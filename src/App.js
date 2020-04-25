import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error'

class App extends Component {

  state={
    error: '',
    consulta:{}
  }

  componentDidUpdate(){
    this.consultarAPI();
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
      // console.log('Todo bien');
      this.setState({
        consulta:respuesta
      })
    }
    
  }

  consultarAPI=()=>{
    const {ciudad,pais}=this.state.consulta;

    if(!ciudad || !pais) return null;

    // console.log(`${ciudad} ${pais}`);
    const appID='95205ad16019a9cabe176b3b829003d8';

    const url=`https://samples.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`

    console.log(url);
    
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
