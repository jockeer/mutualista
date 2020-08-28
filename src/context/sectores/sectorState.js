import React,{useReducer} from 'react';

import sectorContext from './sectorContext'
import sectorReducer from './sectorReducer'
import { OBTENER_SECTORES,SECTOR_ACTUAL } from '../../types'


const SectorState = props => {
    const sectores = [
        { id:1, nombre: ' Sector Carne '},
        { id:2, nombre: ' Sector Frutas '},
        { id:3, nombre: ' Sector Ropa'},
        { id:4, nombre: ' Sector Medicinas'},
    ]

    const initialState = {
        sectores : [],
        sector: null
    }

    //dispatch para ejecutar las acciones
   const [state, dispatch] = useReducer(sectorReducer, initialState)

   //serie de funciones para el CRUD

   // Obtener los sectores
   const obtenerSectores = () => {
        dispatch({
            type: OBTENER_SECTORES,
            payload: sectores
        })
   }

   //selecciona el sector que el usuario dio click

   const sectorActual = sectorID =>{
       dispatch({
           type:SECTOR_ACTUAL,
           payload: sectorID
       })
   }

   return (
       <sectorContext.Provider value={{
            sectores: state.sectores,
            sector:state.sector,
            obtenerSectores,
            sectorActual
       }}>
           {props.children}
       </sectorContext.Provider>
   )
}

export default SectorState;