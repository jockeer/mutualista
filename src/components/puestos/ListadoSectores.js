import React, {useContext} from 'react'

import Sector from './Sector'
import sectorContext from '../../context/sectores/sectorContext'

const ListadoSectores = () => {

    const sectoresContext = useContext(sectorContext);
    const {sectores} = sectoresContext
    return ( 
        <ul className="listado-proyectos">
            {sectores.map( sector => {
                return <Sector key={sector.id} sector={sector}/>
            })}
        </ul>
     );
}
 
export default ListadoSectores;