import { useState, useContext } from "react";

//Components
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import teacherContext from '../../context/teachers/teacherContext'

import { Archive, Mail, User } from "react-feather";

const Form = () => {
    //obtener el state del formulario
    const teachersContext = useContext(teacherContext);
    const schoolyearsContext = useContext(schoolyearContext);

    const { errorForm, msg } = teachersContext; // Datos Context
    const { schoolyear } = schoolyearsContext; // Datos Context
    const { checkForm, createTeacher} = teachersContext; //Funciones Context

    //state formulario
    const [teacher, setTeacher] = useState({
        name: '',
        lastname: '',
        dni: '',
        email: '',
        id_schoolyear: schoolyear[0]._id
    });

    const {name, lastname, dni, email} = teacher;

    //Leer valores del form
    const handleChange = e => {
        setTeacher({
            ...teacher,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();

        //Validar
        if(name.trim() === '' || lastname.trim() === '' || dni==='') {
            checkForm();
            return;
        }
        
        //Agregar al context
        createTeacher(teacher);

        //Reiniciar el form
        reset();
    }
    
    const reset = () => {
        setTeacher({
            name: '',
            lastname: '',
            dni: '',
            email: '',
            id_schoolyear: schoolyear[0]._id
        })
    }

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nuevo profesor</h4>
            </div>
            <div className="card-body">
                <form className="form form-horizontal">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
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
                                <div className="col-sm-3 col-form-label">
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
                                <div className="col-sm-3 col-form-label">
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
                                <div className="col-sm-3 col-form-label">
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
                        <div className="col-sm-9 offset-sm-3">
                            <button type="button" className="btn btn-primary mr-1" onClick={submitForm}>Guardar</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={reset}>Reiniciar</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 offset-sm-3">
                            {errorForm && !msg 
                                ? <span className="badge badge-pill badge-light-danger mt-1">Todos los campos son obligatorios</span> 
                                : msg
                                ? <span className="badge badge-pill badge-light-danger mt-1">{msg}</span> 
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