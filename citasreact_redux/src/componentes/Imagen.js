import React, { Component } from 'react';
import logo from './../img/logo.svg';
import './../css/App.css';

class Imagen extends Component {
    render() {
        return(
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default Imagen;