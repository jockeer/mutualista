import React from 'react'
import {Link} from 'react-router-dom'



const Puesto = ({puesto}) => {
    return ( 
        <div className="card sombra">
            <div className="card-header">{puesto.nombre}</div>
            <div className="card-body">
                <h4>Dueño: {puesto.dueno}</h4>
                <h4>encargado:{puesto.encargado}</h4>
                <h4>ultimoPago: {puesto.ultimoPago}</h4>
                <div className="estado">
                    {puesto.estado 
                        ? <h4 className="completo">pagos al dia</h4>
                        :<h4 className="incompleto">falta de pago</h4>
                    }

                </div>
                <Link to={`/detalle-puesto/${puesto.id}`} className="btn-detalle">Ver Detalle</Link>
            </div>
            <div className="card-footer">
            </div>
        </div>
    );

}
 
export default Puesto;