import { MoreVertical } from "react-feather"
import { useContext, useEffect, useState } from "react";

import classContext from '../../context/classes/classContext'
import teacherContext from '../../context/teachers/teacherContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import courseContext from '../../context/courses/courseContext'


const Table = () => {
    const coursesContext = useContext(courseContext);
    const classesContext = useContext(classContext);
    const schoolyearsContext = useContext(schoolyearContext);
    const teachersContext = useContext(teacherContext);

    const { getTeacher, teachers } = teachersContext;   
    const { getClass, classes} = classesContext; 
    const { getCourse, courses } = coursesContext; 
    const { schoolyear } = schoolyearsContext; 

    //Obtener profesores
    useEffect(() => {
        if(schoolyear != '') {
            getTeacher({
                id_schoolyear : schoolyear[0]._id
            });
        }
    }, [schoolyear])

    //Obtener cursos
    useEffect(() => {
        if(schoolyear != '') {
            getCourse({
                id_schoolyear : schoolyear[0]._id
            });
        }
    }, [schoolyear])


    const [course, setCourse] = useState({
        name: "",
        id_course: ""
    });

    const [teacher, setTeacher] = useState({
        name: "",
        id_teacher: ""
    });

    useEffect(() => {
        if(course.id_course != ''){
            getClass(course)
        }
    },[course])

    useEffect(() => {
        if(teacher.id_teacher != '')
        getClass(teacher)
    },[teacher])

    const handleChange = e => {
        const data = JSON.parse(e.target.value);
        setCourse({
            name: data.name,
            id_course: data.id
        })
    }

    const handleChangeTeacher = e => {
        const data = JSON.parse(e.target.value);
        setTeacher({
            name: data.name,
            id_teacher: data.id,
            id_schoolyear: schoolyear[0]._id
        })
    }

    return ( 
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Listado</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="SelectList">Seleccione un curso:</label>
                            <select className="form-control" id="SelectList" onChange={handleChange}>
                                <option value="">Seleccione</option>
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
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="SelectList2">Seleccione un profesor:</label>
                            <select className="form-control" id="SelectList1" onChange={handleChangeTeacher}>
                                <option value="">Seleccione</option>
                                {
                                    teachers
                                    ?
                                        teachers.map(teacher => (
                                            <option key={teacher._id} value={`{"id":"${teacher._id}", "name":"${teacher.name}"}`}>{`${teacher.name} ${teacher.lastname}`}</option>
                                        ))
                                    : null 
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>N. Horas Semanales</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes
                            ?
                                classes.map(xclass => (
                                    <tr key={xclass._id}>
                                        <td>
                                            <span className="font-weight-bold">{xclass.name}</span>
                                        </td>
                                        <td>{xclass.description}</td>
                                        <td className="text-center">{xclass.hours_week}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm dropdown-toggle hide-arrow" data-toggle="dropdown">
                                                    <MoreVertical/>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        <i data-feather="edit-2" className="mr-50"></i>
                                                        <span>Edit</span>
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i data-feather="trash" className="mr-50"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            : null
                        }
                    </tbody>
                </table>
            </div>
        </div>       
    );
}
 
export default Table;