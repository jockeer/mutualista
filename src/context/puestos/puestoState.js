    import React,{useReducer} from 'react';

    import puestoContext from './puestoContext'
    import puestoReducer from './puestoReducer'

    import { FORMULARIO_PROYECTO, PUESTOS_SECTOR, OBTENER_PUESTOS, OBTENER_PUESTO } from '../../types'

    const PuestoState = props => {
        const initialState = {
            puestos : [],
            formulario : false,
            puestossector:null,
            puesto:null
        }

        //dispatch para ejecutar las acciones
       const [state, dispatch] = useReducer(puestoReducer, initialState)

       //serie de funciones para el CRUD

       const mostrarFormulario = () => {
           dispatch({
               type: FORMULARIO_PROYECTO
           })
       }

       //obtener los puestos

       const obtenerPuestos = async sectorId => {
           dispatch({
               type:PUESTOS_SECTOR,
               payload:sectorId
           })
       }
       //Llenar todos los puestos
       const llenarPuestos = async () => {
        const API = await fetch(`http://localhost:4000/api/obtenerPuestos`)
        const respuesta = await API.json()
           dispatch({
               type:OBTENER_PUESTOS,
               payload:respuesta
           })
       }

       //obtener puesto

       const obtenerPuesto = async puestoId => {
        const API = await fetch(`http://localhost:4000/api/obtenerPuesto/${puestoId}`)
        const respuesta = await API.json()
        dispatch({
            type:OBTENER_PUESTO,
            payload:respuesta
        })
    }

       return (
           <puestoContext.Provider value={{
                puestos: state.puestos,
                formulario: state.formulario,
                puestossector: state.puestossector,
                puesto:state.puesto,
                mostrarFormulario,
                obtenerPuestos,
                llenarPuestos,
                obtenerPuesto
           }}>
               {props.children}
           </puestoContext.Provider>
       )
    }

export default PuestoState;