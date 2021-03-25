import { useContext, useEffect, useState } from 'react';
import { Settings } from 'react-feather';


import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import reportContext from '../../context/reports/reportContext'
import teacherContext from '../../context/teachers/teacherContext'
import courseContext from '../../context/courses/courseContext'
import parallelContext from '../../context/parallels/parallelContext'

const IndividualReport = () => {
    const schoolyearsContext = useContext(schoolyearContext);
    const reportsContext = useContext(reportContext);
    const teachersContext = useContext(teacherContext);
    const coursesContext = useContext(courseContext);
    const parallelsContext = useContext(parallelContext);
    
    const { schoolyear } = schoolyearsContext;
    const { getTeacher, teachers } = teachersContext;
    const { getCourse, courses } = coursesContext;
    const { getParallel, parallels } = parallelsContext;
    const { getIndividualReport , individualReport } = reportsContext; // Datos Context

    const [data, setData] = useState({});

    const [localForm, setLocalForm] = useState({
        option: "Semanal",
        id: "",
        id_teacher: "",
        courses: []
    });

    useEffect(() => {
        getTeacher({id_schoolyear: schoolyear[0]._id})
        getCourse({id_schoolyear: schoolyear[0]._id})
    }, [schoolyear])
 
    useEffect(() => {
        setTimeout(() => {
            console.log("Esperando")
            if(teachers.length > 0) {
                getIndividualReport({id_schoolyear: schoolyear[0]._id, option: "Semanal", id_teacher: teachers[0]._id});
            }
        }, 2000);
    }, [teachers])

    useEffect(() => {
        //Si hay cursos obtenemos los paralelos para cada curso
        if(courses) {
            for(let i in courses) {
                getParallel({id_course: courses[i]._id});
            }
        }
    }, [courses])
    
    useEffect(() => {
        if(parallels) {
            // -- Creamos una copia local de los paralelos y 
            // -- le añadimos el nombre del curso a cada paralelo
            let localParallels = parallels;
            for(let i in localParallels) {
                for(let j in courses) {
                    if( localParallels[i].id_course == courses[j]._id ) {
                        localParallels[i].courseName = courses[j].name;
                    }
                }
            }

            //Enviamos los paralelos y cursos al state
            setLocalForm({
                ...localForm,
                courses: [
                    ...localForm.courses,
                    ...localParallels
                ]
            })
        }
    }, [parallels])

    useEffect(() => {
        if(individualReport){
            setData({
                series: individualReport,
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
    }, [individualReport])

    useEffect(() => {
        if(localForm.id_teacher != "") {
            getIndividualReport({
                id_schoolyear: schoolyear[0]._id,
                option: localForm.option,
                id_teacher: localForm.id_teacher
            })
        }

        setData({
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
        })
    }, [localForm])

    const handleChange = e => {
        setLocalForm({
            ...localForm,
            [e.target.name]: e.target.value,
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
                        <option value="Diurno">Semanal Diurno</option>
                        <option value="Vespertino">Semanal Vespertino</option>

                        <optgroup label="Curso">
                            {
                                localForm.courses ?
                                    localForm.courses.map((course, index) => {
                                        for(let i in teachers) {
                                            if(teachers[i]._id == localForm.id_teacher) {
                                                for(let j in teachers[i].classes) {
                                                    for(let k in course.classes) {
                                                        if(teachers[i].classes[j].id_class === course.classes[k].id_class) {
                                                            return (<option key={index} value="1">{course.courseName} {course.name}</option>)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }) 
                                : null
                            }
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
                    <select className="form-control " name="id_teacher" onChange={handleChange}>
                        {
                            teachers ?
                                teachers.map(teacher => (
                                    <option key={teacher._id} value={teacher._id}>{teacher.name} {teacher.lastname}</option>
                                )) 
                            : null
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}
 
export default IndividualReport;