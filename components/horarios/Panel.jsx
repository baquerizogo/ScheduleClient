import { useEffect, useRef, useContext } from "react";

//Components
import scheduleContext from '../../context/schedules/scheduleContext'

const Panel = () => {
    const schedulesContext = useContext(scheduleContext);

    const { data, clearData, removeData, inicio, fin } = schedulesContext;

    // Referencia
    const table = useRef(null);

    useEffect(()=>{
        clearData();
    },[])

    useEffect(() => {
        //                                         Accede a tr/hora [i]        Accede a td/Dia [j]
        //                      Accede a tbody ↴             ↓               ↙ 
        //console.log(table.current.childNodes[1].childNodes[0].childNodes[1]);
        if(false)
        if(data.length > 0){
            for(let i in data) {
                const height = data[i].y.min_fin - data[i].y.min_inicio;
                table.current.childNodes[1].childNodes[data[i].y.min_inicio].childNodes[data[i].x].innerHTML = `<div class="tdata tdata-h-${height} ${data[i].color}"><div><p>${data[i].asignatura.name}</p><p>${data[i].teacher.name} ${data[i].teacher.lastname}</p></div></div>`     
            }
        } else {
            for (let i in inicio) {
                for(let j=1 ; j<=5; j++) {
                    table.current.childNodes[1].childNodes[i].childNodes[j].innerHTML = ""
                }
            }
        }
    }, [data]);

    const handleRemove = e => {
        removeData(e);
    }

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
                                                <td className="pos">
                                                    { 
                                                        data.length > 0 ? data.map(e => {
                                                            
                                                            if(e.x == 1 && e.y.min_inicio == element.value) {
                                                                const height = e.y.min_fin - e.y.min_inicio;
                                                                return(
                                                                    <div key={e.y.min_inicio} className={`tdata tdata-h-${height} ${e.color}`}>
                                                                        <button type="button" className='btn btn-secondary-outline close-btn' onClick={()=>{handleRemove(e)}}>
                                                                            <span aria-hidden="true"> &times; </span>
                                                                        </button>
                                                                        <div>
                                                                            <p>{e.asignatura.name}</p>
                                                                            <p>{e.teacher.name} {e.teacher.lastname}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        }) : null
                                                    }
                                                </td>
                                                <td className="pos">
                                                { 
                                                        data.length > 0 ? data.map(e => {
                                                            if(e.x == 2 && e.y.min_inicio == element.value) {
                                                                const height = e.y.min_fin - e.y.min_inicio;
                                                                return(
                                                                    <div key={e.y.min_inicio} className={`tdata tdata-h-${height} ${e.color}`}>
                                                                        <button type="button" className='btn btn-secondary-outline close-btn' onClick={()=>{handleRemove(e)}}>
                                                                            <span aria-hidden="true"> &times; </span>
                                                                        </button>
                                                                        <div>
                                                                            <p>{e.asignatura.name}</p>
                                                                            <p>{e.teacher.name} {e.teacher.lastname}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        }) : null
                                                    }
                                                </td>
                                                <td className="pos">
                                                { 
                                                        data.length > 0 ? data.map(e => {
                                                            if(e.x == 3 && e.y.min_inicio == element.value) {
                                                                const height = e.y.min_fin - e.y.min_inicio;
                                                                return(
                                                                    <div key={e.y.min_inicio} className={`tdata tdata-h-${height} ${e.color}`}>
                                                                        <button type="button" className='btn btn-secondary-outline close-btn' onClick={()=>{handleRemove(e)}}>
                                                                            <span aria-hidden="true"> &times; </span>
                                                                        </button>
                                                                        <div>
                                                                            <p>{e.asignatura.name}</p>
                                                                            <p>{e.teacher.name} {e.teacher.lastname}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        }) : null
                                                    }
                                                </td>
                                                <td className="pos">
                                                { 
                                                        data.length > 0 ? data.map(e => {
                                                            if(e.x == 4 && e.y.min_inicio == element.value) {
                                                                const height = e.y.min_fin - e.y.min_inicio;
                                                                return(
                                                                    <div key={e.y.min_inicio} className={`tdata tdata-h-${height} ${e.color}`}>
                                                                        <button type="button" className='btn btn-secondary-outline close-btn' onClick={()=>{handleRemove(e)}}>
                                                                            <span aria-hidden="true"> &times; </span>
                                                                        </button>
                                                                        <div>
                                                                            <p>{e.asignatura.name}</p>
                                                                            <p>{e.teacher.name} {e.teacher.lastname}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        }) : null
                                                    }
                                                </td>
                                                <td className="pos">
                                                { 
                                                        data.length > 0 ? data.map(e => {
                                                            if(e.x == 5 && e.y.min_inicio == element.value) {
                                                                const height = e.y.min_fin - e.y.min_inicio;
                                                                return(
                                                                    <div key={e.y.min_inicio} className={`tdata tdata-h-${height} ${e.color}`}>
                                                                        <button type="button" className='btn btn-secondary-outline close-btn' onClick={()=>{handleRemove(e)}}>
                                                                            <span aria-hidden="true"> &times; </span>
                                                                        </button>
                                                                        <div>
                                                                            <p>{e.asignatura.name}</p>
                                                                            <p>{e.teacher.name} {e.teacher.lastname}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        }) : null
                                                    }
                                                </td>
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