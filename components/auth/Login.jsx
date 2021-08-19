import React, { useState, useContext, useEffect } from 'react';
import { Eye } from 'react-feather';

//Components
import AuthContext from '../../context/auth/authContext'


const Login = () => {
    const authContext = useContext(AuthContext);
    const { mensaje, iniciarSesion } = authContext;

    useEffect(()=>{
        if(mensaje){
            setAlert({
                msg: mensaje.msg, 
                error: true
            })
        }
    },[mensaje]);

    //State
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [alert, setAlert] = useState({
        msg: '',
        error: false,
    })

    //Extraer state
    const {email, password} = user;

    const HandleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();

        //Validar campos vacios
        if(email.trim() === '' || password.trim() === '') {
            setAlert({
                msg: 'Todos los campos son obligatorios', 
                error: true
            });
            return;
        }

        setAlert({
            msg: '', 
            error: false
        });
        //Pasarlo al action
        iniciarSesion({ email, password });
    }

    return ( 
        <div className="content-wrapper">
            <div className="content-body">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="card mt-5 mb-0 w-50">
                            <div className="card-body">
                                <h2 className="brand-text text-center text-primary">Gestor de horarios</h2>    
                                <hr />
                                <h4 className="card-title text-center mb-1">Bienvenido 👋</h4>
                                <p className="card-text text-center mb-2">Ingresa el correo y la contraseña para acceder</p>

                                <form className="form mt-2 mb-5 w-75 mx-auto" action="index.html">
                                    <div className="form-group">
                                        <label htmlFor="login-email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="login-email" name="email" placeholder="john@example.com" tabIndex="1" onChange={HandleChange} value={email} />
                                    </div>

                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="login-password">Password</label>
                                        </div>
                                        <div className="input-group input-group-merge form-password-toggle">
                                            <input type="password" className="form-control form-control-merge" id="login-password" name="password" tabIndex="2" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="login-password" onChange={HandleChange} value={password}/>
                                            <div className="input-group-append">
                                                <span className="input-group-text cursor-pointer"><Eye/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-block w-25 m-auto" tabIndex="4" onClick={onSubmit}>Ingresar</button>
                                </form>
                                {alert.error == true ? <span className="badge badge-pill badge-light-danger mt-1">{alert.msg}</span> : null }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;