import { useContext, useEffect, useState, useRef } from 'react';

import chroma from "chroma-js"
import Select from 'react-select';


//Components
import courseContext from '../../context/courses/courseContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import scheduleContext from '../../context/schedules/scheduleContext'
import AccordionItem from './AccordionItem';
import SimpleModal from '../layout/SimpleModal';

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

const daysOptions = [
    {
        value: "Lunes",
        label: "Lunes",
        color: "#00B8D9", 
        isFixed: true
    },
    {
        value: "Martes",
        label: "Martes",
        color: "#00B8D9", 
        isFixed: true
    },
    {
        value: "Miercoles",
        label: "Miercoles",
        color: "#00B8D9", 
        isFixed: true
    },
    {
        value: "Jueves",
        label: "Jueves",
        color: "#00B8D9", 
        isFixed: true
    },
    {
        value: "Viernes",
        label: "Viernes",
        color: "#00B8D9", 
        isFixed: true
    },
]

let courseOptions = []

const CourseForm = () => {
    const coursesContext = useContext(courseContext);
    const schoolyearsContext = useContext(schoolyearContext);
    const schedulesContext = useContext(scheduleContext);

    //Obtener datos necesarios de los cursos
    const { getCourseInfo } = coursesContext; //Funciones Context
    const { courseInfo } = coursesContext; // Datos Context

    //Obtener el año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    //Obtener datos necesarios para los horarios
    const { setForm, createAuto, inicio, fin, auto, schedules } = schedulesContext;

    //Referencias
    const modality = useRef(null);
    const days = useRef(null);
    const courses = useRef(null);
    const hour = useRef(null);

    useEffect(() => {
        setParams({
            ...params,
            id_schoolyear : schoolyear[0]._id
        })

        getCourseInfo({
            id_schoolyear : schoolyear[0]._id
        });

        courseOptions = [];
    }, [schoolyear])

    useEffect(() => {
        let hours = []
        for(let i in inicio) {
            hours.push({
                    h_inicio: inicio[i].name,
                    h_fin: fin[i].name,
                    min_inicio: inicio[i].value,
                    min_fin: fin[i].value
            })
        }

        setParams({
            ...params,
            hours: hours
        })
    }, [inicio])

    useEffect(() => {
        let matutino = false;
        let vespertino = false;

        for(let i in schedules) {
            if(schedules[i].modality == 0) matutino = true;
            if(schedules[i].modality == 1) vespertino = true;
        }

        if(matutino && vespertino) {
            setModalities([])
            setParams({
                ...params,
                modality: ''
            })
            setDisabled(true)
        } else if(matutino) {
            setModalities(modalities.filter(m => m.value !== 0))
            setParams({
                ...params,
                modality: 1
            })
            setForm({
                modality: 1
            })
        } else if(vespertino) {
            setModalities(modalities.filter(m => m.value !== 1))
            setParams({
                ...params,
                modality: 0
            })
            setForm({
                modality: 0
            })
        }
    }, [schedules])

    useEffect(() => {
        if(modalities.length === 0) {
            setDisabled(true)
        }
    }, [modalities])

    //Llenar los cursos en select
    useEffect(() => {
        if(courseOptions.length > 0) courseOptions = []
        if(courseInfo) {
            for(let i in courseInfo) {
                if(courseInfo[i].classes.length != 0) {
                    courseOptions.push({
                        value: courseInfo[i].parallel._id,
                        label: `${courseInfo[i].course.name} ${courseInfo[i].parallel.name}`,
                        color: "#00B8D9", 
                        isFixed: true
                    })
                }
            }
        }
    }, [courseInfo])

    //State del formulario
    const [params, setParams] = useState({
        courses: [],
        modality: 0,
        id_schoolyear: schoolyear[0]._id,
        days: [],
        hours: [],
        max_hours: 1,
    })

    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);

    //State de los cursos seleccionados
    const [current, setCurrent] = useState([])
    const [selected, setSelected] = useState([])
    const [modalities, setModalities] = useState([
        {
            value: 0,
            text: "Matutino"
        },
        {
            value: 1,
            text: "Vespertino"
        }
    ])

    //Obtener información de cada curso que se selecciono
    const handleAccordion = course => {
        setParams({
            ...params,
            courses : [
                ...params.courses,
                course
            ]
        })
    }

    //Leer valores del form
    const handleChange = e => {
        setParams({
            ...params,
            [e.target.name]: e.target.value
        })
        
        if(e.target.name == "modality") setForm({
            modality: e.target.value,
            id_course: "",
            id_parallel: "",
            courseName: "",
            parallelName: ""
        });
    }

    const handleChangeDays = e => {
        let array = [];
        for(let i in e) {
            array = [
                ...array,
                e[i].value
            ]
        }
        setParams({
            ...params,
            days : array 
        })
    }
    
    const handleChangeCourses = e => {
        let array = [];
        for(let i in e) {
            array = [
                ...array,
                e[i].value
            ]
        }
        setCurrent(array);
    }

    const onSelectButton = e => {
        let array = [];
        for(let i in current) {
            for(let j in courseInfo) {
                if(current[i] == courseInfo[j].parallel._id) {
                    array.push(courseInfo[j]);
                }
            }
        }

        console.log(array)

        setSelected(array);
    }

    const submitForm = e => {
        e.preventDefault();


        //Validar datos
        if(params.courses.length == 0 || params.days.length == 0 || params.hours.length == 0 || params.courses.length < selected.length) {
            setError(true);
            return;
        }

        //Enviamos los datos
        createAuto(params);

        //Reiniciar form
        setParams({
            courses: [],
            modality: 0,
            id_schoolyear: schoolyear[0]._id,
            days: [],
            hours: [],
            max_hours: 1
        })

        setError(false);
        setDisabled(true);
        
    }

    return (
        <div className="card">
            <div className="card-body">
                <h3>Configuración</h3>
                <hr />
                <div className="form-group">
                    <div className="row mb-1">
                        <div className="col-2 col-form-label">
                            <label htmlFor="modalidad">
                                Seleccione modalidad:
                            </label>
                        </div>
                        <div className="col-2">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="modalidad" name="modality" onChange={handleChange} disabled={disabled ? "disabled": null}>            
                                    {
                                        modalities.map(m => (
                                            <option key={m.value} value={m.value}> {m.text} </option>

                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-2 col-form-label">
                            <label htmlFor="modalidad">
                                Máximo de incrementos por día:
                            </label>
                        </div>
                        <div className="col-1">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="modalidad" name="max_hours" onChange={handleChange} disabled={disabled ? "disabled": null}>
                                    <option value={1}> 1 </option>
                                    <option value={2}> 2 </option>
                                    <option value={3}> 3 </option>
                                    <option value={4}> 4 </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-1">
                    <div className="col-2 col-form-label">
                            <label htmlFor="modalidad">
                                Seleccione dias:
                            </label>
                        </div>
                        <div className="col-3">
                            <Select
                                isDisabled={disabled ? "disabled": null}
                                closeMenuOnSelect={false}
                                isMulti
                                options={daysOptions}
                                styles={colourStyles}
                                className="React"
                                classNamePrefix="select"
                                onChange={handleChangeDays}
                            />
                        </div>
                        
                    </div>
                    <div className="row">
                        
                    </div>
                    <div className="row mb-3"></div>
                    <h3>Cursos - Asignaturas</h3>
                    <hr />
                    <div className="row mb-2">
                        <div className="col-2 col-form-label">
                            <label htmlFor="modalidad">
                                Seleccione cursos:
                            </label>
                        </div>
                        <div className="col-3">
                            <Select
                                isDisabled={disabled ? "disabled": null}
                                closeMenuOnSelect={false}
                                isMulti
                                options={courseOptions}
                                styles={colourStyles}
                                className="React"
                                classNamePrefix="select"
                                onChange={handleChangeCourses}
                            />
                        </div>
                        <div className="col-1">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onSelectButton}
                            >
                                Seleccionar
                            </button>
                            
                        </div>
                    </div>
                    <div id="main">
                        <div className="container">
                            <div className="accordion" id="faq">
                                {
                                    selected ? selected.map((element, index) => (
                                        <AccordionItem key={index} index={index} course={element} handleAccordion={handleAccordion}/>)
                                    )
                                    : null
                                }
                            </div>
                        </div>
                    </div>

                    <div className="row mt-1">
                        <div className="col-10">
                            <button type="button" className="btn btn-primary" onClick={submitForm} data-toggle="modal" data-target="#exampleModalLong">
                                Crear Horario
                            </button>
                            {error ? 
                                <SimpleModal msg={"Todos los campos son obligatorios"} status={0}/> 
                                : <SimpleModal msg={auto.msg} status={auto.status}/> 
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            {error == true ? <span className="badge badge-pill badge-light-danger mt-1">Seleccione todos los campos</span> : null }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CourseForm;