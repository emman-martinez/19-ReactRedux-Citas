import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA } from './../actions/types';

// state inicial, cada reducer debe tener su propio state
const initialState = {
    citas: [
        // {
        //     id: 0,
        //     fecha: "10-20-30",
        //     hora: "10:30",
        //     mascota: "Caloncho",
        //     propietario: "Emmanuel",
        //     sintomas: "No quiere comer"
        // },
        // {
        //     id: 1,
        //     fecha: "10-20-30",
        //     hora: "10:30",
        //     mascota: "Zoe",
        //     propietario: "Emmanuel",
        //     sintomas: "No quiere comer"
        // }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case MOSTRAR_CITAS:
            return {
                ...state
            }
        case AGREGAR_CITA:
            return {
                ...state,
                citas: [...state.citas, action.payload] // Copia del state
            }
        case BORRAR_CITA:
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
        default:
            return state;
    }
}