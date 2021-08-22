import { useEffect, useRef, useContext, useState } from "react";
import { toPng } from 'html-to-image'
import { jsPDF } from "jspdf";

//Components
import scheduleContext from '../../context/schedules/scheduleContext'

const Panel = ({state}) => {
    const schedulesContext = useContext(scheduleContext);
    const { schedules } = schedulesContext;

    const table = useRef(null);
    const exportArea = useRef(null);

    const [teacherSchedule, setTeacherSchedule] = useState({});
    const [times, setTimes] = useState({
        inicio : [
            {name: "8:00", value: 0},
            {name: "8:20", value: 1},
            {name: "8:40", value: 2},
            {name: "9:00", value: 3},
            {name: "9:20", value: 4},
            {name: "9:40", value: 5},
            {name: "10:40", value: 6},
            {name: "11:00", value: 7},
            {name: "11:20", value: 8},
            {name: "11:40", value: 9}
        ],

        fin : [
            {name: "8:20", value: 1},
            {name: "8:40", value: 2},
            {name: "9:00", value: 3},
            {name: "9:20", value: 4},
            {name: "9:40", value: 5},
            {name: "10:00", value: 6},
            {name: "11:00", value: 7},
            {name: "11:20", value: 8},
            {name: "11:40", value: 9},
            {name: "12:00", value: 10}
        ]
    })

    const {inicio, fin} = times;


    const generateImage=async ()=>{
        const image = await toPng(exportArea.current,{quality:1});
            const doc = new jsPDF({
                orientation: "landscape"
            });
    
        doc.addImage(image,'JPEG',15,5, 270, 200);
        doc.save();
    }

    useEffect(() => {
        //Separar solo las asignaturas que le corresponden a ese docente
        let data = [];
        let count = 0;
        let globalCount = 0;
        let modality;

        if(schedules.length > 0 && state) {
            schedules.map((schedule) => {
                let flag = false;
                for(let i in schedule.data) {
                    if(schedule.data[i].teacher._id == state.id_teacher) {
                        let element = schedule.data[i];
                        element.courseName = schedule.courseName;
                        element.parallelName = schedule.parallelName;
                        if(schedule.modality == 1) {
                            element.modality = 1;
                        }
                        flag = true;
                        data = [...data, element];
                    }
                }

                if(flag === true) {
                    globalCount++;
                    if(schedule.modality == 1) {
                        count++;
                    }
                }
            })

            //Si todos son matutinos 0, si son vespertinos 1, si son mixtos 2
            if(count === 0) modality = 0;
            else if(globalCount === count ) modality = 1;
            else modality = 2;

            switch(modality) {
                case 0:
                    setTimes({
                        inicio : [
                            {name: "8:00", value: 0},
                            {name: "8:20", value: 1},
                            {name: "8:40", value: 2},
                            {name: "9:00", value: 3},
                            {name: "9:20", value: 4},
                            {name: "9:40", value: 5},
                            {name: "10:40", value: 6},
                            {name: "11:00", value: 7},
                            {name: "11:20", value: 8},
                            {name: "11:40", value: 9}
                        ],
            
                        fin : [
                            {name: "8:20", value: 1},
                            {name: "8:40", value: 2},
                            {name: "9:00", value: 3},
                            {name: "9:20", value: 4},
                            {name: "9:40", value: 5},
                            {name: "10:00", value: 6},
                            {name: "11:00", value: 7},
                            {name: "11:20", value: 8},
                            {name: "11:40", value: 9},
                            {name: "12:00", value: 10}
                        ]
                    })
                    break;
                case 1:
                    setTimes({
                        inicio : [
                            {name: "13:00", value: 0},
                            {name: "13:20", value: 1},
                            {name: "13:40", value: 2},
                            {name: "14:00", value: 3},
                            {name: "14:20", value: 4},
                            {name: "14:40", value: 5},
                            {name: "15:40", value: 6},
                            {name: "16:00", value: 7},
                            {name: "16:20", value: 8},
                            {name: "16:40", value: 9}
                        ],
            
                        fin : [
                            {name: "13:20", value: 1},
                            {name: "13:40", value: 2},
                            {name: "14:00", value: 3},
                            {name: "14:20", value: 4},
                            {name: "14:40", value: 5},
                            {name: "15:00", value: 6},
                            {name: "16:00", value: 7},
                            {name: "16:20", value: 8},
                            {name: "16:40", value: 9},
                            {name: "17:00", value: 10}
                        ] 
                    })
                    break;
                case 2:
                    setTimes({
                        inicio : [
                            {name: "8:00", value: 0},
                            {name: "8:20", value: 1},
                            {name: "8:40", value: 2},
                            {name: "9:00", value: 3},
                            {name: "9:20", value: 4},
                            {name: "9:40", value: 5},
                            {name: "10:40", value: 6},
                            {name: "11:00", value: 7},
                            {name: "11:20", value: 8},
                            {name: "11:40", value: 9},
                            {name: "13:00", value: 10},
                            {name: "13:20", value: 11},
                            {name: "13:40", value: 12},
                            {name: "14:00", value: 13},
                            {name: "14:20", value: 14},
                            {name: "14:40", value: 15},
                            {name: "15:40", value: 16},
                            {name: "16:00", value: 17},
                            {name: "16:20", value: 18},
                            {name: "16:40", value: 19}
                        ],
            
                        fin : [
                            {name: "8:20", value: 1},
                            {name: "8:40", value: 2},
                            {name: "9:00", value: 3},
                            {name: "9:20", value: 4},
                            {name: "9:40", value: 5},
                            {name: "10:00", value: 6},
                            {name: "11:00", value: 7},
                            {name: "11:20", value: 8},
                            {name: "11:40", value: 9},
                            {name: "12:00", value: 10},
                            {name: "13:20", value: 11},
                            {name: "13:40", value: 12},
                            {name: "14:00", value: 13},
                            {name: "14:20", value: 14},
                            {name: "14:40", value: 15},
                            {name: "15:00", value: 16},
                            {name: "16:00", value: 17},
                            {name: "16:20", value: 18},
                            {name: "16:40", value: 19},
                            {name: "17:00", value: 20}
                        ]
                    })
                    break;
            }

            //Guardar local state
            setTeacherSchedule({
                ...teacherSchedule,
                data,
                modality
            })

        }
    },[state])

    useEffect(() => {

        if(teacherSchedule.data && inicio) {
            for (let i in inicio) {
                for(let j=1 ; j<=5; j++) {
                    table.current.childNodes[1].childNodes[i].childNodes[j].innerHTML = ""
                }
            }

            if(teacherSchedule.data.length > 0){
                for(let i in teacherSchedule.data) {
                    if(teacherSchedule.data[i].modality === 1 && teacherSchedule.modality === 2) {
                        teacherSchedule.data[i].y.min_fin += 12;
                        teacherSchedule.data[i].y.min_inicio +=12;
                    }

                    const height = teacherSchedule.data[i].y.min_fin - teacherSchedule.data[i].y.min_inicio;
                    table.current.childNodes[1].childNodes[teacherSchedule.data[i].y.min_inicio].childNodes[teacherSchedule.data[i].x].innerHTML = `<div class="tdata tdata-h-${height} ${teacherSchedule.data[i].color}"><div><p>${teacherSchedule.data[i].asignatura.name}</p><p>${teacherSchedule.data[i].courseName} - ${teacherSchedule.data[i].parallelName}</p></div></div>`     
                }
            } else {
                for (let i in inicio) {
                    for(let j=1 ; j<=5; j++) {
                        table.current.childNodes[1].childNodes[i].childNodes[j].innerHTML = ""
                    }
                }
            }
        }

        
    }, [teacherSchedule]);

    return ( 
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-3 offset-md-9">
                        <button className="btn btn-primary" onClick={generateImage}>Exportar como PDF</button>
                    </div>
                </div>
                <div className="row" ref={exportArea}>
                    <div className="col-12">
                        <h4 className="card-title">Horario - {state ? `${state.teacher}`: null}</h4>
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