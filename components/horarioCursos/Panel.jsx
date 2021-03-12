import { useEffect, useRef, useContext } from "react";

//Components
import scheduleContext from '../../context/schedules/scheduleContext'


const Panel = () => {
    const schedulesContext = useContext(scheduleContext);
    const { activeSchedule } = schedulesContext;

    const table = useRef(null);
    let inicio = [
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
        {name: "11:40", value: 11}
    ]

    let fin = [
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
        {name: "12:00", value: 12}
    ]

    
        if(activeSchedule.length > 0) {
            if(activeSchedule[0].modality == 0) {
                inicio = [
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
                    {name: "11:40", value: 11}
                ]
        
                fin = [
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
                    {name: "12:00", value: 12}
                ]
            } else {
                inicio = [
                    {name: "13:00", value: 0},
                    {name: "13:20", value: 1},
                    {name: "13:40", value: 2},
                    {name: "14:00", value: 3},
                    {name: "14:20", value: 4},
                    {name: "14:40", value: 5},
                    {name: "15:00", value: 6},
                    {name: "15:20", value: 7},
                    {name: "15:40", value: 8},
                    {name: "16:00", value: 9},
                    {name: "16:20", value: 10},
                    {name: "16:40", value: 11}
                ]
        
                fin = [
                    {name: "13:20", value: 1},
                    {name: "13:40", value: 2},
                    {name: "14:00", value: 3},
                    {name: "14:20", value: 4},
                    {name: "14:40", value: 5},
                    {name: "15:00", value: 6},
                    {name: "15:20", value: 7},
                    {name: "15:40", value: 8},
                    {name: "16:00", value: 9},
                    {name: "16:20", value: 10},
                    {name: "16:40", value: 11},
                    {name: "17:00", value: 12}
                ]
            }
        }
    

    useEffect(() => {
        if(activeSchedule.length > 0) {
            for (let i in inicio) {
                for(let j=1 ; j<=5; j++) {
                    table.current.childNodes[1].childNodes[i].childNodes[j].innerHTML = ""
                }
            }

            if(activeSchedule[0].data.length > 0){
                for(let i in activeSchedule[0].data) {
                    const height = activeSchedule[0].data[i].y.min_fin - activeSchedule[0].data[i].y.min_inicio;
                    table.current.childNodes[1].childNodes[activeSchedule[0].data[i].y.min_inicio].childNodes[activeSchedule[0].data[i].x].innerHTML = `<div class="tdata tdata-h-${height} ${activeSchedule[0].data[i].color}"><div><p>${activeSchedule[0].data[i].asignatura.name}</p><p>${activeSchedule[0].data[i].teacher.name} ${activeSchedule[0].data[i].teacher.lastname}</p></div></div>`     
                }
            } else {
                for (let i in inicio) {
                    for(let j=1 ; j<=5; j++) {
                        table.current.childNodes[1].childNodes[i].childNodes[j].innerHTML = ""
                    }
                }
            }
        }

        
    }, [activeSchedule]);


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