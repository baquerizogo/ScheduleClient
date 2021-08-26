import { MoreVertical } from "react-feather"
import { useContext, useEffect } from "react";
import Link from 'next/link'

import accountContext from '../../context/accounts/accountContext'
import DeleteModal from "./DeleteModal";

const Table = () => {
    const accountsContext = useContext(accountContext);

    const { getAccount } = accountsContext; //Funciones Context
    const { accounts } = accountsContext; // Datos Context

    useEffect(() => {
        getAccount();
    }, [])

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
                            accounts
                            ?
                                accounts.map((account, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span className="font-weight-bold">{account.name}</span>
                                        </td>
                                        <td>{account.lastname}</td>
                                        <td>{account.dni}</td>
                                        <td>{account.email}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm dropdown-toggle hide-arrow" data-toggle="dropdown">
                                                    <MoreVertical/>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <Link href="#">
                                                        <a className="dropdown-item" data-toggle="modal" data-target={`#deleteModal${index}`}>
                                                            <i data-feather="trash" className="mr-50"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <DeleteModal index={index} data={account}/>
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
