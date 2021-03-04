import { MoreVertical } from "react-feather"
import { useContext, useEffect } from "react";


import teacherContext from '../../context/teachers/teacherContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'

const Table = () => {
    const teachersContext = useContext(teacherContext);
    const schoolyearsContext = useContext(schoolyearContext);

    const { getTeacher } = teachersContext; //Funciones Context
    const { teachers } = teachersContext; // Datos Context
    const { schoolyear } = schoolyearsContext; // Datos Context

    useEffect(() => {
        getTeacher({
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
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Cedula</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers
                            ?
                                teachers.map(teacher => (
                                    <tr key={teacher._id}>
                                        <td>
                                            <span className="font-weight-bold">{teacher.name}</span>
                                        </td>
                                        <td>{teacher.lastname}</td>
                                        <td>{teacher.dni}</td>
                                        <td>{teacher.email}</td>
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