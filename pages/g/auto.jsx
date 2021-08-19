import { useEffect, useContext } from 'react'

//Components
import AutoForm from '../../components/horarios/AutoForm'
import ContentHeader from '../../components/layout/ContentHeader'
import RedirectSchoolyear from '../../components/redirect/RedirectSchoolyear'

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
            <ContentHeader root="Home" section="Gestión" path="Creación de horarios auto."/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-12">
                            <AutoForm/>
                        </div>
                    </div>
                </section>
            </div>
        </RedirectSchoolyear>
    );
}
 
export default Schoolyears;