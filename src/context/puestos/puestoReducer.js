import { FORMULARIO_PROYECTO, PUESTOS_SECTOR } from '../../types'

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case PUESTOS_SECTOR:
            return{
                ...state,
                puestossector: state.puestos.filter( puesto => {
                    return puesto.sectorId === action.payload
                })
            }
        default:
            return state;
    }
}