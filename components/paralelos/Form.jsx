import { AlignLeft, Box } from "react-feather";
import { useState, useContext, useEffect } from "react";

import courseContext from '../../context/courses/courseContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import parallelContext from '../../context/parallels/parallelContext'

const Form = () => {
    const coursesContext = useContext(courseContext);
    const schoolyearsContext = useContext(schoolyearContext);
    const parallelsContext = useContext(parallelContext);

    //Obtener datos necesarios de los cursos
    const { getCourse } = coursesContext; //Funciones Context
    const { courses } = coursesContext; // Datos Context

    //Obtener el año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    //Obtener datos necesarios para paralelos
    const { checkForm, createParallel } = parallelsContext; // Funciones Context
    const { errorForm } = parallelsContext; // Datos Context

    useEffect(() => {
        getCourse({
            id_schoolyear : schoolyear[0]._id
        });
    }, [schoolyear])

    //state formulario
    const [parallel, setParallel] = useState({
        name: '',
        description: '',
        id_course: ''
    });

    const {name, description, id_course} = parallel;

    //Leer valores del form
    const handleChange = e => {
        setParallel({
            ...parallel,
            [e.target.name] : e.target.value
        })
    }

    
    const submitForm = e => {
        e.preventDefault();

        //Validar
        if(name.trim() === '' || id_course === '') {
            checkForm();
            return;
        }
        
        //Agregar al context
        createParallel(parallel);

        //Reiniciar el form
        reset();
    }
    
    const reset = () => {
        setParallel({
            name: '',
            description: '',
            id_course: ''
        })
    }


    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nuevo Paralelo</h4>
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
                                        <input type="text" id="name" className="form-control" name="name" placeholder="Nombre" value={name} onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label htmlFor="course">Curso:</label>
                                </div>
                                <div className="col-sm-9">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <select className="form-control" id="course" name="id_course" onChange={handleChange}>
                                                <option value="">Seleccione</option>
                                                {
                                                    courses
                                                    ?
                                                        courses.map(course => (
                                                            <option key={course._id} value={course._id}>{course.name}</option>
                                                        ))
                                                    : null 
                                                }
                                            </select>
                                        </div>
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
                                        <textarea className="form-control" id="description" rows="4" name="description" placeholder="Descripción" value={description} onChange={handleChange}></textarea>
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