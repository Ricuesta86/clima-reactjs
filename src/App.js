import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error'
import Clima from './componentes/Clima';

class App extends Component {

  state={
    error: '',
    consulta:{},
    resultado:{}
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarAPI();
    }
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
        consulta:respuesta,
        error:false
      })
    }
    
  }

  consultarAPI=()=>{
    const {ciudad,pais}=this.state.consulta;

    if(!ciudad || !pais) return null;
    // console.log(`${ciudad} ${pais}`);

    // leer la url y agregamos el api key
    const appID='95205ad16019a9cabe176b3b829003d8';

    const url=`https://samples.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`

    // console.log(url);
    // const myHeaders = new Headers({
    //   "Access-Control-Allow-Origin": "*",
    //   "Content-Type": "application/json",
    //   "Cache-Control":{ "max-age":0, "private":true, "must-revalidate":true},
    //   "Content-Encoding" : "gzip",
    //   "charset":"utf-8"
    // });

    fetch('https://cors-anywhere.herokuapp.com/' + url)
    .then(respuesta =>{
      return respuesta.json();
      //  console.log(respuesta);
  
    })
    .then(datos=>{
      this.setState({
        resultado:datos
      })
      // console.log(datos);
      
    })
    .catch(error=>console.log(error))
    
  }


  render(){

      const error = this.state.error;

      let resultado;

      if(error){
        resultado=<Error mensaje='Ambos campos son obligatorios.' />
      }else{
        resultado=<Clima resultado = {this.state.resultado } />
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
