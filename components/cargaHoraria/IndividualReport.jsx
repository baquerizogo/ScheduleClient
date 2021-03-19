import { useContext, useEffect, useState } from 'react';
import { Settings } from 'react-feather';


import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import reportContext from '../../context/reports/reportContext'
import classContext from '../../context/classes/classContext'

const IndividualReport = () => {
    const schoolyearsContext = useContext(schoolyearContext);
    const reportsContext = useContext(reportContext);
    const classesContext = useContext(classContext);
    const { schoolyear } = schoolyearsContext; // Datos Context
    const { getGroupReport , groupReport } = reportsContext; // Datos Context
    const { allClasses , getAllClasses } = classesContext; // Datos Context

    const [data, setData] = useState({
        series: [
            {
                name: "Sociales",
                data: [44, 55, 41, 67, 22],
            },
            {
                name: "Ciencias",
                data: [13, 23, 20, 8, 13],
            },
            {
                name: "Matemáticas",
                data: [11, 17, 15, 15, 21],
            },
            {
                name: "Física",
                data: [21, 7, 25, 13, 22],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: true,
                },
                zoom: {
                    enabled: true,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: false,
                },
            },
            xaxis: {
                type: "text",
                categories: [
                    "Lunes",
                    "Martes",
                    "Miercoles",
                    "Jueves",
                    "Viernes"
                ],
            },
            legend: {
                position: "right",
                offsetY: 40,
            },
            fill: {
                opacity: 0.8,
            },
        }
    });

    const [localForm, setLocalForm] = useState({
        option: ""
    });

    const [teacher, setTeacher] = useState({});

    
    /*
    useEffect(() => {
        getGroupReport({id_schoolyear: schoolyear[0]._id, option: "Semanal"});
        getAllClasses({id_schoolyear: schoolyear[0]._id})
    }, [schoolyear])
    
    useEffect(() => {
        setData({
            ...data,
            labels: groupReport.names,
            datasets: [{
                label: 'Cantidad de minutos asignados',
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
    */

    useEffect(() => {
        if(localForm.option === "Semanal") {
            setData({
                series: [
                    {
                        name: "Ciencias Naturales",
                        data: [0, 2.66, 0, 0, 1.33],
                    },
                    {
                        name: "Matemáticas",
                        data: [1.33, 0, 0, 0, 0],
                    }
                ],
                options: {
                    chart: {
                        type: "bar",
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true,
                        },
                        zoom: {
                            enabled: true,
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: "bottom",
                                    offsetX: -10,
                                    offsetY: 0,
                                },
                            },
                        },
                    ],
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            horizontal: false,
                        },
                    },
                    xaxis: {
                        type: "text",
                        categories: [
                            "Lunes",
                            "Martes",
                            "Miercoles",
                            "Jueves",
                            "Viernes"
                        ],
                    },
                    legend: {
                        position: "right",
                        offsetY: 40,
                    },
                    fill: {
                        opacity: 0.8,
                    },
                }
            })
        } else if (localForm.option === "Semanal-diurno") {
            setData({
                series: [
                    {
                        name: "Ciencias Naturales",
                        data: [0, 1.33, 0, 0, 1.33],
                    },
                    {
                        name: "Matemáticas",
                        data: [0, 0, 0, 0, 0],
                    }
                ],
                options: {
                    chart: {
                        type: "bar",
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true,
                        },
                        zoom: {
                            enabled: true,
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: "bottom",
                                    offsetX: -10,
                                    offsetY: 0,
                                },
                            },
                        },
                    ],
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            horizontal: false,
                        },
                    },
                    xaxis: {
                        type: "text",
                        categories: [
                            "Lunes",
                            "Martes",
                            "Miercoles",
                            "Jueves",
                            "Viernes"
                        ],
                    },
                    legend: {
                        position: "right",
                        offsetY: 40,
                    },
                    fill: {
                        opacity: 0.8,
                    },
                }
            })
        } else if (localForm.option === "Semanal-vespertino") {
            setData({
                series: [
                    {
                        name: "Ciencias Naturales",
                        data: [0, 1.33, 0, 0, 0],
                    },
                    {
                        name: "Matemáticas",
                        data: [1.33, 0, 0, 0, 0],
                    }
                ],
                options: {
                    chart: {
                        type: "bar",
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true,
                        },
                        zoom: {
                            enabled: true,
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: "bottom",
                                    offsetX: -10,
                                    offsetY: 0,
                                },
                            },
                        },
                    ],
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            horizontal: false,
                        },
                    },
                    xaxis: {
                        type: "text",
                        categories: [
                            "Lunes",
                            "Martes",
                            "Miercoles",
                            "Jueves",
                            "Viernes"
                        ],
                    },
                    legend: {
                        position: "right",
                        offsetY: 40,
                    },
                    fill: {
                        opacity: 0.8,
                    },
                }
            })
        } else if (localForm.option === "1") {
            setData({
                series: [
                    {
                        name: "Ciencias Naturales",
                        data: [0, 1.33, 0, 0, 1.33],
                    },
                    {
                        name: "Matemáticas",
                        data: [0, 0, 0, 0, 0],
                    }
                ],
                options: {
                    chart: {
                        type: "bar",
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true,
                        },
                        zoom: {
                            enabled: true,
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: "bottom",
                                    offsetX: -10,
                                    offsetY: 0,
                                },
                            },
                        },
                    ],
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            horizontal: false,
                        },
                    },
                    xaxis: {
                        type: "text",
                        categories: [
                            "Lunes",
                            "Martes",
                            "Miercoles",
                            "Jueves",
                            "Viernes"
                        ],
                    },
                    legend: {
                        position: "right",
                        offsetY: 40,
                    },
                    fill: {
                        opacity: 0.8,
                    },
                }
            })
        } else if (localForm.option === "2") {
            setData({
                series: [
                    {
                        name: "Ciencias Naturales",
                        data: [0, 1.33, 0, 0, 0],
                    },
                    {
                        name: "Matemáticas",
                        data: [1.33, 0, 0, 0, 0],
                    }
                ],
                options: {
                    chart: {
                        type: "bar",
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true,
                        },
                        zoom: {
                            enabled: true,
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: "bottom",
                                    offsetX: -10,
                                    offsetY: 0,
                                },
                            },
                        },
                    ],
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            horizontal: false,
                        },
                    },
                    xaxis: {
                        type: "text",
                        categories: [
                            "Lunes",
                            "Martes",
                            "Miercoles",
                            "Jueves",
                            "Viernes"
                        ],
                    },
                    legend: {
                        position: "right",
                        offsetY: 40,
                    },
                    fill: {
                        opacity: 0.8,
                    },
                }
            })
        }
    },[localForm])

    const handleChange = e => {
        setLocalForm({
            [e.target.name]: e.target.value,
        })
    } 

    const handleChangeTeacher = e => {
        setTeacher({
            [e.target.name]: e.target.value,
        })
        setLocalForm({
            "option": "Semanal",
        })
    }

    return (  
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
                <div className="header-left">
                    <h4 className="card-title">Análisis individual</h4>
                </div>
                <div className="header-right d-flex align-items-center mt-sm-0 mt-1 select-width">
                    <span className="mr-1"><Settings/></span>
                    <select className="form-control " name="option" onChange={handleChange}>
                        <option value="Semanal">Semanal</option>
                        <option value="Semanal-diurno">Semanal Diurno</option>
                        <option value="Semanal-vespertino">Semanal Vespertino</option>

                        <optgroup label="Curso">
                            <option value="1">Sexto paralelo A</option>
                            <option value="2">Sexto paralelo B</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="card-body">
            <div className="row">
                <div className="col-12">
                    <Chart 
                        options={data.options} 
                        series={data.series} 
                        type="bar" 
                        height={350} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-5 ml-3 mb-3 offset-4">
                    <label htmlFor="option">Docente:</label>
                    <select className="form-control " name="teacher" onChange={handleChangeTeacher}>
                        <option value="1">Seleccionar</option>
                        <option value="2">José Baquerizo</option>
                        <option value="3">Jesse Gómez</option>
                        <option value="4">Karina</option>
                        <option value="5">Brenda Panchana</option>

                    </select>
                </div>
            </div>
        </div>
    );
}
 
export default IndividualReport;