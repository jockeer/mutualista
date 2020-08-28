import React, {Fragment,useContext,useEffect} from 'react';

import Puesto from './Puesto'

// import puestoContext from '../../context/puestos/puestoContext'
import sectorContext from '../../context/sectores/sectorContext'
import puestoContext from '../../context/puestos/puestoContext'

const ListadoPuestos = () => {

    const sectoresContext = useContext(sectorContext);
    const {sector} = sectoresContext
    
    const puestosContext = useContext(puestoContext);
    const {puestossector,llenarPuestos} = puestosContext

    useEffect(() => {
        llenarPuestos();
    }, [])
    
    if(!sector){
        return <h2>Selecciona un proyecto</h2>
    }

    //aplicando arra destructure
    const [sectorActual] = sector

    

    
    return ( 
        <Fragment>
            <h2>Sector: {sectorActual.nombre} </h2>
            <ul className="listado-tareas">
                {puestossector.length === 0 
                    ? <li className="tarea"><p>No hay Puestos</p></li>
                    :   puestossector.map( puesto => {
                            return <Puesto key={puesto.idpuesto} puesto={puesto} />
                        })
                }
                
            </ul>

        </Fragment>
     );
}
 
export default ListadoPuestos;