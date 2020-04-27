import React, { Component } from 'react';

class Clima extends Component {
    
    render() {

        console.log(this.props.resulto);
    
        return (
            <div className="container">
                desde clima.js
            </div>
        );
    }
}

export default Clima;