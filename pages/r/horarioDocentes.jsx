import { useEffect, useContext, useState } from 'react'

//Components
import CourseForm from '../../components/horarioDocentes/CourseForm'
import Panel from '../../components/horarioDocentes/panel'
import ContentHeader from '../../components/layout/ContentHeader'

import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import scheduleContext from '../../context/schedules/scheduleContext'
import RedirectSchoolyear from '../../components/redirect/RedirectSchoolyear'

const horarioDocente = () => {
    const schoolyearsContext = useContext(schoolyearContext);
    const schedulesContext = useContext(scheduleContext);

    //Obtener el año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    //Obtener datos necesarios para los horarios
    const { getSchedule } = schedulesContext;

    //Estate del horario
    const [state, setState] = useState();

    useEffect(() => {
        getSchedule({id_schoolyear: schoolyear[0]._id});
    }, [])

    const dataCallback = (data) => {
        setState(data);
    }

    return (
        <RedirectSchoolyear>      
            <ContentHeader root="Home" section="Reportes" path="Visualización de horarios"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-12">
                            <CourseForm dataCallback={dataCallback}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <Panel state={state}/>
                        </div>
                    </div>
                </section>
            </div>
        </RedirectSchoolyear>
    );
}
 
export default horarioDocente;