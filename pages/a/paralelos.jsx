//Components
import ContentHeader from '../../components/layout/ContentHeader'
import Form from '../../components/paralelos/Form'
import Table from '../../components/paralelos/Table'

const Paralelos = () => {
    return (
        <>      
            <ContentHeader root="Home" section="Administración" path="Paralelos"/>
            <div className="content-body">
                <section id="basic-horizontal-layouts">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <Form/>
                        </div>
                        <div class="col-md-12 col-12">
                            <Table/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
 
export default Paralelos;