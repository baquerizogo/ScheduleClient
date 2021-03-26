//Components
import ContentHeader from '../../components/layout/ContentHeader'
import Form from '../../components/paralelos/Form'
import Table from '../../components/paralelos/Table'
import RedirectSchoolyear from '../../components/redirect/RedirectSchoolyear'

const Paralelos = () => {
    return (
        <RedirectSchoolyear>      
            <ContentHeader root="Home" section="Administración" path="Paralelos"/>
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
        </RedirectSchoolyear>
    );
}
 
export default Paralelos;