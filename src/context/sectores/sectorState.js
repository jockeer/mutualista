import React,{useReducer} from 'react';

import sectorContext from './sectorContext'
import sectorReducer from './sectorReducer'
import { OBTENER_SECTORES } from '../../types'

const sectores = [
    { id:1, nombre: ' Sector Carne '},
    { id:2, nombre: ' Sector Frutas '},
    { id:3, nombre: ' Sector Ropa'},
    { id:4, nombre: ' Sector Medicinas'},
]
const SectorState = props => {
    const initialState = {
        sectores : []
    }

    //dispatch para ejecutar las acciones
   const [state, dispatch] = useReducer(sectorReducer, initialState)

   //serie de funciones para el CRUD

   // Obtener los sectores
   const obtenerSectores = sectores => {
        dispatch({
            type: OBTENER_SECTORES,
            payload: sectores
        })
   }

   return (
       <sectorContext.Provider value={{
            sectores: state.sectores
       }}>
           {props.children}
       </sectorContext.Provider>
   )
}

export default SectorState;