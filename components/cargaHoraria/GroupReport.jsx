import { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'
import { Settings } from 'react-feather';

import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import reportContext from '../../context/reports/reportContext'
import classContext from '../../context/classes/classContext'

const GroupReport = () => {
    const schoolyearsContext = useContext(schoolyearContext);
    const reportsContext = useContext(reportContext);
    const classesContext = useContext(classContext);
    const { schoolyear } = schoolyearsContext; // Datos Context
    const { getGroupReport , groupReport } = reportsContext; // Datos Context
    const { allClasses , getAllClasses } = classesContext; // Datos Context

    const [data, setData] = useState({
        labels: ['José Baquerizo', 'Jesse Baquerizo', 'Julio Baquerizo', 'Karina Gómez', 'Juan A', 'Oscar C'],
        datasets: [{
            label: 'Cantidad de horas asignadas',
            data: [10, 18, 9, 4, 15, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    })

    const [localForm, setLocalForm] = useState({
        option: "Semanal",
        id: "",
        schoolyear: ""
    })
    
    useEffect(() => {
        getGroupReport({id_schoolyear: schoolyear[0]._id, option: "Semanal"});
        getAllClasses({id_schoolyear: schoolyear[0]._id})
    }, [schoolyear])

    useEffect(() => {
        setData({
            ...data,
            labels: groupReport.names,
            datasets: [{
                label: 'Cantidad de horas asignadas',
                data: groupReport.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        })
    },[groupReport])

    useEffect(() => {
        getGroupReport({
            id_schoolyear: schoolyear[0]._id,
            option: localForm.option,
            id: localForm.id
        })
    }, [localForm])

    const handleChange = e => {
        let index = e.nativeEvent.target.selectedIndex;

        setLocalForm({
            [e.target.name]: e.target.value,
            "id": e.nativeEvent.target[index].getAttribute("data-id")
        })
    } 

    return (  
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
                <div className="header-left">
                    <h4 className="card-title">Análisis de docentes</h4>
                </div>
                <div className="header-right d-flex align-items-center mt-sm-0 mt-1 select-width">
                    <span className="mr-1"><Settings/></span>
                    <select className="form-control " name="option" onChange={handleChange}>
                        <option value="Semanal">Semanal</option>
                        <optgroup label="Diario">
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miercoles">Miercoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                        </optgroup>
                        <optgroup label="Asignaturas">
                            {
                                allClasses 
                                ? allClasses.map(xclass => (
                                    <option key={xclass._id} value="Asignatura" data-id={xclass._id}>{xclass.name}</option>
                                ))
                                : null
                            }
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="card-body">
                <Bar 
                    data = {data}
                    height={400}
                    width={600}
                />
            </div>
        </div>
    );
}
 
export default GroupReport;