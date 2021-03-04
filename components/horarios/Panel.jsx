import { useEffect, useRef, useState } from "react";

const Panel = () => {
    const [data, setData] = useState([{
        x: 1, //1 - 5
        y: {
            H_inicio: 0,
            H_fin: 0,
            min_inicio: 0,
            min_fin: 0
        },
        asignatura: {
            name: ""
        }
    }]);

    // Ref
    const table = useRef(null);

    useEffect(() => {
        //                                       Accede a tr/hora [i]        Accede a td/Dia [j]
        //                    Accede a tbody ↴             ↓               ↙ 
        console.log(table.current.childNodes[1].childNodes[0].childNodes[1]);
        console.log(table.current.childNodes[1].childNodes[1].childNodes[1])

    }, []);

    const insert = () => {
        table.current.childNodes[1].childNodes[data[0].y.min_inicio].childNodes[data[0].x].innerHTML = `<div class="tdata tdata-h-2"><div><p>matematicas</p></div></div>`
    }

    return (  
        <div className="card">
            <div className="card-header">
                <h3>Crear horario</h3>
            </div>
            <div className="card-body">
                <div className="row">
                <div className="col-8">
                        <button onClick={insert}>Insertar elemento</button>
                    </div>
                </div>

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
                                    <td><div><p>Mate</p></div></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>8:20 - 8:40</td>
                                    <td className="pos"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>8:40 - 9:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>9:00 - 9:20</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>9:20 - 9:40</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>9:40 - 10:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>10:00 - 10:20</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>10:20 - 10:40</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>10:40 - 11:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>11:00 - 11:20</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>11:20 - 11:40</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>11:40 - 12:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Panel;