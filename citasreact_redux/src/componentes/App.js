import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';
import Imagen from './Imagen';

// ***** Redux ***** 
import { Provider } from 'react-redux';
import store from './../store/store';

class App extends Component {

  state = {
    citas: []
  }

  /* ***** Ciclo de vida de los componentes ***** */

  // ***** componentDidMount()
  componentDidMount() {
    // console.log('Esta listo');
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS) // Convierte de un string a un objeto
      })
    }
  }

  // ***** componentDidUpdate()
  componentDidUpdate() {
    //console.log('¡¡Algo cambio!!');
    /* ***** Uso de Local Storage: Solo puede almacenar cadenas de texto ***** */
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas) // Convierte de un objeto a un string
    )
  }

  /*
  // ***** componentWillMount()
  componentWillMount() {
    console.log('Yo me ejecuto antes');
  }

  // ***** componentWillUnmount()
  componentWillUnmount() {
    console.log('Yo hasta que se cierra el componente');
  }
  */

  crearCita = (nuevaCita) => {
    // console.log('Desde app.js');
    //console.log(cita); // Viene de Formulario
    const citas = [...this.state.citas, nuevaCita]; // Copia del state
    console.log(citas);

    this.setState({
      citas: citas,
    })
  }

  borrarCita = id => {
    console.log(id);
    // ***** Obtener copia del state
    const citasActuales = [...this.state.citas];
    /*
    console.log('Antes...');
    console.log(citasActuales);
    */

    // ***** Borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    /*
    console.log('Despues...');
    console.log(citas);
    */

    // ***** Actualizar el state
    this.setState({
      citas
    });

  }

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
                            crearCita={this.crearCita}
              ></AgregarCita>
            </div>
            {/* ***** Componente: ListaCitas ***** */}
            <div className="col-md-6">
              <ListaCitas
                          citas={this.state.citas}
                          borrarCita={this.borrarCita}
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
