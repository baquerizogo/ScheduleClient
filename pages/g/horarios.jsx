//Components
import CourseForm from '../../components/horarios/CourseForm'
import Panel from '../../components/horarios/panel'
import ScheduleForm from '../../components/horarios/ScheduleForm'
import ContentHeader from '../../components/layout/ContentHeader'

const Schoolyears = () => {
    return (
        <>      
            <ContentHeader root="Home" section="Gestión" path="Gestión de horarios"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-6">
                            <CourseForm/>
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
        </>
    );
}
 
export default Schoolyears;