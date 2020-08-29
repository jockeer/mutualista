import React, {Fragment,useContext,useEffect,useState} from 'react';

import BarraDetalle from '../layout/BarraDetalle'
// import puestoContext from '../../context/puestos/puestoContext'

import axios from 'axios';
import Guardia from '../puestos/Guardia';
import Vendedor from '../puestos/Vendedor'

const DetallePuesto = ({match}) => {

    // const puestosContext = useContext(puestoContext);
    // const {puesto,obtenerPuesto} = puestosContext

    const [infoPuesto, guardarInfoPuesto] = useState({})
    const [listaPersonas, guardarListaPersonas] = useState([])
    const [listaGuardias, guardarListaGuardias] = useState([
    ])

    useEffect(() => {
        const traerPuestoElegido =  async () => {
            const APIINFOPUESTO =`http://localhost:4000/api/obtenerPuesto/${match.params.idpuesto}`;
            const APILISTAPERSONAS =`http://localhost:4000/api/obtenerPersonas/${match.params.idpuesto}`;
            const APILISTAGUARDIAS =`http://localhost:4000/api/obtenerGuardias/${match.params.idsector}`;
            
            
            const [info,personas,guardias] = await Promise.all([
                axios(APIINFOPUESTO),
                axios(APILISTAPERSONAS),
                axios(APILISTAGUARDIAS)
            ])
            guardarInfoPuesto(info.data[0])  
            guardarListaPersonas(personas.data)  
            guardarListaGuardias(guardias.data)  
        }

        traerPuestoElegido()
    }, [])
    
    const { nombre} = infoPuesto
    return ( 
        <Fragment>
            <BarraDetalle/>
            <div className="container">
                <h2 className="nombrePuesto">{nombre}</h2>
                <h3>Sector: Sector 1</h3>
                <h2>Guardias del Sector</h2>
                    <ul className="listado-guardia">
                        {listaGuardias.length === 0
                            ? <p className="tarea">No hay guardias en este sector</p>
                            : listaGuardias.map(guardia => {
                                 return <Guardia key={guardia.id} guardia={guardia}/>
                          })
                        }
                        
                    </ul>

                <h2>Personas del puesto</h2>
                <ul className="listado-guardia">
                        {listaPersonas.length === 0
                            ? <p className="tarea">no hay personas</p>
                            : listaPersonas.map(persona => {
                                 return <Vendedor key={persona.id} persona={persona}/>
                          })
                        }
                        
                    </ul>
                
            </div>       
        </Fragment>
     );
}
 
export default DetallePuesto;