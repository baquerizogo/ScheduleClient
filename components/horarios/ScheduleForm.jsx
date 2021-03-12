import { useContext, useEffect, useState, useRef } from 'react';

//Components
import scheduleContext from '../../context/schedules/scheduleContext'
import classContext from '../../context/classes/classContext'
import teacherContext from '../../context/teachers/teacherContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'

const ScheduleForm = () => {
    const schedulesContext = useContext(scheduleContext);
    const classesContext = useContext(classContext);
    const teachersContext = useContext(teacherContext);
    const schoolyearsContext = useContext(schoolyearContext);

    const { getClass, classes } = classesContext;
    const { setData, createSchedule, clearData, inicio, fin, id_parallel, newForm, msg, data, modality } = schedulesContext;
    const { getTeacher, teachers } = teachersContext;
    const { schoolyear } = schoolyearsContext; 

    //Datos individuales del formulario
    const [element, setElement] = useState({})
    const colors = ['s-blue', 's-yellow', 's-green', 's-orange', 's-red'];
    const [dia, setDia] = useState([
        {name: "Lunes", value: 1},
        {name: "Martes", value: 2},
        {name: "Miercoles", value: 3},
        {name: "Jueves", value: 4},
        {name: "Viernes", value: 5},
    ])

    //Referencias del formulario
    const selectDay = useRef(null);
    const selectClass = useRef(null);
    const selectTeacher = useRef(null);
    const selectHend = useRef(null);
    const selectHstart = useRef(null);

    useEffect(() => {
        if(id_parallel) {
            getClass({id_parallel})
        }
    }, [id_parallel])

    useEffect(()=>{
        clear();
    },[newForm])
    
    const handleChangeClass = e => {
        const data = JSON.parse(e.target.value);
        setElement({
            ...element,
            asignatura: data.asignatura,
            color: data.color
        }) 

        if (e.target.value) getTeacher({
            id_class: data.asignatura._id,
            id_schoolyear: schoolyear[0]._id
        });
    }

    const handleChangeTeacher = e => {
        const data = JSON.parse(e.target.value);
        setElement({
            ...element,
            teacher : data
        }) 
    }

    const handleChangeX = e => {
        setElement({
            ...element,
            x: e.target.value
        })
    }

    const handleChangeYInicio = e => {
        const data = JSON.parse(e.target.value);
        setElement({
            ...element,
            y:{
                ...element.y,
                h_inicio: data.h_inicio,
                min_inicio: data.min_inicio,
            }
        })
    }

    const handleChangeYfin = e => {
        const data = JSON.parse(e.target.value);
        setElement({
            ...element,
            y:{
                ...element.y,
                h_fin: data.h_fin,
                min_fin: data.min_fin
            }
        })
    }

    const onSubmitForm = e => {
        e.preventDefault();
        console.log("enviando");
        setData(element);
    }

    const saveSchedule = e => {
        e.preventDefault();
        console.log("Guardando");

        //Construimos el objeto
        const object = {
            data,
            modality,
            id_parallel,
            id_schoolyear: schoolyear[0]._id
        }

        //Enviar datos a la API
        createSchedule(object);
        clear();
        clearData();
    }

    const clear = () => {
        selectDay.current.value = "Seleccione";
        selectTeacher.current.value = "Seleccione";
        selectClass.current.value = "Seleccione";
        selectHend.current.value = "Seleccione";
        selectHstart.current.value = "Seleccione";

        setElement({});
    }

    return (
        <div className="card ">
            <div className="card-header">
                <h3>Crear horario</h3>
            </div>
            <div className="card-body">
                <div className="form-group"> 
                    <div className="row">
                        <div className="col-2 col-form-label">
                            <label htmlFor="basicSelect">Asignatura:</label>
                        </div>
                        <div className="col-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="basicSelect" onChange={handleChangeClass} ref={selectClass}>
                                    <option>Seleccione</option>
                                    {
                                        classes
                                        ?
                                            classes.map((xclass, index) => (
                                                <option key={index} value={`{"color":"${colors[index]}", "asignatura":${JSON.stringify(xclass)}}`}>{xclass.name}</option>
                                            ))
                                        : null
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-2 col-form-label">
                            <label htmlFor="teacher">Profesor:</label>
                        </div>
                        <div className="col-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="teacher" onChange={handleChangeTeacher} ref={selectTeacher}>
                                    <option>Seleccione</option>
                                    {
                                        teachers
                                        ?
                                            teachers.map((teacher)=> (
                                                <option key={teacher._id} value={JSON.stringify(teacher)}>{teacher.name} {teacher.lastname}</option>
                                            ))
                                        : null
                                    }
                                </select>
                            </div>
                        </div>
                    </div> 
                    <div className="row mt-1">
                        <div className="col-2 col-form-label">
                            <label htmlFor="basicSelect1">Día:</label>
                        </div>
                        <div className="col-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="basicSelect1" onChange={handleChangeX} ref={selectDay}>
                                    <option>Seleccione</option>
                                    {
                                        dia
                                        ? 
                                            dia.map((d) => (
                                                <option key={d.value} value={d.value}>{d.name}</option>
                                            ))
                                        : null
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-2 col-form-label">
                            <label htmlFor="basicSelect2">Hora inicio:</label>
                        </div>
                        <div className="col-4">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="basicSelect2" name="h_inicio" onChange={handleChangeYInicio} ref={selectHstart}>
                                    <option>Seleccione</option>
                                    {
                                        inicio
                                        ? 
                                            inicio.map((i) => (
                                                <option key={i.value} value={`{"h_inicio":"${i.name}", "min_inicio":${i.value}}`}>{i.name}</option>
                                            ))
                                        : null
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-2 col-form-label">
                            <label htmlFor="basicSelect3">Hora fin:</label>
                        </div>
                        <div className="col-4">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="basicSelect3" name="h_fin" onChange={handleChangeYfin} ref={selectHend}>
                                    <option>Seleccione</option>
                                    {
                                        fin
                                        ? 
                                            fin.map((f) => (
                                                <option key={f.value} value={`{"h_fin":"${f.name}", "min_fin":${f.value}}`}>{f.name}</option>
                                            ))
                                        : null
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-2"></div>
                        <div className="col-3">
                            <button type="button" className="btn btn-primary" onClick={onSubmitForm}>Agregar</button>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-success" onClick={saveSchedule}>Guardar</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-2 ">
                            { msg ? <span className="badge badge-pill badge-light-danger mt-1">{msg}</span> : null }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ScheduleForm;