import React, { Component } from 'react';

class Clima extends Component {

    mostraResultado=()=>{

        const {name, weather, main}=this.props.resultado;

        if( !name || !weather || !main)
            return null;

        return(
            <h1>{name}</h1>
        );
    }
    
    render() {

        console.log(this.props.resultado );
    
        return (
            <div className="container">
                {this.mostraResultado()}
            </div>
        );
    }
}

export default Clima;