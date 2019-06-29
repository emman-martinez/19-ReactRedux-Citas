import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';
import Imagen from './Imagen';

// ***** Redux ***** 
import { Provider } from 'react-redux';
import store from './../store/store';

class App extends Component {

  render(){
    return(
      <Provider store={store}>
        <div className="App container">
          {/* ***** Componente: Header ***** */}
          <Header
                  titulo={'Administrador de Pacientes de Veterinaria'}
          ></Header>
          {/* ***** Componente: Agregar Cita ***** */}
          <div className="row">
            <div className="col-md-6">
              <AgregarCita
                            // crearCita={this.crearCita}
              ></AgregarCita>
            </div>
            {/* ***** Componente: ListaCitas ***** */}
            <div className="col-md-6">
              <ListaCitas
                          // citas={this.state.citas}
                          // borrarCita={this.borrarCita}
              ></ListaCitas>
            </div>
          </div>
          {/* ***** Componente: Imagen ***** */}
          <div className="row">
            <div className="col-md-4 centro">
              <Imagen></Imagen>
            </div>
            <div className="col-md-4 centro">
              <h1 className='tamaño'>React</h1>
            </div>
            <div className="col-md-4 centro">
              <Imagen></Imagen>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

/*
function App() {
  return (
    
  );
}
*/

export default App;
