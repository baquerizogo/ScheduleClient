import { useContext, useEffect, useState } from "react";
import chroma from "chroma-js"

// Components
import classContext from '../../context/classes/classContext'
import teacherContext from '../../context/teachers/teacherContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import parallelContext from '../../context/parallels/parallelContext'
import courseContext from '../../context/courses/courseContext'

import Select from 'react-select';
import { Box } from "react-feather";

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color)
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",
  
        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
        }
      }
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color)
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css()
      }
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white"
      }
    })
}

const Form = () => {
    const coursesContext = useContext(courseContext);
    const classesContext = useContext(classContext);
    const schoolyearsContext = useContext(schoolyearContext);
    const teachersContext = useContext(teacherContext);
    const parallelsContext = useContext(parallelContext);

    const { getTeacher, teachers } = teachersContext;   
    const { getParallel, parallels } = parallelsContext;
    const { checkForm, createClass, errorForm} = classesContext; 
    const { getCourse, courses } = coursesContext; 
    const { schoolyear } = schoolyearsContext; 

    let teacherOptions = [];
    let parallelOptions = [];

    //OBTENER TODOS LOS PROFESORES Y CURSOS
    useEffect(() => {
        if(schoolyear != '') {
            getTeacher({
                id_schoolyear : schoolyear[0]._id
            });
        }

        if(schoolyear != '') {
            getCourse({
                id_schoolyear : schoolyear[0]._id
            });
        }
    }, [schoolyear])

    //SI EXISTEN PROFESORES, AGREGAR A TEACHEROPTIONS
    if(teachers) {
        teachers.map(teacher => {
            teacherOptions = [
                ...teacherOptions,
                {
                    value: teacher._id,
                    label: `${teacher.name} ${teacher.lastname}`,
                    color: "#00B8D9", 
                    isFixed: true
                }
            ];
        })
    }

    //STATE DEL FORMULARIO
    const [data, setData] = useState({
        name: '',
        description: '',
        n_hours: 0,
        hours_week: 0,
        parallels: [],
        teachers: [],
        id_schoolyear: schoolyear[0]._id 
    });

    const { name, description, n_hours, hours_week } = data;

    //STATE DEL CURSO (Necesario para obtener paralelos)
    const [course, setCourse] = useState({
        name: "",
        id_course: ""
    });

    //OBTENER PARALELOS DEL CURSO SELECCIONADO
    useEffect(() => {
        if(course.id_course != ''){
            getParallel(course);
        }
    }, [course])

    //SELECCIONAR CURSO PARA OBTENER PARALELOS
    const handleChangeCourse = e => {
        const data = JSON.parse(e.target.value);
        setCourse({
            name: data.name,
            id_course: data.id
        })
    }

    //SI EXISTEN PARALELOS, AGREGAR A PARALLELOPTIONS
    if(parallels) {
        parallels.map(parallel => {
            parallelOptions = [
                ...parallelOptions,
                {
                    value: parallel._id,
                    label: `${parallel.name}`,
                    color: "#00B8D9", 
                    isFixed: true
                }
            ];
        })
    }

    const handleChangeTeacher = event => {
        let array = [];
        for(let i in event) {
            array = [
                ...array,
                {id_teacher: event[i].value}
            ]
        }
        setData({
            ...data,
            teachers : array 
        })
    }

    const handleChangeParallels = event => {
        let array = [];
        for(let i in event) {
            array = [
                ...array,
                {id_parallel: event[i].value}
            ]
        }
        setData({
            ...data,
            parallels : array 
        })
    }

    //Manipular el state global
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();

        //Validar
        if(name.trim() === '' || n_hours <= 0 ||  hours_week <= 0 || data.parallels.length === 0) {
            checkForm();
            return;
        }
        
        //Agregar al context
        createClass(data);

        //Reiniciar el form
        reset();
    }

    const reset = () => {
        setData({
            name: '',
            description: '',
            n_hours: 0,
            hours_week: 0,
            parallels: [],
            teachers: [],
            id_schoolyear: schoolyear[0]._id 
        })
    }

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nueva asignatura</h4>
            </div>
            <div className="card-body">
                <form className="form form-horizontal">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="name">Nombre:</label>
                                </div>
                                <div className="col-sm-10">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><Box size="16"/></span>
                                        </div>
                                        <input type="text" id="name" className="form-control" name="name" placeholder="Nombres" value={name} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            <div className="form-group row">
                                <div className="col-sm-5 col-form-label">
                                    <label htmlFor="n_hours">Numero de horas:</label>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group input-group-merge">
                                        <input type="number" id="n_hours" className="form-control" name="n_hours"  value={n_hours} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="description">Descripción:</label>
                                </div>
                                <div className="col-sm-10">
                                    <div className="input-group input-group-merge">
                                        <textarea className="form-control" id="description" rows="4" placeholder="Descripción" name="description" value={description} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            <div className="form-group row">
                                <div className="col-sm-5 col-form-label">
                                    <label htmlFor="hours_week">Horas semanales:</label>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group input-group-merge">
                                        <input type="number" id="hours_week" className="form-control" name="hours_week" placeholder="10" value={hours_week} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="basicSelect">Curso:</label>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <select className="form-control" id="basicSelect" onChange={handleChangeCourse}>
                                                <option>Seleccione</option>
                                                {
                                                    courses
                                                    ?
                                                        courses.map(course => (
                                                            <option key={course._id} value={`{"id":"${course._id}", "name":"${course.name}"}`}>{course.name}</option>
                                                        ))
                                                    : null 
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="basicSelect1">Paralelo:</label>
                                </div>
                                <div className="col-sm-4">   
                                    <Select
                                        closeMenuOnSelect={false}
                                        isMulti
                                        options={parallelOptions}
                                        styles={colourStyles}
                                        className="React"
                                        classNamePrefix="select"
                                        onChange={handleChangeParallels}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label>Profesores:</label>
                                </div>
                                <div className="col-sm-9 col-md-9">
                                    <Select
                                        closeMenuOnSelect={false}
                                        isMulti
                                        options={teacherOptions}
                                        styles={colourStyles}
                                        className="React"
                                        classNamePrefix="select"
                                        onChange={handleChangeTeacher}
                                    />
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