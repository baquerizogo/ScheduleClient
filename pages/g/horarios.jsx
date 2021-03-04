//Components
import Panel from '../../components/horarios/panel'
import ContentHeader from '../../components/layout/ContentHeader'

const Schoolyears = () => {
    return (
        <>      
            <ContentHeader root="Home" section="Gestión" path="Gestión de horarios"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
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