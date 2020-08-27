import React from 'react';

const Sector = ({sector}) => {
    return ( 
        <li>
            <button type="button" className="btn btn-blank">
                {sector.nombre}
            </button>
        </li>
     );
}
 
export default Sector;