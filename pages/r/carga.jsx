//Components
import ContentHeader from '../../components/layout/ContentHeader'

import { Bar, Doughnut } from 'react-chartjs-2'
import { Settings, User } from 'react-feather';

const carga = () => {

    const data = {
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
    }

    const data1 = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
        }],

        labels: [
            'Completos',
            'Vacios',
            'Incompletos'
        ]
    };

    return (  
        <>      
            <ContentHeader root="Home" section="Reportes" path="Carga horaria"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-6">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
                                    <div class="header-left">
                                        <h4 class="card-title">Análisis de docentes</h4>
                                    </div>
                                    <div class="header-right d-flex align-items-center mt-sm-0 mt-1">
                                        <span className="mr-1"><Settings/></span>
                                        <select className="form-control w-75">
                                            <option value="">Semanal</option>
                                            <option value="">Diario</option>
                                            <option value="">Asignaturas</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <Bar 
                                        data = {data}
                                        height={400}
                                        width={600}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Pruebas</h4>
                                </div>
                                <div class="card-body">
                                    <Doughnut
                                        data = {data1}
                                    />
                                    <div class="d-flex justify-content-between mt-3 mb-1">
                                        <div class="d-flex align-items-center">
                                            <User/>
                                            <span class="font-weight-bold ml-75 mr-25">Prueba</span>
                                            <span>- 80%</span>
                                        </div>
                                        <div>
                                            <span>2%</span>
                                            <i data-feather="arrow-up" class="text-success"></i>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between mb-1">
                                        <div class="d-flex align-items-center">
                                            <User/>
                                            <span class="font-weight-bold ml-75 mr-25">Prueba</span>
                                            <span>- 10%</span>
                                        </div>
                                        <div>
                                            <span>8%</span>
                                            <i data-feather="arrow-up" class="text-success"></i>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <User/>
                                            <span class="font-weight-bold ml-75 mr-25">Prueba</span>
                                            <span>- 10%</span>
                                        </div>
                                        <div>
                                            <span>-5%</span>
                                            <i data-feather="arrow-down" class="text-danger"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-12">
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
 
export default carga;