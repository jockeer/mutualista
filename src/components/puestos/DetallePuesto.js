import React, {Fragment,useContext,useEffect,useState} from 'react';

import BarraDetalle from '../layout/BarraDetalle'
import puestoContext from '../../context/puestos/puestoContext'

import axios from 'axios';
import Guardia from '../puestos/Guardia';

const DetallePuesto = ({match}) => {

    // const puestosContext = useContext(puestoContext);
    // const {puesto,obtenerPuesto} = puestosContext

    const [infoPuesto, guardarInfoPuesto] = useState({})
    const [listaPersonas, guardarListaPersonas] = useState([])
    const [listaGuardias, guardarListaGuardias] = useState([
        {id:'1',nombre:'juan'},
        {id:'2',nombre:'Pedro'},
        {id:'3',nombre:'Daniel'},
    ])

    useEffect(() => {
        const traerPuestoElegido =  async () => {
            const API =`http://localhost:4000/api/obtenerPuesto/${match.params.id}`;
            
            
            const [info,personas] = await Promise.all([
                axios(API)
            ])
            guardarInfoPuesto(info.data[0])  
        }

        traerPuestoElegido()
    }, [])
    
    const {id, nombre, idsector} = infoPuesto
    return ( 
        <Fragment>
            <BarraDetalle/>
            <div className="container">
                <h3>Nombre del Puesto: {nombre}</h3>
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
                    <li>Nombre Completo, Cargo, telefono</li>
                    <li>Persona 2</li>
                    <li>Persona 3</li>
                    <li>Persona 4</li>
                    <li>Persona 5</li>
                </ul>
                
            </div>       
        </Fragment>
     );
}
 
export default DetallePuesto;