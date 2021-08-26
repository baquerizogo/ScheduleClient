import { useContext, useEffect, useState, useRef } from 'react';

//Components
import courseContext from '../../context/courses/courseContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import parallelContext from '../../context/parallels/parallelContext'
import scheduleContext from '../../context/schedules/scheduleContext'

const CourseForm = ({dataCallback}) => {
    const coursesContext = useContext(courseContext);
    const schoolyearsContext = useContext(schoolyearContext);
    const parallelsContext = useContext(parallelContext);
    const schedulesContext = useContext(scheduleContext);

    //Obtener datos necesarios de los cursos
    const { getCourse } = coursesContext; //Funciones Context
    const { courses } = coursesContext; // Datos Context

    //Obtener el año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    //Obtener datos necesarios para los paralelos
    const { parallels } = parallelsContext; //Datos Context
    const { getParallel } = parallelsContext; //Funciones Context

    //Obtener datos necesarios para los horarios
    const { getScheduleByParallel, schedules } = schedulesContext;
    
    useEffect(() => {
        getCourse({
            id_schoolyear : schoolyear[0]._id
        });
    }, [schoolyear])

    //state formulario
    const [localForm, setLocalForm] = useState({
        id_parallel: null
    });

    //STATE DEL CURSO (Necesario para obtener paralelos)
    const [course, setCourse] = useState({
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
        let index = e.nativeEvent.target.selectedIndex; //Para obtener el texto de la opción marcada
        setCourse({
            "name" : e.nativeEvent.target[index].text,
            [e.target.name]: e.target.value
        })
    }

    //Leer valores del form
    const handleChange = e => {
        let index = e.nativeEvent.target.selectedIndex; //Para obtener el texto de la opción marcada

        setLocalForm({
            ...localForm,
            "name": e.nativeEvent.target[index].text,
            [e.target.name]: e.target.value
        })
    }
    
    const submitForm = e => {
        e.preventDefault();
        if(localForm) {
            if(localForm.id_parallel) getScheduleByParallel({id_parallel: localForm.id_parallel});
            let data = {
                "curso": course.name ,
                "paralelo": localForm.name
            }
            dataCallback(data);
            reset();
        }
    }

    const reset = () => {
        setLocalForm({
            id_parallel: null
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-2 col-form-label">
                            <label htmlFor="course">Curso:</label>
                        </div>
                        <div className="col-sm-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="course" name="id_course" onChange={handleChangeCourse}>
                                    <option>Seleccione</option>
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
                    <div className="row pt-1">
                        <div className="col-sm-2 col-form-label">
                            <label htmlFor="parallel">Paralelo:</label>
                        </div>
                        <div className="col-sm-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="parallel" name="id_parallel" onChange={handleChange}>
                                    <option>Seleccione</option>
                                    {
                                        parallels
                                        ?
                                            parallels.map(parallel => {
                                                for(let i in schedules) {
                                                    if(parallel._id == schedules[i].id_parallel) {
                                                        return(<option key={parallel._id} value={parallel._id}>{parallel.name}</option>)
                                                    };
                                                }
                                            })
                                        : null
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-2"></div>
                        <div className="col-10">
                            <button type="button" className="btn btn-primary" onClick={submitForm} disabled={!localForm.id_parallel ? "disabled" : null}>Buscar Horario</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CourseForm;