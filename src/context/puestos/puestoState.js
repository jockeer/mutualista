    import React,{useReducer} from 'react';

    import puestoContext from './puestoContext'
    import puestoReducer from './puestoReducer'
    import { FORMULARIO_PROYECTO, OBTENER_PUESTOS } from '../../types'

    const PuestoState = props => {
        const initialState = {
            puestos : [
                { id:1, nombre: 'Puesto 1', dueno:'Daniel Gorianz', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: true},
                { id:2, nombre: 'Puesto 2', dueno:'Pedro Mendoza', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: false},
                { id:3, nombre: 'Puesto 3', dueno:'Carlos Gutierrez', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: true},
                { id:4, nombre: 'Puesto 4', dueno:'Pablo Hurtado', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: true},
                { id:5, nombre: 'Puesto 5', dueno:'Pablo Hurtado', encargado:'Ismael Aliaga', ultimoPago: '27/08/2020', estado: true},
            ],
            formulario : false
        }

        //dispatch para ejecutar las acciones
       const [state, dispatch] = useReducer(puestoReducer, initialState)

       //serie de funciones para el CRUD

       const mostrarFormulario = () => {
           dispatch({
               type: FORMULARIO_PROYECTO
           })
       }

       return (
           <puestoContext.Provider value={{
                puestos: state.puestos,
                formulario: state.formulario,
                mostrarFormulario
           }}>
               {props.children}
           </puestoContext.Provider>
       )
    }

export default PuestoState;