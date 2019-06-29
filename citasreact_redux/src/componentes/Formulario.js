import React, { Component } from 'react';
import uuid from 'uuid'; // Crea ID único
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { agregarCita } from './../actions/citasActions';
import { mostrarError } from './../actions/errorActions';

class Formulario extends Component {

    componentWillMount() {
        this.props.mostrarError(false);
    }

    // ***** Refs
    nombreMascotaRef = React.createRef();
    nombrePropietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();

    // state = {
    //     error: false
    // }

    crearNuevaCita = (e) => {
        e.preventDefault();
        // console.log('Hiciste Click');

        const mascota = this.nombreMascotaRef.current.value,
            propietario = this.nombrePropietarioRef.current.value,
            fecha = this.fechaRef.current.value,
            hora = this.horaRef.current.value,
            sintomas = this.sintomasRef.current.value;

        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.props.mostrarError(true);
        } else {

            const nuevaCita = {
                id: uuid(),
                mascota: mascota,
                propietario, // Object Literal Enhacement
                fecha: fecha,
                hora, // Object Literal Enhacement
                sintomas: sintomas
            }

            // ***** Se envia el objeto hacia el padre
            this.props.agregarCita (nuevaCita);

            // ***** Reiniciar el formulario
            // console.log(e.currentTarget);
            e.currentTarget.reset();

            // ***** Elimina error
            this.props.mostrarError(false);

        }

    }

    render() {
        const existeError = this.props.error;

        return(
            <div>
                <form action="" onSubmit={this.crearNuevaCita}>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input ref={this.nombrePropietarioRef} type="text" className="form-control" placeholder="Nombre Dueño de la Mascota"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input ref={this.fechaRef} type="date" className="form-control" />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input ref={this.horaRef} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea ref={this.sintomasRef}  className="form-control"></textarea>
                        </div>
                    </div>

                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                    
                </form>

                {existeError ? <div className="alert alert-danger text-center">Todos los Campos son Obligatorios</div> : ''}
            </div>
        )
    }
}

Formulario.propTypes = {
    agregarCita: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    citas: state.citas.citas,
    error: state.error.error
})

export default connect(mapStateToProps, { agregarCita, mostrarError }) (Formulario);