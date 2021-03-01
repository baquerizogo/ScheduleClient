//Components
import ContentHeader from '../../components/layout/ContentHeader'
import Form from '../../components/cursos/Form'
import Table from '../../components/cursos/Table'

const Cursos = () => {
    return (
        <>      
            <ContentHeader root="Home" section="Administración" path="Cursos"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Form/>
                        </div>
                        <div class="col-md-6 col-12">
                            <Table/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
 
export default Cursos;