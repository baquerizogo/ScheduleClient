import React, {useContext, useState} from 'react';

import { Calendar, Hash } from "react-feather";
import schoolyearContext from '../../context/schoolyears/schoolyearContext'


const Form = () => {

    //obtener el state del formulario
    const schoolyearsContext = useContext(schoolyearContext);
    const { errorForm } = schoolyearsContext; // Datos Context
    const { checkForm, createSchoolyear} = schoolyearsContext; //Funciones Context

    const [schoolyear, setSchoolyear] = useState({
        name: '',
        start_date: '',
        end_date: '',
        n_weeks: 0
    })

    //Extraer nombre
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
            checkForm();
            return;
        }

        //Agregar al context
        createSchoolyear(schoolyear);
        //Reiniciar form
        reset();
    }

    const reset = () => {
        setSchoolyear({
            name: '',
            start_date: '',
            end_date: '',
            n_weeks: 0
        })
    }

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nuevo periodo lectivo</h4>
            </div>
            <div className="card-body">
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
                                <div className="col-1"></div>
                                <div className="col-sm-1 col-form-label">
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
                                <div className="col-1"></div>
                                <div className="col-sm-1 col-form-label">
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
                            <button type="button" className="btn btn-primary mr-1" onClick={onSubmitSchoolyear}>Guardar</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={reset}>Reiniciar</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9 offset-sm-3">
                            {errorForm ? <span className="badge badge-pill badge-light-danger mt-1">Todos los campos son obligatorios</span> : null }
                        </div>
                    </div>
                </form>
            </div>
        </div>              
    );
}
 
export default Form;