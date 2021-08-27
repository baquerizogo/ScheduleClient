import ContentHeader from '../layout/ContentHeader'
import Form from './Form'
import Table from './Table'

const Page = () => {
    return (
        <>
            <ContentHeader root="Home" section="Administración" path="Periodos lectivos"/>
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
 
export default Page;