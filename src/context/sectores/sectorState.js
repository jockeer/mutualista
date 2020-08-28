import React,{useReducer} from 'react';

import sectorContext from './sectorContext'
import sectorReducer from './sectorReducer'
import { OBTENER_SECTORES,SECTOR_ACTUAL } from '../../types'


const SectorState = props => {

    const initialState = {
        sectores : [],
        sector: null
    }

    //dispatch para ejecutar las acciones
   const [state, dispatch] = useReducer(sectorReducer, initialState)

   //serie de funciones para el CRUD

   // Obtener los sectores
   const obtenerSectores = async () => {
       const API = await fetch('http://localhost:4000/api/obtenerSectores')
       const repuesta = await API.json()
        dispatch({
            type: OBTENER_SECTORES,
            payload: repuesta
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