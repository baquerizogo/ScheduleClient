import { useContext } from 'react';

//Components
import schoolyearContext from '../../context/schoolyears/schoolyearContext'

import { MoreVertical } from "react-feather"

const Table = () => {
    //obtener el state del formulario
    const schoolyearsContext = useContext(schoolyearContext);
    const { schoolyears } = schoolyearsContext; // Datos Context

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Listado</h4>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>N. Semanas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            schoolyears
                            ? 
                                schoolyears.map((schoolyear) => (
                                    <tr key={schoolyear._id}>
                                        <td>
                                            <span className="font-weight-bold">{schoolyear.name}</span>
                                        </td>
                                        <td>{schoolyear.start_date}</td>
                                        <td>{schoolyear.end_date}</td>
                                        <td>{schoolyear.n_weeks}</td>
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