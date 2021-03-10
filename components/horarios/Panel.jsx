import { useEffect, useRef, useState } from "react";

const Panel = () => {

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
                color: "s-red"
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
                    name: "Ciencias Sociales"
                },
                color: "s-yellow"
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
                    name: "Cultura Física"
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


    return ( 
        <>
        <div className="row">
            <div className="col-6">

            </div>
            <div className="col-6">

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