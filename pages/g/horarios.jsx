import { useEffect, useContext } from 'react'

//Components
import CourseForm from '../../components/horarios/CourseForm'
import Panel from '../../components/horarios/Panel'
import ScheduleForm from '../../components/horarios/ScheduleForm'
import ContentHeader from '../../components/layout/ContentHeader'
import RedirectSchoolyear from '../../components/redirect/RedirectSchoolyear'
import Alert from '../../components/horarios/Alert'

import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import scheduleContext from '../../context/schedules/scheduleContext'

const Schoolyears = () => {
    const schoolyearsContext = useContext(schoolyearContext);
    const schedulesContext = useContext(scheduleContext);

    //Obtener el año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    //Obtener datos necesarios para los horarios
    const { getSchedule, msg } = schedulesContext;

    useEffect(() => {
        if(schoolyear) getSchedule({id_schoolyear: schoolyear[0]._id});
    }, [])

    return ( 
        <RedirectSchoolyear>
            <ContentHeader root="Home" section="Gestión" path="Gestión de horarios"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-6">
                            <CourseForm/>
                            { msg ? <Alert msg={msg}/> : null }
                        </div>
                        <div className="col-6">
                            <ScheduleForm/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <Panel/>
                        </div>
                    </div>
                </section>
            </div>
        </RedirectSchoolyear>
    );
}
 
export default Schoolyears;