import React, {Fragment,useContext} from 'react';

import Puesto from './Puesto'

import puestoContext from '../../context/puestos/puestoContext'

const ListadoPuestos = () => {

    //Extraer puestos de state inicial
    const puestosContext = useContext(puestoContext);
    const { puestos } = puestosContext;

    //Revisar puestos tienen contenido
    if(puestos.length === 0){
        return null;
    }
    
    return ( 
        <Fragment>
            <h2>Sector: Sector Carne </h2>
            <ul className="listado-tareas">
                {puestos.length === 0 
                    ? <li className="tarea"><p>No hay Tareas</p></li>
                    :   puestos.map( puesto => {
                            return <Puesto key={puesto.id} puesto={puesto} />
                        })
                }
                
            </ul>

        </Fragment>
     );
}
 
export default ListadoPuestos;