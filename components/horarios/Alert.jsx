import { useState } from "react";

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Alert = ({msg}) => {
    const [state, setState] = useState({
        options: {
            chart: {
              type: "heatmap"
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    colorScale: {
                        ranges: [{
                            from: -30,
                            to: 5,
                            name: 'Sin asignar',
                            color: '#00A100'
                        },
                        {
                            from: 6,
                            to: 20,
                            name: 'Disponibles',
                            color: '#128FD9'
                        },
                        {
                            from: 21,
                            to: 45,
                            name: 'Ocupados por el mismo profesor',
                            color: '#FFB200'
                        },
                        {
                            from: 46,
                            to: 55,
                            name: 'Conflicto',
                            color: '#FF0000'
                        }
                        ]
                  }
                }
              }
        },
        series: [
            {
                name: '08:00',
                data: [{
                    x: 'Lunes',
                    y: 55
                }]
            },
            {
                name: '09:00',
                data: [{
                    x: 'Lunes',
                    y: 1
                }]
            },
            {
                name: '10:00',
                data: [{
                    x: 'Lunes',
                    y: 1
                }]
            },
        ]
    });
    
/*
    if(msg.data) {
        for(let i in msg.data.data) {
        }
    }
*/
    return (  
        <div className="card shadow-none bg-transparent border-danger">
            <div className="card-header">
                <h3 className="card-title">Alerta</h3>
            </div>
            <div className="card-body">
                <p>{msg.text}</p>
                <div className="row">
                    <div className="col">
                        {/*<Chart
                            options={state.options}
                            series={state.series}
                            type="heatmap"
                            
                        />*/}        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Alert ;