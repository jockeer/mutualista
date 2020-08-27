import React, {useState} from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        user: '',
        pass: ''
    })
    const {user, pass} = usuario;

    const onChangeIniciar = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios

        // Pasarlo al action

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="user">Usuario</label>
                        <input type="text" id="user" name="user" placeholder="Tu usuario" value={user} onChange={onChangeIniciar}></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="pass" placeholder="Tu password" value={pass} onChange={onChangeIniciar}></input>
                    </div>
                    <div className="campo-form">
                        
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"></input>
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;