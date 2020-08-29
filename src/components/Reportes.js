import React,{Fragment,useState} from 'react';

import Barra from './layout/Barra'
import Reporte1 from './reportes/Reporte1'
import Reporte2 from './reportes/Reporte2'
const Reportes = () => {

    const [opcion, guardarOpcion]=useState({
        opcionElegida:''
    })
    const [datosReporte, guardarDatosReporte]=useState([])

    const {opcionElegida} = opcion

    const onChange = e =>{
        guardarOpcion({
            ...opcion,
            [e.target.name]:e.target.value
        })
        guardarDatosReporte([])
    }
    const onSubmit = async e =>{
        e.preventDefault();
        if (opcionElegida === 'Reporte 1') {
            const API = await fetch('http://localhost:4000/api/reporte1');
            const respuesta = await API.json()
            guardarDatosReporte(respuesta)
        }
    }

    return ( 
        <Fragment>
            <Barra/>
            <div className="container">
                <h2 className="nombrePuesto">Reportes</h2>
                <form className="formReporte" onSubmit={onSubmit}>       
                    <div className="campo-form btt">
                        <select name="opcionElegida" value={opcionElegida} onChange={onChange} id="">
                            <option value="" disabled>Seleccione un Reporte</option>
                            <option value="Reporte 1">Reporte 1</option>
                            <option value="Reporte 2">Reporte 2</option>
                            <option value="Reporte 3">Reporte 3</option>
                        </select>
                    </div>
                    <div className="campo-form btt">
                        <input type="submit" className="buttonBuscar" value="Buscar"></input>
                    </div>
                </form>
                
                {opcionElegida==='Reporte 1'
                ?<Reporte1 datosReporte={datosReporte}/>
                :opcionElegida==='Reporte 2'
                ?<Reporte2 datosReporte={datosReporte}/>
                :null
                }
                
            </div>

        </Fragment>
     );
}
 
export default Reportes;