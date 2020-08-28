    import React,{useReducer} from 'react';

    import puestoContext from './puestoContext'
    import puestoReducer from './puestoReducer'

    import { FORMULARIO_PROYECTO, PUESTOS_SECTOR, OBTENER_PUESTOS, OBTENER_PUESTO } from '../../types'

    const PuestoState = props => {
        const initialState = {
            puestos : [
                { id:1, nombre: 'Puesto 1', dueno:'Daniel Gorianz', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: true, sectorId:1},
                { id:2, nombre: 'Puesto 2', dueno:'Pedro Mendoza', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: false, sectorId:2},
                { id:3, nombre: 'Puesto 3', dueno:'Carlos Gutierrez', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: true, sectorId:2},
                { id:4, nombre: 'Puesto 4', dueno:'Pablo Hurtado', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: true, sectorId:3},
                { id:5, nombre: 'Puesto 5', dueno:'Rodrigo Tapari', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: true, sectorId:4}
            ],
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