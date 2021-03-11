import { useEffect, useRef, useContext } from "react";

//Components
import scheduleContext from '../../context/schedules/scheduleContext'


const Panel = () => {
    const schedulesContext = useContext(scheduleContext);

    const { data, inicio, fin } = schedulesContext;

    // Referencia
    const table = useRef(null);

    
    /*useEffect(() => {
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
            }
        ])
    }, [])*/

    useEffect(() => {
        //                                         Accede a tr/hora [i]        Accede a td/Dia [j]
        //                      Accede a tbody ↴             ↓               ↙ 
        //console.log(table.current.childNodes[1].childNodes[0].childNodes[1]);
        
        if(data.length > 0){
            for(let i in data) {
                const height = data[i].y.min_fin - data[i].y.min_inicio;
                table.current.childNodes[1].childNodes[data[i].y.min_inicio].childNodes[data[i].x].innerHTML = `<div class="tdata tdata-h-${height} ${data[i].color}"><div><p>${data[i].asignatura.name}</p></div></div>`     
            }
        } else {
            for (let i in inicio) {
                for(let j=1 ; j<=5; j++) {
                    table.current.childNodes[1].childNodes[i].childNodes[j].innerHTML = ""
                }
            }
        }
    }, [data]);


    return ( 
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
                                {
                                    inicio 
                                    ?
                                        inicio.map((element, index) => (
                                            <tr key={index}>
                                                <td>{element.name} - {fin[index].name}</td>
                                                <td className="pos"></td>
                                                <td className="pos"></td>
                                                <td className="pos"></td>
                                                <td className="pos"></td>
                                                <td className="pos"></td>
                                            </tr>
                                        )) 
                                    : null
                                }
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Panel;