import React, {useState} from 'react';
import { Link } from 'react-router-dom'
const NuevaCuenta = () => {
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        user: '',
        pass: '',
        cpassword: ''
    })
    const {nombre, user, pass, cpassword} = usuario;

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
                <h1>Obtener una Cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre" value={nombre} onChange={onChangeIniciar}></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="user">Usuario</label>
                        <input type="text" id="user" name="user" placeholder="Tu usuario" value={user} onChange={onChangeIniciar}></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="pass" placeholder="Tu password" value={pass} onChange={onChangeIniciar}></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="cpassword">Reperfir Password</label>
                        <input type="password" id="cpassword" name="cpassword" placeholder="Repetir password" value={cpassword} onChange={onChangeIniciar}></input>
                    </div>
                    <div className="campo-form">
                        
                        <input type="submit" className="btn btn-primario btn-block" value="Registrar"></input>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;