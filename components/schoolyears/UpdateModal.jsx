import React, {useContext, useState} from 'react';

//Components
import schoolyearContext from '../../context/schoolyears/schoolyearContext'

import { 
    Calendar, 
    Hash 
} from "react-feather";

const UpdateModal = ({data, index}) => {

    //obtener el state del formulario
    const schoolyearsContext = useContext(schoolyearContext);
    const {updateSchoolyear} = schoolyearsContext; //Funciones Context

    //Local State
    const [schoolyear, setSchoolyear] = useState({
        _id: data._id,
        name: data.name,
        start_date: '',
        end_date: '',
        n_weeks: data.n_weeks
    })

    const [form, setForm] = useState({
        msg: "",
        status: false,
        show: false,
    })

    const { name, start_date, end_date, n_weeks } = schoolyear;

    //registrar cambios en el state
    const handleChange = e => {
        setSchoolyear({
            ...schoolyear,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitSchoolyear = e => {
        e.preventDefault();

        //Validar
        if(name === '' || start_date === '' || end_date === '' || n_weeks === 0) {
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
        updateSchoolyear(schoolyear);
        
    }

    return (  
        <div className="modal fade" id={`updateModal${index}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary" id="exampleModalLongTitle" > Actualizar Periodo lectivo </h5>
                        <button type="button" className='close text-primary' data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true"> &times; </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form form-horizontal">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <div className="col-sm-2 col-form-label">
                                            <label htmlFor="name">Nombre:</label>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><Calendar size="16"/></span>
                                                </div>
                                                <input type="text" id="name" className="form-control" name="name" placeholder="Nombres" value={name} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 col-form-label">
                                            <label htmlFor="n_weeks">Semanas:</label>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><Hash size="16"/></span>
                                                </div>
                                                <input type="number" id="n_weeks" className="form-control" name="n_weeks" placeholder="1" value={n_weeks} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group row">
                                        <div className="col-sm-2 col-form-label">
                                            <label htmlFor="start_date">Fecha de inicio:</label>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="input-group input-group-merge">
                                                <input type="date" id="start_date" className="form-control flatpickr-basic" placeholder="YYYY-MM-DD" name="start_date" value={start_date} onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 col-form-label">
                                            <label htmlFor="end_date">Fecha de fin:</label>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="input-group input-group-merge">
                                                <input type="date" id="end_date" className="form-control flatpickr-basic" placeholder="YYYY-MM-DD" name="end_date" value={end_date} onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-9 offset-sm-3">
                                    {form.show ? <span className={`badge badge-pill ${form.status ? 'badge-light-success' : 'badge-light-danger'} mt-1`}>{form.msg}</span> : null }
                                </div>
                            </div>
                        </form>  
                    </div>
                    <div className="modal-footer">
                        <button type="button" className='btn btn-success' onClick={onSubmitSchoolyear}>
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