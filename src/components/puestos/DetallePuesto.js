import React, {Fragment} from 'react';
const DetallePuesto = ({match}) => {
    return ( 
        <Fragment>
            <h1>Desde Detalles</h1>
            <p>me pasaron el id {match.params.id} en la url</p>
        </Fragment>
     );
}
 
export default DetallePuesto;