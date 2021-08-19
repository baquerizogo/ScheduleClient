import { useState, useContext, useEffect } from "react";
import { Box } from "react-feather";

import teacherContext from "../../context/teachers/teacherContext";

const UpdateModal = ({data, index}) => {    
    //obtener el state del formulario
    const teachersContext = useContext(teacherContext);
    const {updateTeacher} = teachersContext

    //Local State
    const [teacher, setTeacher] = useState({
        _id: data._id,
        name: data.name,
        lastname: data.lastname
    })

    const [form, setForm] = useState({
        msg: "",
        status: false,
        show: false,
    })

    const {name, lastname} = teacher;

    //Leer valores del form
    const handleChange = e => {
        setTeacher({
            ...teacher,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();

        //Validar
        if(name.trim() === '' || lastname.trim() === '') {
            setForm({
                msg: 'Todos los campos son obligatorios',
                status: false,
                show: true
            });
            return;
        }

        setForm({
            msg: 'Datos actualizados con éxito',
            status: true,
            show: true
        })

        setTimeout(() => {
            setForm({
                msg: '',
                status: false,
                show: false
            })
        }, 3000);
        
        //Agregar al context
        updateTeacher(teacher);
    }

    return (  
        <div className="modal fade" id={`updateModal${index}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary" id="exampleModalLongTitle" > Actualizar paralelo </h5>
                        <button type="button" className='close text-primary' data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true"> &times; </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form form-horizontal">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <div className="col-sm-3 col-form-label">
                                            <label htmlFor="name">Nombres:</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><Box size="16"/></span>
                                                </div>
                                                <input type="text" id="name" className="form-control" name="name" placeholder="First Name" value={name} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group row">
                                        <div className="col-sm-3 col-form-label">
                                            <label htmlFor="lastname">Apellidos:</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><Box size="16"/></span>
                                                </div>
                                                <input type="text" id="lastname" className="form-control" name="lastname" placeholder="Last name" value={lastname} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 offset-sm-3">
                                    {form.show ? <span className={`badge badge-pill ${form.status ? 'badge-light-success' : 'badge-light-danger'} mt-1`}>{form.msg}</span> : null }
                                </div>
                            </div>
                        </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className='btn btn-success' onClick={submitForm}>
                            Actualizar
                        </button>
                        <button type="button" className='btn btn-secondary' data-dismiss="modal">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UpdateModal;