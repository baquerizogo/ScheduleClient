import { useEffect, useRef, useContext } from "react";
import { toPng } from 'html-to-image'
import { jsPDF } from "jspdf";

//Components
import scheduleContext from '../../context/schedules/scheduleContext'
import authContext from '../../context/auth/authContext'
import DeleteModal from './DeleteModal'

const Panel = ({state}) => {
    const schedulesContext = useContext(scheduleContext);
    const AuthContext = useContext(authContext);
    const { account } = AuthContext;
    const { activeSchedule, clearData, inicio, fin } = schedulesContext;

    const table = useRef(null);
    const exportArea = useRef(null);

    const generateImage=async ()=>{
        const image = await toPng(exportArea.current,{quality:1});
        const doc = new jsPDF({
            orientation: "landscape"
        });
    
        doc.addImage(image,'JPEG',15,5, 270, 200);
        doc.save();
    }

    useEffect(() => {
        clearData();
    },[])

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
        <div>
            {
                activeSchedule.length > 0 ?
                
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-2 offset-md-8">
                                {activeSchedule.length > 0 && account.role  < 2 ? 
                                    <div>
                                        <button className="btn btn-danger" data-toggle="modal" data-target={`#deleteModal0`}>Eliminar horario</button>
                                        <DeleteModal index={0} data={activeSchedule[0]}/>
                                    </div>
                                : null }
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary" onClick={generateImage}>Exportar como PDF</button>
                            </div>
                        </div>
                        <div className="row" ref={exportArea}>
                            <div className="col-12">
                                <h4 className="card-title">Horario - {state ? `${state.curso} ${state.paralelo}`: null}</h4>
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
                : null
            }
        </div>
    );
}
 
export default Panel;