import { MoreVertical } from "react-feather"

const Table = () => {
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
                        <tr>
                            <td>
                                <span className="font-weight-bold">Angular Project</span>
                            </td>
                            <td>Peter Charls</td>
                            <td>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-sm dropdown-toggle hide-arrow" data-toggle="dropdown">
                                        <MoreVertical/>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="javascript:void(0);">
                                            <i data-feather="edit-2" className="mr-50"></i>
                                            <span>Edit</span>
                                        </a>
                                        <a className="dropdown-item" href="javascript:void(0);">
                                            <i data-feather="trash" className="mr-50"></i>
                                            <span>Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="font-weight-bold">React Project</span>
                            </td>
                            <td>Ronald Frest</td>
                            <td>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-sm dropdown-toggle hide-arrow" data-toggle="dropdown">
                                        <MoreVertical/>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="javascript:void(0);">
                                            <i data-feather="edit-2" className="mr-50"></i>
                                            <span>Edit</span>
                                        </a>
                                        <a className="dropdown-item" href="javascript:void(0);">
                                            <i data-feather="trash" className="mr-50"></i>
                                            <span>Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
                        
    );
}
 
export default Table;