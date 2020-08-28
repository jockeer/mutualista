import React, {useContext, useEffect} from 'react'

import Sector from './Sector'
import sectorContext from '../../context/sectores/sectorContext'

const ListadoSectores = () => {

    const sectoresContext = useContext(sectorContext);
    const {sectores, obtenerSectores} = sectoresContext

    useEffect(() => {
        obtenerSectores();
    }, [])

    if(sectores.length === 0){
        return null;
    }

    return ( 
        <ul className="listado-proyectos">
            {sectores.map( sector => {
                return <Sector key={sector.id} sector={sector}/>
            })}
        </ul>
     );
}
 
export default ListadoSectores;