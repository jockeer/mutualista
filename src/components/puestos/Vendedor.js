import React,{Fragment} from 'react';

const Vendedor = ({persona}) => {
    return ( 
        <Fragment>
            <li className="tarea sombra">
                <p>{persona.nombre}</p>
                <p>{persona.telefono}</p>
                {persona.dueno==='V'
                    ?<p className="completo">Dueño</p>
                    :<p className="inquilino">Inquilino</p>
                }
                {persona.encargado==='V'
                    ?<p className="encargado">Encargado</p>
                    :null
                }
            </li>

        </Fragment>
     );
}
 
export default Vendedor;