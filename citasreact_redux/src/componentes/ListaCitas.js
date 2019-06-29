import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { obtenerCitas } from './../actions/citasActions';

import store from './../store/store';
store.subscribe( () => {
    // console.log(store.getState());
    localStorage.setItem('citas', JSON.stringify(store.getState()));
})

class ListaCitas extends Component {

    componentDidMount() {
        this.props.obtenerCitas();
    }

    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra tus Citas Aquí'
        // console.log(Object.keys(citas).length); 

        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {/* ***** Componente: Cita ***** */}
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita 
                                    key={cita}
                                    info={this.props.citas[cita]}
                                    // borrarCita={this.props.borrarCita}
                            ></Cita>
                        ))}
                    </div>      
                </div>
            </div>
        )
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    // borrarCita: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    citas: state.citas.citas,
})

export default connect(mapStateToProps, { obtenerCitas }) (ListaCitas);