import { useState, useContext } from "react";

//Components
import accountContext from '../../context/accounts/accountContext'

import { Archive, Mail, User, Lock } from "react-feather";

const Form = () => {
    //obtener el state del formulario
    const accountsContext = useContext(accountContext);

    const { errorForm, msg } = accountsContext; // Datos Context
    const { checkForm, createAccount} = accountsContext; //Funciones Context

    //state formulario
    const [account, setAccount] = useState({
        name: '',
        lastname: '',
        dni: '',
        email: '',
        password: '',
        role: 1,
    });

    const [pswd, setPswd] = useState({
        status: 0,
        msg: ''
    });

    const {name, lastname, dni, email, password, role} = account;

    //Leer valores del form
    const handleChange = e => {
        setAccount({
            ...account,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();

        //Validar
        if(name.trim() === '' || lastname.trim() === '' || dni==='' || role===null || password.trim() === '' || email.trim() === '') {
            checkForm();
            return;
        }

        if(password.length < 8) {
            setPswd({
                status: 1,
                msg: "La contraseña debe contener al menos 8 dígitos"
            });
            return;
        }

        //Mostrar mensaje exito
        setPswd({
            status: 5,
            msg: "usuario guardado con éxito"
        });

        setTimeout(() => {
            setPswd({
                status: 0,
                msg: ""
            });
        }, 3000);
        
        //Agregar al context
        createAccount(account);

        //Reiniciar el form
        reset();
    }
    
    const reset = () => {
        setAccount({
            name: '',
            lastname: '',
            dni: '',
            email: '',
            password: '',
            role: 1,
        })
    }

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nuevo usuario</h4>
            </div>
            <div className="card-body">
                <form className="form form-horizontal">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="name">Nombre:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><User size="16"/></span>
                                        </div>
                                        <input type="text" id="name" className="form-control" name="name" placeholder="Nombres" value={name} onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="lastname">Apellidos:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><User size="16"/></span>
                                        </div>
                                        <input type="text" id="lastname" className="form-control" name="lastname" placeholder="Apellidos" value={lastname} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="dni">Cédula:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><Archive size="16"/></span>
                                        </div>
                                        <input type="text" id="dni" className="form-control" name="dni" placeholder="1234567890" value={dni} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="email">Correo:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><Mail size="16"/></span>
                                        </div>
                                        <input type="email" id="email" className="form-control" name="email" placeholder="alguien@example.com" value={email} onChange={handleChange}/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="password">Contraseña:</label>
                                </div>
                                <div className="col-sm-3">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><Lock size="16"/></span>
                                        </div>
                                        <input type="password" id="paswword" className="form-control" name="password" placeholder="********" value={password} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="role">Tipo de usuario:</label>
                                </div>
                                <div className="col-sm-3">
                                    <div className="input-group input-group-merge">
                                        <select className="form-control" name="role" id="role" onChange={handleChange} value={role}>
                                            <option value="1">Colaborador</option>
                                            <option value="2">Obervador</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 offset-sm-3">
                            <button type="button" className="btn btn-primary mr-1" onClick={submitForm}>Guardar</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={reset}>Reiniciar</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 offset-sm-3">
                            {errorForm && !msg && pswd.status == 0
                                ? <span className="badge badge-pill badge-light-danger mt-1">Todos los campos son obligatorios</span> 
                                : msg
                                ? <span className="badge badge-pill badge-light-danger mt-1">{msg}</span> 
                                : pswd.status != 0
                                ? <span className={`badge badge-pill ${pswd.status === 1 ? 'badge-light-danger' : 'badge-light-success'} mt-1`}>{pswd.msg}</span> 
                                : null
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>              
    );
}
 
export default Form;
