import React from 'react';

import ListadoSectores from '../puestos/ListadoSectores'
const Sidebar = () => {
    return ( 
        <aside>
            <h1>Mutualista<span> Administracion</span></h1>

            <div className="proyectos">
                <h2>Sectores</h2>
                <ListadoSectores />
            </div>
        </aside>
     );
}
 
export default Sidebar;