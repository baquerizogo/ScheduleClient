import { useContext, useEffect, useState } from "react";
import Link from 'next/link'

//Components
import courseContext from '../../context/courses/courseContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import parallelContext from '../../context/parallels/parallelContext'

import { MoreVertical } from "react-feather"
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

const Table = () => {
    const coursesContext = useContext(courseContext);
    const schoolyearsContext = useContext(schoolyearContext);
    const parallelsContext = useContext(parallelContext);


    //Obtener datos necesarios de los cursos
    const { getCourse } = coursesContext; //Funciones Context
    const { courses } = coursesContext; // Datos Context

    //Obtener el año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    //Obtener funciones para paralelos
    const { getParallel } = parallelsContext; // Funciones Context
    const { parallels } = parallelsContext; // Datos Context

    useEffect(() => {
        getCourse({
            id_schoolyear : schoolyear[0]._id
        });
    }, [schoolyear])

    
    const [course, setCourse] = useState({
        name: "",
        id_course: ""
    });

    useEffect(() => {
        if(course.id_course != "") {
            getParallel(course);
        }
    }, [course])

    const handleChange = e => {
        const data = JSON.parse(e.target.value);
        setCourse({
            name: data.name,
            id_course: data.id
        })
    }

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Listado</h4>
            </div>
            <div className="card-body">
            <div className="form-group">
                <label htmlFor="SelectList">Seleccione un curso:</label>
                <select className="form-control" id="SelectList" onChange={handleChange}>
                    <option value="">Seleccione</option>
                    {
                        courses
                        ?
                            courses.map((course, index) => (
                                <option key={index} value={`{"id":"${course._id}", "name":"${course.name}"}`}>{course.name}</option>
                            ))
                        : null 
                    }
                </select>
            </div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Paralelo</th>
                            <th>Descripción</th>
                            <th>Curso</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parallels
                            ?
                                parallels.map((parallel, index) => (
                                    <tr key={parallel._id}>
                                        <td>
                                            <span className="font-weight-bold">{parallel.name}</span>
                                        </td>
                                        <td>{parallel.description}</td>
                                        <td><span className="badge badge-pill badge-light-primary mr-1">{course.name}</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm dropdown-toggle hide-arrow" data-toggle="dropdown">
                                                    <MoreVertical key={parallel._id}/>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <Link href="#">
                                                        <a className="dropdown-item" data-toggle="modal" data-target={`#updateModal${index}`}>
                                                            <i data-feather="edit-2" className="mr-50"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </Link>
                                                    <Link href="#">
                                                        <a className="dropdown-item" data-toggle="modal" data-target={`#deleteModal${index}`}>
                                                            <i data-feather="trash" className="mr-50"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <UpdateModal index={index} data={parallel}/>
                                            <DeleteModal index={index} data={parallel}/>
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