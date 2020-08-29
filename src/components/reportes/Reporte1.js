import React,{Fragment} from 'react'

const Reporte1 = ({datosReporte}) => {
    return ( 
        <Fragment>
            <h5>Reporte 1</h5>
            <table className="tabla" border="1">
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
                    :datosReporte.map(dato => {
                        return <tr>
                            <td>{dato.dueno}</td>
                            <td>{dato.puesto}</td>
                            <td>{dato.sector}</td>
                            {parseInt(dato.deuda)===0
                            ? <td className="pagoaldia">{dato.deuda} Bs.</td>
                            : <td className="pagoretrasado">{dato.deuda} Bs.</td>}
                            
                        </tr>
                    })
                    }

                </tbody>
                
            </table>

        </Fragment>
     );
}
 
export default Reporte1;