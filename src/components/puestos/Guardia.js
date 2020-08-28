import React,{Fragment} from 'react';
const Guardia = ({guardia}) => {
    return ( 
        <Fragment>
            <li className="tarea sombra">
                <p>{guardia.nombre}</p>
            </li>

        </Fragment>
     );
}
 
export default Guardia;