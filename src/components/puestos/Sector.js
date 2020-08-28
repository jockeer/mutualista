import React, {useContext} from 'react';

import sectorContext from '../../context/sectores/sectorContext'
import puestoContext from '../../context/puestos/puestoContext'

const Sector = ({sector}) => {

    const sectoresContext = useContext(sectorContext);
    const {sectorActual} = sectoresContext

    const puestosContext = useContext(puestoContext);
    const {obtenerPuestos} = puestosContext

    const seleccionarSector = () =>{
        sectorActual(sector.id) // fijar un sector actual
        obtenerPuestos(sector.id)
    }

    //funcionn

    return ( 
        <li>
            <button type="button" className="btn btn-blank" onClick={seleccionarSector}>
                {sector.nombre}
            </button>
        </li>
     );
}
 
export default Sector;