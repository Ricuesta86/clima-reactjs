import React, { Component } from 'react';

class Formulario extends Component {

    ciudadRef=React.createRef();
    paisRef=React.createRef();


    buscarClima = (e) => {
        e.preventDefault();

        // leer los ref y crear los objetos
        const respuesta={
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }
        console.log(respuesta);
        
    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}> 
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudadRef} type="text" id="ciudad"/>
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select id="pais" ref={this.paisRef}>
                                    <option value="" defaultValue>Escoge un País</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">México</option>
                                    <option value="PE">Perú</option>
                                </select>
                                <label htmlFor="pais">País:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-ligth btn-large yellow accent-4" value = "Buscar ..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Formulario;