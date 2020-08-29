import React from 'react'
import {Link} from 'react-router-dom'



const Puesto = ({puesto}) => {
    debugger
    return ( 
        <div className="card sombra">
            <div className="card-header">{puesto.nombre}</div>
            <div className="card-body">
                <h4>Dueño: {puesto.dueno}</h4>
                <h4>Deuda: {puesto.deuda} Bs.</h4>
                
                <div className="estado">
                    { parseInt(puesto.deuda) === 0 
                        ? <h4 className="completo">pagos al dia</h4>
                        :<h4 className="incompleto">falta de pago</h4>
                    }

                </div>
                <Link to={`/detalle-puesto/${puesto.idpuesto}/${puesto.idsector}`} className="btn-detalle">Ver Detalle</Link>
            </div>
            <div className="card-footer">
            </div>
        </div>
    );

}
 
export default Puesto;