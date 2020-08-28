import React from 'react';
import { Link } from 'react-router-dom'

import ListadoSectores from '../puestos/ListadoSectores'
const Sidebar = () => {
    return ( 
        <aside>
            <h1>Mutualista<span> Administracion</span></h1>

            <div className="proyectos">
                <h2>Sectores</h2>
                <ListadoSectores />
            </div>
            <Link to='/reportes' className="btn-detalle btn-block">Reportes</Link>
        </aside>
     );
}
 
export default Sidebar;