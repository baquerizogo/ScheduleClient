//Components
import ContentHeader from '../../components/layout/ContentHeader'
import Form from '../../components/cursos/Form'
import Table from '../../components/cursos/Table'
import RedirectSchoolyear from '../../components/redirect/RedirectSchoolyear'

const Cursos = () => {
    return (
        <RedirectSchoolyear>      
            <ContentHeader root="Home" section="Administración" path="Cursos"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Form/>
                        </div>
                        <div className="col-md-6 col-12">
                            <Table/>
                        </div>
                    </div>
                </section>
            </div>
        </RedirectSchoolyear>
    );
}
 
export default Cursos;