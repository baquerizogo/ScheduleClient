import { useEffect, useRef, useState } from "react";

const Panel = () => {
    const [dia, setDia] = useState([
        {name: "Lunes", value: 1},
        {name: "Martes", value: 2},
        {name: "Miercoles", value: 3},
        {name: "Jueves", value: 4},
        {name: "Viernes", value: 5},
    ])

    const [inicio, setInicio] = useState([
        {name: "8:00", value: 0},
        {name: "8:20", value: 1},
        {name: "8:40", value: 2},
        {name: "9:00", value: 3},
        {name: "9:20", value: 4},
        {name: "9:40", value: 5},
        {name: "10:00", value: 6},
        {name: "10:20", value: 7},
        {name: "10:40", value: 8},
        {name: "11:00", value: 9},
        {name: "11:20", value: 10},
        {name: "11:40", value: 11},
    ])

    const [fin, setFin] = useState([
        {name: "8:20", value: 1},
        {name: "8:40", value: 2},
        {name: "9:00", value: 3},
        {name: "9:20", value: 4},
        {name: "9:40", value: 5},
        {name: "10:00", value: 6},
        {name: "10:20", value: 7},
        {name: "10:40", value: 8},
        {name: "11:00", value: 9},
        {name: "11:20", value: 10},
        {name: "11:40", value: 11},
        {name: "12:00", value: 12},
    ])

    //Datos individuales del formulario
    const [element, setElement] = useState({})

    //Estado para las casillas del horario
    const [data, setData] = useState([]);

    // Referencia
    const table = useRef(null);

    useEffect(() => {
        setData([
            {
                x: 1,
                y: {
                    h_inicio: 0,
                    h_fin: 0,
                    min_inicio: 0,
                    min_fin: 2
                },
                asignatura: {
                    name: "Matemáticas"
                },
                color: "s-blue"
            },
            {
                x: 2,
                y: {
                    h_inicio: 0,
                    h_fin: 0,
                    min_inicio: 0,
                    min_fin: 2
                },
                asignatura: {
                    name: "Matemáticas"
                },
                color: "s-blue"
            },
            {
                x: 3,
                y: {
                    h_inicio: 0,
                    h_fin: 0,
                    min_inicio: 2,
                    min_fin: 3
                },
                asignatura: {
                    name: "Ciencias Naturales"
                },
                color: "s-yellow"
            },
            {
                x: 1,
                y: {
                    h_inicio: 0,
                    h_fin: 0,
                    min_inicio: 2,
                    min_fin: 5
                },
                asignatura: {
                    name: "Historia"
                },
                color: "s-red"
            },
            {
                x: 5,
                y: {
                    H_inicio: 0,
                    H_fin: 0,
                    min_inicio: 6,
                    min_fin: 8
                },
                asignatura: {
                    name: "Lenguaje"
                },
                color: "s-green"
            }
        ])
    }, [])

    useEffect(() => {
        //                                         Accede a tr/hora [i]        Accede a td/Dia [j]
        //                      Accede a tbody ↴             ↓               ↙ 
        //console.log(table.current.childNodes[1].childNodes[0].childNodes[1]);
        
        if(data.length > 0){
            for(let i in data) {
                const height = data[i].y.min_fin - data[i].y.min_inicio;
                table.current.childNodes[1].childNodes[data[i].y.min_inicio].childNodes[data[i].x].innerHTML = `<div class="tdata tdata-h-${height} ${data[i].color}"><div><p>${data[i].asignatura.name}</p></div></div>`     
            }        
        }
    }, [data]);

    const handleChangeA = e => {
        const data = JSON.parse(e.target.value);
        setElement({
            ...element,
            asignatura: {
                name: data.name
            },
            color: data.color
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
        console.log("enviando")
        setData([
            ...data,
            element
        ])
    }

    return ( 
        <>
        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Seleccionar curso</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="course">Curso:</label>
                                </div>
                                <div className="col-sm-10">
                                    <div className="input-group input-group-merge">
                                        <select className="form-control" id="course">
                                            <option>Seleccione</option>                                
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-1">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="parallel">Paralelo:</label>
                                </div>
                                <div className="col-sm-10">
                                    <div className="input-group input-group-merge">
                                        <select className="form-control" id="parallel">
                                            <option>Seleccione</option>
                                        </select>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
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
                                        <select className="form-control" id="basicSelect" onChange={handleChangeA}>
                                            <option>Seleccione</option>
                                            <option value={`{"color":"s-blue", "name":"Matemáticas"}`}>Matemáticas</option>
                                            <option value={`{"color":"s-red", "name":"Ciencias Naturales"}`}>Ciencias Naturales</option>        
                                            <option value={`{"color":"s-yellow", "name":"Ciencias Sociales"}`}>Ciencias Sociales</option>        
                                            <option value={`{"color":"s-green", "name":"Cultura Física"}`}>Cultura Física</option>        
                                            <option value={`{"color":"s-orange", "name":"Química Nuclear IV"}`}>Química Nuclear XVI</option>              
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
                                        <select className="form-control" id="basicSelect1" onChange={handleChangeX}>
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
                                <div className="col-10">
                                    <div className="input-group input-group-merge">
                                        <select className="form-control" id="basicSelect2" name="h_inicio" onChange={handleChangeYInicio}>
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
                            </div>
                            <div className="row">
                                <div className="col-2 col-form-label">
                                    <label htmlFor="basicSelect3">Hora fin:</label>
                                </div>
                                <div className="col-10">
                                    <div className="input-group input-group-merge">
                                        <select className="form-control" id="basicSelect3" name="h_fin" onChange={handleChangeYfin}>
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-layout" ref={table}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>LUNES</th>
                                    <th>MARTES</th>
                                    <th>MIERCOLES</th>
                                    <th>JUEVES</th>
                                    <th>VIERNES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8:00 - 8:20</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>8:20 - 8:40</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>8:40 - 9:00</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>9:00 - 9:20</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>9:20 - 9:40</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>9:40 - 10:00</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>10:00 - 10:20</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>10:20 - 10:40</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>10:40 - 11:00</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>11:00 - 11:20</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>11:20 - 11:40</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                                <tr>
                                    <td>11:40 - 12:00</td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                    <td className="pos"></td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Panel;