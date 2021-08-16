import {useEffect, useContext, useState} from 'react';
import teacherContext from '../../context/teachers/teacherContext';
import schoolyearContext from '../../context/schoolyears/schoolyearContext';

const colors = ['s-blue', 's-yellow', 's-green', 's-orange', 's-red'];

const AccordionItem = ({course, index, handleAccordion}) => {
    const teachersContext = useContext(teacherContext);
    const schoolyearsContext = useContext(schoolyearContext);

    //Obtener datos necesarios de los cursos
    const { getTeacher } = teachersContext; //Funciones Context
    const { teachers } = teachersContext; // Datos Context

    //Obtener datos del año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    useEffect(() => {
        getTeacher({id_schoolyear: schoolyear[0]._id});
    }, [schoolyear])

    const [selected, setSelected] = useState({});
    const [form, setForm] = useState({
        error: false,
        disabled: false
    }); 

    const handleChange = (e) => {
        setSelected({
            ...selected,
            [e.target.id] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //Validar datos
        let size = 0;
        for(let key in selected) {
            if (selected.hasOwnProperty(key)) size++;
        }

        if(size < course.classes.length) {
            setForm({
                ...form,
                error: true
            });
            return;
        }

        //Guardar datos
        let obj = {
            course: course.course,
            parallel: course.parallel,
            classes: []
        }

        for(let i in selected) {
            obj.classes.push(JSON.parse(selected[i]))
        }

        //Enviar datos
        setForm({
            ...form,
            error: false,
            disabled: true
        });

        handleAccordion(obj);
    }

    return (  
        <div className="card">
            <div className="card-header" id={`faqhead${index}`}>
                <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target={`#faq${index}`} aria-expanded="true" aria-controls={`faq${index}`}>
                    {`${course.course.name} ${course.parallel.name}`}
                </a>
            </div>

            <div id={`faq${index}`} className="collapse show" aria-labelledby={`faqhead${index}`} data-parent="#faq" >
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <h6> Asignatura </h6>
                        </div>
                        <div className="col-2">
                            <h6> H. semanales </h6>
                        </div>
                        <div className="col">
                            <h6> Profesor </h6>
                        </div>
                    </div>
                    {
                        course.classes ? course.classes.map((xclass, index) => (
                            <div key={index} className="row">
                                <div className="col-3 align-self-center">
                                    <p>{xclass.class.name}</p>
                                </div>
                                <div className="col-2 align-self-center">
                                    <p>{xclass.class.hours_week}</p>
                                </div>
                                <div className="col-4 col-form-label">
                                    <div className="input-group input-group-merge">
                                        <select className="form-control" id={index} name="teacher" onChange={ handleChange } disabled={form.disabled ? "disabled": null}>
                                            <option disabled selected>Seleccione...</option>
                                            {
                                                teachers ? teachers.map((teacher) => {
                                                    
                                                    for(let i in xclass.class.teachers) {
                                                        //console.log(xclass.class)
                                                        if(teacher._id == xclass.class.teachers[i].id_teacher) {
                                                            let obj = {
                                                                class: {
                                                                    _id: xclass.class._id,
                                                                    name: xclass.class.name,
                                                                    hours_week: xclass.class.hours_week,
                                                                    color: colors[index]
                                                                },
                                                                teacher: {
                                                                    _id: teacher._id,
                                                                    name: teacher.name,
                                                                    lastname: teacher.lastname
                                                                }
                                                            }
                                                            return <option key={teacher._id} value={JSON.stringify(obj)}>{teacher.name} {teacher.lastname}</option>
                                                        }
                                                    }
                                                }) : null 
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))
                        : null
                    }
                    <div className="row">
                        <div className="col-3">
                            <button disabled={form.disabled ? "disabled" : null} className="btn btn-success" type="button" onClick={onSubmit}>Listo</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            {form.error == true ? <span className="badge badge-pill badge-light-danger mt-1">Seleccione todos los campos</span> : null }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AccordionItem;