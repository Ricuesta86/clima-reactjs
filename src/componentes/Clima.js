import React, { Component } from 'react';

class Clima extends Component {
    
    render() {

        console.log(this.props.resultado);
    
        return (
            <div className="container">
                desde clima.js
            </div>
        );
    }
}

export default Clima;