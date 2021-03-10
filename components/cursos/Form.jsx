import { useState, useContext, useEffect } from "react";
import { Box } from "react-feather";

import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import courseContext from '../../context/courses/courseContext'

const Form = () => {
    //obtener el state del formulario
    const coursesContext = useContext(courseContext);
    const schoolyearsContext = useContext(schoolyearContext);

    const { errorForm } = coursesContext; // Datos Context
    const { checkForm, createCourse} = coursesContext; //Funciones Context
    const { schoolyear } = schoolyearsContext; // Datos Context
    const { getCurrentSchoolyear } = schoolyearsContext; // Funciones Context

    //Actualizar si el periodo lectivo cambia
    useEffect(() => {

        const yearAux = getCurrentSchoolyear()
        setCourse({
            ...course,
            id_schoolyear: yearAux[0]._id 
        })
        getCurrentSchoolyear();
    }, [schoolyear])

    //state formulario
    const [course, setCourse] = useState({
        name: '',
        description: '',
        id_schoolyear: schoolyear[0]._id
    });

    const {name, description} = course;

    //Leer valores del form
    const handleChange = e => {
        setCourse({
            ...course,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();

        //Validar
        if(name.trim() === '') {
            checkForm();
            return;
        }
        
        //Agregar al context
        createCourse(course);

        //Reiniciar el form
        reset();
    }
    
    const reset = () => {
        setCourse({
            name: '',
            description: '',
            id_schoolyear: schoolyear[0]._id
        })
    }

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nuevo curso</h4>
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
                                            <span className="input-group-text"><Box size="16"/></span>
                                        </div>
                                        <input type="text" id="name" className="form-control" name="name" placeholder="First Name" value={name} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label htmlFor="description">Descripción:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <textarea className="form-control" id="description" rows="4" placeholder="Descripción" name="description" value={description} onChange={handleChange}></textarea>
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
                            {errorForm === true ? <span className="badge badge-pill badge-light-danger mt-1">Todos los campos son obligatorios</span> : null }
                        </div>
                    </div>
                </form>
            </div>
        </div>              
    );
}
 
export default Form;