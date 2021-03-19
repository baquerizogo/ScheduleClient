import { useContext, useEffect, useState } from 'react';

//Components
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import teacherContext from '../../context/teachers/teacherContext'

const CourseForm = ({dataCallback}) => {
    const schoolyearsContext = useContext(schoolyearContext);
    const teachersContext = useContext(teacherContext);

    //Obtener el año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    //Funciones de profesores
    const { getTeacher, teachers } = teachersContext;

    
    useEffect(() => {
        getTeacher({
            id_schoolyear : schoolyear[0]._id
        });
    }, [schoolyear])

    //state formulario
    const [localForm, setLocalForm] = useState({});

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
            //if(localForm.id_parallel) getScheduleByParallel({id_parallel: localForm.id_parallel});
            let data = {
                "teacher": localForm.name,
                "id_teacher": localForm.id_teacher
            }
            dataCallback(data);
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <div className="row pt-1">
                        <div className="col-sm-2 col-form-label">
                            <label htmlFor="parallel">Profesor:</label>
                        </div>
                        <div className="col-sm-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="parallel" name="id_teacher" onChange={handleChange}>
                                    <option>Seleccione</option>
                                    {
                                        teachers
                                        ?
                                            teachers.map(teacher => {
                                                return(<option key={teacher._id} value={teacher._id}>{teacher.name} {teacher.lastname}</option>)
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
                            <button type="button" className="btn btn-primary" onClick={submitForm}>Buscar Horario</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CourseForm;