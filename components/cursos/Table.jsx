import { useContext, useEffect } from "react";
import { MoreVertical } from "react-feather"
import Link from 'next/link'

import courseContext from '../../context/courses/courseContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";


const Table = () => {
    const coursesContext = useContext(courseContext);
    const schoolyearsContext = useContext(schoolyearContext);

    const { getCourse } = coursesContext; //Funciones Context
    const { courses } = coursesContext; // Datos Context
    const { schoolyear } = schoolyearsContext; // Datos Context

    useEffect(() => {
        getCourse({
            id_schoolyear : schoolyear[0]._id
        });
    }, [schoolyear])

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Listado</h4>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Curso</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses
                            ?
                                courses.map((course, index) => (
                                    <tr key={course._id}>
                                        <td>
                                            <span className="font-weight-bold">{course.name}</span>
                                        </td>
                                        <td>{course.description}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm dropdown-toggle hide-arrow" data-toggle="dropdown">
                                                    <MoreVertical/>
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
                                            <UpdateModal index={index} data={course}/>
                                            <DeleteModal index={index} data={course}/>
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