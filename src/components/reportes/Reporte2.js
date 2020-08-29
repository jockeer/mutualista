import React,{Fragment} from 'react'

const Reporte2 = ({datosReporte}) => {
    return ( 
        <Fragment>
            <h5>Reporte 2</h5>

        <table className="tabla">
            <thead>
            <tr>
                <th>Dueño</th>
                <th>Puesto</th>
                <th>Sector</th>
                <th>Deuda</th>
            </tr>

            </thead>
            <tbody>
                {datosReporte.length===0
                ? <tr>
                <td>No hay datos</td>
                <td>No hay datos</td>
                <td>No hay datos</td>
                <td>No hay datos</td>
             </tr>
                :null
                }

            </tbody>
            
        </table>
        </Fragment>
     );
}
 
export default Reporte2;