//Components
import ContentHeader from '../../components/layout/ContentHeader'
import Form from '../../components/acceso/Form'
import Table from '../../components/acceso/Table'

const Acceso = () => {
    return (
        <>
            <ContentHeader root="Usuario" section="Acceso" path="Cuentas"/>
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
 
export default Acceso;