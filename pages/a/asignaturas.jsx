//Components
import ContentHeader from '../../components/layout/ContentHeader'
import Form from '../../components/asignaturas/Form'
import Table from '../../components/asignaturas/Table'

const Asignaturas = () => {
    return (
        <>      
            <ContentHeader root="Home" section="Administración" path="Asignaturas"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <Form/>
                        </div>
                        <div className="col-md-12 col-12">
                            <Table/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
 
export default Asignaturas;